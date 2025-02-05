"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_openid_connect_1 = require("express-openid-connect");
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./utils/config");
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_openid_connect_1.auth)(config_1.config));
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
app.use("/tasks", taskRoutes_1.default);
// app.use((err :unknown, req :Request, res : Response, next :NextFunction) => {
//   console.error(err);
//   res.status(err?.status || 500).json({ message: err.message || "Internal Server Error" });
// });
// Run the server!
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
