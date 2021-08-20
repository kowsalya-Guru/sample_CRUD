const express = require("express");
const router = express.Router();

const vendorController = require("../controller/vendor");

router.post("/", vendorController.addVendor);
router.get("/", vendorController.readVendor);
router.put("/:id", vendorController.updateVendorById);
router.delete("/:id", vendorController.deleteVendorById);

module.exports = router;