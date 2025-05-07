import express from "express";
import Hotel from "../models/Hotel.js";
import { CountByCity, CountByType, createHotel, deleteHotel, getallHotel, getHotel, getHotelRooms, updateHotel } from "../controllers/hotelControl.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();
//create
router.post("/",verifyAdmin, createHotel);
//update
router.put("/:id",verifyAdmin, updateHotel);
//delete
router.delete("/:id",verifyAdmin, deleteHotel);
//get
router.get("/find/:id", getHotel);
//get all
router.get("/", getallHotel);
router.get("/countByCity", CountByCity);
router.get("/countByType", CountByType);
router.get("/room/:id", getHotelRooms)


export default router;
