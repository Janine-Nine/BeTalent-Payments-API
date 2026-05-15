"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = require("../../infrastructure/repositories/UserRepository");
const repo = new UserRepository_1.UserRepository();
await repo.create({
    name: "Janine",
    email: "janine@email.com",
    password: "123456",
    role: "ADMIN"
});
//# sourceMappingURL=CreateUserUseCase.js.map