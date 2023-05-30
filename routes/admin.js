const router = require("express").Router();
const adminController = require("../controllers/adminController");

// get
router.get("/dashboard", adminController.viewDashboard);
router.get("/category", adminController.viewCategory);
router.get("/bank", adminController.viewBank);
router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);

//post
router.post("/category", adminController.addCategory);

//edit
router.put("/category", adminController.editCategory);

//delete
router.delete("/category/:id", adminController.deleteCategory);

module.exports = router;
