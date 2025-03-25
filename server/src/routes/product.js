import express from "express";
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import tryCatch from "../utils/tryCatch.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/", tryCatch(getAllProducts));
router.get("/:id", tryCatch(getProductById));
router.post("/", upload.single("image"), addProduct);
router.put("/:id", tryCatch(updateProduct));
router.delete("/:id", tryCatch(deleteProduct));

export default router;
