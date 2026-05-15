"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyProductUseCase = void 0;
const logger_1 = require("../../infra/logger");
class BuyProductUseCase {
    constructor(clientRepo, productRepo, transactionRepo, gatewayService) {
        this.clientRepo = clientRepo;
        this.productRepo = productRepo;
        this.transactionRepo = transactionRepo;
        this.gatewayService = gatewayService;
    }
    async execute(data) {
        logger_1.Logger.info("Starting purchase usecase");
        const client = await this.clientRepo.findById(data.clientId);
        if (!client)
            throw new Error("Client not found");
        let total = 0;
        for (const item of data.products) {
            const product = await this.productRepo.findById(item.productId);
            if (!product)
                throw new Error("Product not found");
            if (product.stock < item.quantity)
                throw new Error("Insufficient stock");
            total += product.price * item.quantity;
        }
        logger_1.Logger.info("Total calculated", total);
        const gatewayResponse = await this.gatewayService.processPayment({
            amount: total,
            cardNumber: data.cardNumber,
            cvv: data.cvv
        });
        if (!gatewayResponse.success)
            throw new Error("Payment refused");
        const transaction = await this.transactionRepo.create({
            clientId: data.clientId,
            amount: total,
            status: "APPROVED",
            gatewayId: gatewayResponse.gatewayId
        });
        for (const item of data.products) {
            await this.productRepo.decreaseStock(item.productId, item.quantity);
        }
        logger_1.Logger.info("Purchase finished");
        return transaction;
    }
}
exports.BuyProductUseCase = BuyProductUseCase;
//# sourceMappingURL=BuyProductUseCase.js.map