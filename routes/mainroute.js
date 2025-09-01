import express from "express";
import {createProfile,getallProfiles,getProfileById,updateProfile,deleteProfile} from "../controller/profileControl.js";
import {getallContacts,getContactById,updateContact,deleteContact} from "../controller/contactControl.js";
import {getallAddresses,getAddressById,updateAddress,deleteAddress,getbystate} from "../controller/addressControl.js";

const router = express.Router();

router.post("/createprofile", createProfile);
router.get("/getallprofile", getallProfiles);
router.get("/getprofile/:id", getProfileById);
router.put("/updateprofile/:id", updateProfile);
router.delete("/deleteprofile/:id", deleteProfile);

router.get("/getallcontact", getallContacts);
router.get("/getcontact/:id", getContactById);
router.put("/updatecontact/:id", updateContact);
router.delete("/deletecontact/:id", deleteContact);

router.get("/getalladdress", getallAddresses);
router.get("/getaddress/:id", getAddressById);
router.put("/updateaddress/:id", updateAddress);
router.delete("/deleteaddress/:id", deleteAddress);
router.get('/getbystate/:state',getbystate)

export default router;
