"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsRefund = void 0;
const mysql_1 = require("../infra/mysql");
class TransactionsRefund {
    async refund(req, res) {
        const { id } = req.params;
        const [trx] = await mysql_1.pool.query("SELECT * FROM transactions WHERE id = ?", [id]);
        if (trx.length === 0)
            return res.status(404).json({ error: "Transaction not found" });
        if (trx[0].status === "REFUNDED")
            return res.status(400).json({ error: "Already refunded" });
        await mysql_1.pool.query("UPDATE transactions SET status = 'REFUNDED' WHERE id = ?", [id]);
        await mysql_1.pool.query("INSERT INTO refunds(transaction_id,status) VALUES(?,?)", [id, "DONE"]);
        return res.json({ message: "Refund success" });
    }
}
exports.TransactionsRefund = TransactionsRefund;
//# sourceMappingURL=TransactionsRefund.js.map