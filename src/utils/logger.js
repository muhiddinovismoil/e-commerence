import { Logtail } from "@logtail/node";
import { LogtailTransport } from "@logtail/winston";
import "winston-mongodb";
import { createLogger, format, transports } from "winston";
import { config } from "dotenv";
config();

// Create a Logtail client
const logtail = new Logtail(process.env.LOGGER_TOKEN);

export const logger = createLogger({
  level: "silly",
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.colorize({ all: true })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "application.log" }),
    new LogtailTransport(logtail),
    // new transports.MongoDB({
    //   level: "error",
    //   db: process.env.MONGO_URI,
    //   collection: "error_log",
    // }),
  ],
});

// import chalk from "chalk";
// import util from "util";

// class Logger {
//   constructor() {
//     this.levels = {
//       debug: 0,
//       info: 1,
//       warn: 2,
//       error: 3,
//     };

//     // Set default log level
//     this.currentLevel = process.env.LOG_LEVEL || "debug";
//   }

//   // Method to set the logging level
//   setLevel(level) {
//     if (this.levels[level] !== undefined) {
//       this.currentLevel = level;
//     } else {
//       console.warn(`Logger: Invalid log level '${level}'`);
//     }
//   }

//   // Method to check if a message should be logged based on the current level
//   shouldLog(level) {
//     return this.levels[level] >= this.levels[this.currentLevel];
//   }

//   // Formatting the message
//   formatMessage(level, message) {
//     const timestamp = new Date().toISOString();
//     let levelStr = level.toUpperCase();

//     switch (level) {
//       case "debug":
//         levelStr = chalk.blue(levelStr);
//         break;
//       case "info":
//         levelStr = chalk.green(levelStr);
//         break;
//       case "warn":
//         levelStr = chalk.yellow(levelStr);
//         break;
//       case "error":
//         levelStr = chalk.red(levelStr);
//         break;
//       default:
//         break;
//     }

//     return `${chalk.gray(timestamp)} [${levelStr}] ${message}`;
//   }

//   // Log methods for each level
//   debug(...args) {
//     if (this.shouldLog("debug")) {
//       console.debug(this.formatMessage("debug", util.format(...args)));
//     }
//   }

//   info(...args) {
//     if (this.shouldLog("info")) {
//       console.info(this.formatMessage("info", util.format(...args)));
//     }
//   }

//   warn(...args) {
//     if (this.shouldLog("warn")) {
//       console.warn(this.formatMessage("warn", util.format(...args)));
//     }
//   }

//   error(...args) {
//     if (this.shouldLog("error")) {
//       console.error(this.formatMessage("error", util.format(...args)));
//     }
//   }
// }

// export const logger = new Logger();
