import { Router } from "express";
import { getAllUsers, changeUserRole } from "../controllers/adminController.js";
// import auth and role middleware when implemented

const router = Router();

// router.get('/users', auth, checkRole(['admin']), getAllUsers);
// router.put('/users/:id/role', auth, checkRole(['admin']), changeUserRole);

export default router;
