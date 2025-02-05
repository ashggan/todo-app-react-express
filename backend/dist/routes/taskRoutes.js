"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../Controllers/taskController");
const router = express_1.default.Router();
router.post("/", taskController_1.createTask);
router.get("/:userId", taskController_1.getTasksByUser);
router.put("/:id", taskController_1.updateTask);
router.delete("/:id", taskController_1.deleteTask);
// router.get("/search", searchTasks);
router.get("/search", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, taskController_1.searchTasks)(req, res).catch(next);
}));
exports.default = router;
