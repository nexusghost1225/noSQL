const router = require('express').Router();


// /api/students
router.route('/').get(getThoughts).post(createThoughts);

// /api/students/:studentId
router.route('/:ThoughtsId').get(getSingleThoughts).delete(deleteThoughts);

module.exports = router;