"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const mysql_1 = require("../infra/mysql");
class TransactionController {
    async list(req, res) {
        try {
            const [rows] = await mysql_1.pool.query(`
          SELECT
            t.id,
            t.amount,
            t.status,
            t.created_at,
            c.name as client,
            g.name as gateway
          FROM transactions t
          JOIN clients c ON c.id = t.client_id
          JOIN gateways g ON g.id = t.gateway_id
          ORDER BY t.id DESC
        `);
            return res.json(rows);
        }
        catch (e) {
            return res.status(500).json({ error: "Internal error" });
        }
    }
    async detail(req, res) {
        try {
            const { id } = req.params;
            const [trx] = await mysql_1.pool.query(`
          SELECT
            t.id,
            t.amount,
            t.status,
            t.created_at,
            c.name as client,
            g.name as gateway
          FROM transactions t
          JOIN clients c ON c.id = t.client_id
          JOIN gateways g ON g.id = t.gateway_id
          WHERE t.id = ?
        `, [id]);
            if (trx.length === 0)
                return res.status(404).json({ error: "Transaction not found" });
            const [items] = await mysql_1.pool.query(`
          SELECT
            ti.quantity,
            ti.price,
            p.name
          FROM transaction_items ti
          JOIN products p ON p.id = ti.product_id
          WHERE ti.transaction_id = ?
        `, [id]);
            return res.json({
                ...trx[0],
                items
            });
        }
        catch (e) {
            return res.status(500).json({ error: "Internal error" });
        }
    }
}
exports.TransactionController = TransactionController;
//# sourceMappingURL=TransactionController.js.map