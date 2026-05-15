"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const Orm_1 = require("@ioc:Adonis/Lucid/Orm");
class Transaction extends Orm_1.BaseModel {
}
exports.default = Transaction;
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Transaction.prototype, "clientId", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Transaction.prototype, "gateway", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Transaction.prototype, "externalId", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Transaction.prototype, "status", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
//# sourceMappingURL=Transaction.js.map