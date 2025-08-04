import { Router } from "express";
import {
  createAnnouncement,
  getAnnouncements,
} from "../controllers/announcementController.js";
// import auth and role middleware when implemented

const router = Router();

// router.post('/', auth, checkRole(['faculty', 'admin']), createAnnouncement);
router.get("/", getAnnouncements);

export default router;
