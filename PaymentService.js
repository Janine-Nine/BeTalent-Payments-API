"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const ProductRepository_1 = require("../repositories/ProductRepository");
const GatewayService_1 = require("./GatewayService");
class PaymentService {
    async execute(data) {
        const productRepo = new ProductRepository_1.ProductRepository();
        let total = 0;
        for (const item of data.products) {
            const product = await productRepo.findById(item.product_id);
            total += product.amount * item.quantity;
        }
        const gateway = new GatewayService_1.GatewayService();
        const payment = await gateway.processPayment(total, data.client, data.card);
        return payment;
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=PaymentService.js.map