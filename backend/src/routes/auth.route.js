import express from "express"
import { signup, login ,logout ,updateProfile, checkAuth} from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router=express.Router()

 router.post("/signup",signup);


// router.post("/signup", async (req, res) => {
//     const { fullName, email, password } = req.body;
  
//     if (!fullName || !email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }
  
//     try {
//       // Simulate saving user to the database
//       console.log("User created:", { fullName, email, password });
//       res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//       console.error("Server error:", error);
//       res.status(500).json({ message: "Server error occurred." });
//     }
//   });
  


router.post("/login",login);

router.post("/logout",logout);

router.put("/update-profile",protectRoute,updateProfile)

router.get("/check",protectRoute, checkAuth)
export default router;