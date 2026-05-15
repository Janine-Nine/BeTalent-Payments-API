"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentUseCase = void 0;
class CreatePaymentUseCase {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async execute(data) {
        if (!data.amount || !data.cardNumber || !data.cvv) {
            throw new Error("Invalid payment data");
        }
        const paymentResult = await this.paymentService.processPayment(data);
        return {
            success: true,
            transactionId: paymentResult.id
        };
    }
}
exports.CreatePaymentUseCase = CreatePaymentUseCase;
//# sourceMappingURL=CreatePaymentUseCase.js.map