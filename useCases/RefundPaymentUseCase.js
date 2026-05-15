"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundPaymentUseCase = void 0;
const mysql_1 = require("../infra/mysql");
class RefundPaymentUseCase {
    async execute(id) {
        const [trx] = await mysql_1.pool.query("SELECT * FROM transactions WHERE id=?", [id]);
        if (trx.length === 0)
            throw new Error("transaction not found");
        await mysql_1.pool.query("UPDATE transactions SET status='REFUNDED' WHERE id=?", [id]);
        return { message: "refund done" };
    }
}
exports.RefundPaymentUseCase = RefundPaymentUseCase;
//# sourceMappingURL=RefundPaymentUseCase.js.map