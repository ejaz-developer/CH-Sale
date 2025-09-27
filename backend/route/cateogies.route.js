import {Router} from "express";
import {createCategory, deleteCategory, updateCategory} from "../controller/categories.controller.js";
import {requireAuth} from "@clerk/express";

const router  = Router();
router.route("/").post(requireAuth(), createCategory);
router.route('/get-all/:storeId').get(requireAuth(), getAllCategories );
router.route('/:categoryId').put(requireAuth(), updateCategory).delete(requireAuth(), deleteCategory);
export default router;