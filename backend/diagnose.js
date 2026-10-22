process.on('uncaughtException', (err) => {
  console.error('=== UNCAUGHT ERROR ===');
  console.error('Message:', err.message);
  console.error('Stack:', err.stack);
  process.exit(1);
});
process.on('unhandledRejection', (reason) => {
  console.error('=== UNHANDLED REJECTION ===');
  console.error(reason);
});
require('./index.js');
