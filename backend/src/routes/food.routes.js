const express = require("express");
const foodController = require("../controllers/food.controller");
const authMiddleWare = require("../middlewares/auth.middleware");
const router = express.Router();
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/",
  authMiddleWare.authFoodPartnerMiddleware,
  upload.single("mama"),
  foodController.createFood,
);

router.get(
  "/",
  authMiddleWare.authFoodPartnerMiddleware,
  foodController.getFoodItems,
);

module.exports = router;
