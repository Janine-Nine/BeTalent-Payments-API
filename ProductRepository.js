"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const database_1 = require("../../config/database");
class ProductRepository {
    async create(product) {
        const query = `
      INSERT INTO products (name, price)
      VALUES (?, ?)
    `;
        const [result] = await database_1.db.execute(query, [
            product.name,
            product.price
        ]);
        return {
            id: result.insertId,
            ...product
        };
    }
    async findById(id) {
        const query = `
      SELECT *
      FROM products
      WHERE id = ?
    `;
        const [rows] = await database_1.db.execute(query, [id]);
        return rows[0];
    }
    async list() {
        const query = `
      SELECT *
      FROM products
    `;
        const [rows] = await database_1.db.execute(query);
        return rows;
    }
    async update(id, data) {
        const query = `
      UPDATE products
      SET name = ?, price = ?
      WHERE id = ?
    `;
        await database_1.db.execute(query, [
            data.name,
            data.price,
            id
        ]);
        return this.findById(id);
    }
    async delete(id) {
        const query = `
      DELETE FROM products
      WHERE id = ?
    `;
        await database_1.db.execute(query, [id]);
    }
}
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map