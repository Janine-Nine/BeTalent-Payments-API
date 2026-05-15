"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayFactory = void 0;
class GatewayFactory {
    static create(name) {
        switch (name) {
            case "gateway1":
                return new Gateway1();
            case "gateway2":
                return new Gateway2();
            default:
                throw new Error("Gateway not supported");
        }
    }
}
exports.GatewayFactory = GatewayFactory;
//# sourceMappingURL=GatewayFactory.js.map