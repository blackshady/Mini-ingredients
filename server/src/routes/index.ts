import { Router } from "express";

const router = Router();

const catchAllRoutes = (req?: any, res?: any) => res.status(404).json({
    message: "Not Found. Use /api/v1 to access the api"
});

// router.use("/api/v1", initEntry);
router.use("/**", catchAllRoutes);

export default router;
