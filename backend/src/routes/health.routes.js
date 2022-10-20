import { Router } from "express";
import { getHealth } from "../controllers/health.controller.js";

const router = Router();

//routes
router.get('/', getHealth);

export default router;