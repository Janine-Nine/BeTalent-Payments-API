"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayService = void 0;
const axios_1 = __importDefault(require("axios"));
class GatewayService {
    async processPayment(amount, client, card) {
        try {
            const response = await axios_1.default.post("http://localhost:3001/transactions", {
                amount,
                name: client.name,
                email: client.email,
                cardNumber: card.number,
                cvv: card.cvv
            });
            return {
                gateway: "gateway1",
                transaction: response.data
            };
        }
        catch {
            const response = await axios_1.default.post("http://localhost:3002/transacoes", {
                valor: amount,
                nome: client.name,
                email: client.email,
                numeroCartao: card.number,
                cvv: card.cvv
            });
            return {
                gateway: "gateway2",
                transaction: response.data
            };
        }
    }
}
exports.GatewayService = GatewayService;
//# sourceMappingURL=GatewayService.js.map