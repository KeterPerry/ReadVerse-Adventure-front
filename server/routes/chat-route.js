import express from "express";
import { chatController } from "../controllers/chatController.js";

export const chatRouter = express.Router();

chatRouter.post("/chatquestion", chatController);
