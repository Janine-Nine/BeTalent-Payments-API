"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = require("../controllers/ProductController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.get("/products", authMiddleware_1.authMiddleware, ProductController_1.ProductController.list);
router.post("/buy", authMiddleware_1.authMiddleware, ProductController_1.ProductController.buy);
exports.default = router;
//# sourceMappingURL=productRoutes.js.map