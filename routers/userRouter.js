const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signin', userController.signin);
router.route('/').get(userController.getAllUsers);
router.route('/:id').get(userController.getUser);

//.post(tourController.addNewTour);
// router
//   .route('/:id')
//   .get(tourController.getTour)
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);
module.exports = router;
