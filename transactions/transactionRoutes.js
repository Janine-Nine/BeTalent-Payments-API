"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TransactionController_1 = require("../controllers/TransactionController");
const TransactionsRefund_1 = require("../controllers/TransactionsRefund");
const auth_1 = require("../middlewares/auth");
const routes = (0, express_1.Router)();
const controller = new TransactionController_1.TransactionController();
const refundController = new TransactionsRefund_1.TransactionsRefund();
routes.get("/transactions", auth_1.authMiddleware, controller.list);
routes.get("/transactions/:id", auth_1.authMiddleware, controller.detail);
routes.post("/transactions/:id/refund", auth_1.authMiddleware, refundController.refund);
exports.default = routes;
//# sourceMappingURL=transactionRoutes.js.map