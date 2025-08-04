import { Router } from "express";
import {
  register,
  login,
  generateApiKey,
  getMe,
} from "../controllers/authController.js";
// import auth middleware when implemented

const router = Router();

router.post("/register", register);
router.post("/login", login);
// router.post('/api-key', auth, generateApiKey); // Add auth middleware
// router.get('/me', auth, getMe); // Add auth middleware

export default router;
