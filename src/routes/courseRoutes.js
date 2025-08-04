import { Router } from "express";
import {
  createCourse,
  getCourses,
  addMaterial,
  getMaterials,
} from "../controllers/courseController.js";
// import auth and role middleware when implemented

const router = Router();

// router.post('/', auth, checkRole(['admin']), createCourse);
router.get("/", getCourses);
// router.post('/:courseId/materials', auth, checkRole(['faculty']), addMaterial);
// router.get('/:courseId/materials', auth, checkRole(['student', 'faculty']), getMaterials);

export default router;
