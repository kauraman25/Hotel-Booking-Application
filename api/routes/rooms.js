import express from "express"
import { createRoom, deleteRoom, getallRoom, getRoom, updateRoom, updateRoomAvailability } from "../controllers/roomControl.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//create
router.post("/:hotelid",verifyAdmin, createRoom);
//update
router.put("/:id",verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability)
//delete
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);
//get
router.get("/:id", getRoom);
//get all
router.get("/", getallRoom);

export default router