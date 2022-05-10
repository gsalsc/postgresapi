const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();
router.route('/').get(userController.getAllUsers);
//.post(tourController.addNewTour);
// router
//   .route('/:id')
//   .get(tourController.getTour)
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);
module.exports = router;
