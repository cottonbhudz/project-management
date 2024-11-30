import { Router } from "express";
import { getTeans } from "../controllers/teamController";

const router = Router();

router.get("/", getTeans);

export default router;
