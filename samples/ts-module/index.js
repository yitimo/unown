"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
// import { createApp } from 'vue'
function Child() {
    return react_1.default.createElement("div", null, "Hello");
}
function App() {
    return react_1.default.createElement(Child, null);
}
exports.App = App;
