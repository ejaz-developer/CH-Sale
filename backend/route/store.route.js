import {Router} from "express";
import {requireAuth} from "@clerk/express";
import {createStore, deleteStore, getStoreById, getStores, updateStore} from "../controller/store.controller.js";

const router = Router()

router.route('/').post(requireAuth(), createStore)
router.route('/getStore').get(requireAuth(), getStores)
router.route('/:storeId').get(requireAuth(),getStoreById).put(requireAuth(), updateStore).delete(requireAuth(), deleteStore)
export default router