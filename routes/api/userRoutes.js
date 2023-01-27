// const router = require('express').Router();
// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

// router.use((req, res) => res.send('Wrong route!'));

// module.exports = router;

const router = require('express').Router();
const {
  getuser,
  getSingleuser,
  createuser,
  deleteuser,
  addthoughts,
  removethoughts,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getuser).post(createuser);

// /api/user/:userId
router.route('/:userId').get(getSingleuser).delete(deleteuser);

// /api/user/:userId/thoughts
router.route('/:userId/thoughts').post(addthoughts);

// /api/user/:userId/thoughts/:thoughtsId
router.route('/:userId/thoughts/:thoughtsId').delete(removethoughts);

module.exports = router;