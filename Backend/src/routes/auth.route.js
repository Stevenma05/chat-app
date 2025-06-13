import express from "express"
import { login, logout, signup, updateProfile, CheckAuth } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router()

//post requests
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

//put requests
router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, CheckAuth);

export default router;