"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp, printf, colorize, json } = winston_1.default.format;
// formato bonito para console
const logFormat = printf(({ level, message, timestamp, ...meta }) => {
    return `${timestamp} [${level}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ""}`;
});
exports.logger = winston_1.default.createLogger({
    level: "info",
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), json()),
    transports: [
        // console
        new winston_1.default.transports.Console({
            format: combine(colorize(), timestamp({ format: "HH:mm:ss" }), logFormat)
        }),
        // arquivo geral
        new winston_1.default.transports.File({
            filename: "logs/app.log"
        }),
        // somente erros
        new winston_1.default.transports.File({
            filename: "logs/error.log",
            level: "error"
        })
    ]
});
// helper class (boa prática usar no projeto)
class Logger {
    static info(message, data) {
        exports.logger.info(message, data);
    }
    static error(message, data) {
        exports.logger.error(message, data);
    }
    static warn(message, data) {
        exports.logger.warn(message, data);
    }
    static debug(message, data) {
        exports.logger.debug(message, data);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map