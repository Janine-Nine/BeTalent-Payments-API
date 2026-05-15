"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GatewayController_1 = require("../controllers/GatewayController");
const auth_1 = require("../middlewares/auth");
const routes = (0, express_1.Router)();
const controller = new GatewayController_1.GatewayController();
routes.patch("/gateways/:id/activate", auth_1.authMiddleware, controller.activate);
routes.patch("/gateways/:id/priority", auth_1.authMiddleware, controller.changePriority);
exports.default = routes;
//# sourceMappingURL=gatewayRoutes.js.map