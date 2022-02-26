const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/", userController.singel_user_add);

// all data get
router.get("/", userController.all_user_details);

// single data get
router.get("/:userId", userController.singel_user_details);

// update data
router.put("/:userId", userController.single_user_update);

// delete data
router.delete("/:userId", userController.single_user_delete);

module.exports = router;
