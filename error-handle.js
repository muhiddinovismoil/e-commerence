// Error handling
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

// Xato chiqaradigan kod
// setTimeout(() => {
//   throw new Error("This will trigger uncaughtException");
// }, 1000);

// // Va'da rad etilishi
new Promise((resolve, reject) => {
  reject("This will trigger unhandledRejection");
});
