"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const SECRET = "secret";
class AuthService {
    generateToken(user) {
        return jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: "1d" });
    }
    hashPassword(password) {
        return bcryptjs_1.default.hashSync(password, 10);
    }
    compare(password, hash) {
        return bcryptjs_1.default.compareSync(password, hash);
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map