"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Gateway2 {
    async charge(data) {
        const res = await axios_1.default.post("http://localhost:3002/transacoes", {
            valor: data.amount,
            nome: data.name,
            email: data.email,
            numeroCartao: data.cardNumber,
            cvv: data.cvv
        }, {
            headers: {
                "Gateway-Auth-Token": "tk_f2198cc671b5289fa856",
                "Gateway-Auth-Secret": "3d15e8ed6131446ea7e3456728b1211f"
            }
        });
        return { success: true, id: res.data.id };
    }
}
exports.default = Gateway2;
//# sourceMappingURL=Gateway2.js.map