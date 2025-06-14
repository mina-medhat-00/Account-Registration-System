import express from "express";
import ensureAuth from "../config/ensureAuth.js";

const router = express.Router();

router.get("/", (_, res) => res.render("welcome"));

router.get("/dashboard", ensureAuth, (req, res) =>
  res.render("dashboard", { name: req.user.name })
);

export default router;
