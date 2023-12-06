"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function Child() {
    return (0, jsx_runtime_1.jsx)("div", { children: "Hello" });
}
function App() {
    return (0, jsx_runtime_1.jsx)(Child, {});
}
exports.App = App;
