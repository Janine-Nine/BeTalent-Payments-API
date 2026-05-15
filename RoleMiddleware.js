"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role = role;
function role(roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: "forbidden" });
        }
        next();
    };
}
//# sourceMappingURL=RoleMiddleware.js.map