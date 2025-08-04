import { Router } from "express";
import { createResult, getResult } from "../controllers/resultController.js";
// import auth and role middleware when implemented

const router = Router();

// router.post('/', auth, checkRole(['admin']), createResult);
// router.get('/:studentId', auth, checkRole(['student', 'faculty', 'admin']), getResult);

export default router;
