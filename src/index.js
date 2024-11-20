"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_routes_1 = __importDefault(require("./routes/book-routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use("/api", book_routes_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to the Node.js + TypeScript API!");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
