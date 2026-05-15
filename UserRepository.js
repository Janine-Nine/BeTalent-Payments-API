"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const database_1 = require("../../config/database");
class UserRepository {
    async create(user) {
        const query = `
      INSERT INTO users (name, email, password, role)
      VALUES (?, ?, ?, ?)
    `;
        const [result] = await database_1.db.execute(query, [
            user.name,
            user.email,
            user.password,
            user.role
        ]);
        return {
            id: result.insertId,
            ...user
        };
    }
    async findByEmail(email) {
        const query = `
      SELECT * FROM users
      WHERE email = ?
    `;
        const [rows] = await database_1.db.execute(query, [email]);
        return rows[0];
    }
    async findById(id) {
        const query = `
      SELECT * FROM users
      WHERE id = ?
    `;
        const [rows] = await database_1.db.execute(query, [id]);
        return rows[0];
    }
    async list() {
        const query = `
      SELECT id, name, email, role
      FROM users
    `;
        const [rows] = await database_1.db.execute(query);
        return rows;
    }
    async update(id, data) {
        const query = `
      UPDATE users
      SET name = ?, email = ?, role = ?
      WHERE id = ?
    `;
        await database_1.db.execute(query, [
            data.name,
            data.email,
            data.role,
            id
        ]);
        return this.findById(id);
    }
    async delete(id) {
        const query = `
      DELETE FROM users
      WHERE id = ?
    `;
        await database_1.db.execute(query, [id]);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map