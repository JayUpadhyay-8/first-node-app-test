"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tuit_1 = __importDefault(require("./Tuit"));
class Tuit2Tag {
    constructor() {
        this.tag = '';
        this.tuit = new Tuit_1.default();
    }
}
exports.default = Tuit2Tag;
