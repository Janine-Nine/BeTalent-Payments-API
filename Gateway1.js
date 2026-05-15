"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Gateway1 {
    async charge(data) {
        const login = await axios_1.default.post("http://localhost:3001/login", {
            email: "dev@betalent.tech",
            token: "FEC9BB078BF338F464F96B48089EB498"
        });
        const token = login.data.token;
        const res = await axios_1.default.post("http://localhost:3001/transactions", {
            amount: data.amount,
            name: data.name,
            email: data.email,
            cardNumber: data.cardNumber,
            cvv: data.cvv
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return { success: true, id: res.data.id };
    }
}
exports.default = Gateway1;
//# sourceMappingURL=Gateway1.js.map