const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runCommand(command, cwd, env = {}) {
  console.log(`Running: ${command} in ${cwd}`);
  execSync(command, { stdio: 'inherit', cwd: path.join(__dirname, cwd), env: { ...process.env, ...env } });
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  // 1. Build Frontend
  runCommand('npm install', 'frontend');
  runCommand('npm run build', 'frontend', { CI: 'false' });

  // 2. Build Dashboard
  runCommand('npm install', 'Dashboard');
  runCommand('npm run build', 'Dashboard');

  // 3. Setup root dist
  const rootDist = path.join(__dirname, 'dist');
  if (fs.existsSync(rootDist)) {
    fs.rmSync(rootDist, { recursive: true, force: true });
  }
  fs.mkdirSync(rootDist);

  // 4. Copy Frontend build
  const frontendBuild = path.join(__dirname, 'frontend', 'build');
  copyRecursiveSync(frontendBuild, rootDist);

  // 5. Copy Dashboard build
  const dashboardDist = path.join(__dirname, 'dist', 'dashboard');
  const dashboardBuild = path.join(__dirname, 'Dashboard', 'dist');
  copyRecursiveSync(dashboardBuild, dashboardDist);

  console.log("Unified build completed successfully!");
} catch (error) {
  console.error("Build failed:", error);
  process.exit(1);
}
