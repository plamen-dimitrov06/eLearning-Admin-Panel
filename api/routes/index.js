var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'CAT',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlFaculty = require("../controllers/faculty");
var ctrlCourses = require('../controllers/course');

// structure routes
router.get('/structure', ctrlFaculty.getFaculties);

// faculty routes
router.get('/faculties', ctrlFaculty.getFaculties);
router.post('/faculties/faculty-add', ctrlFaculty.createFaculty);
router.get('/faculties/faculty-edit:id', ctrlFaculty.getFacultyById);
router.put('/faculties/faculty-edit:id', ctrlFaculty.updateFaculty);
router.get('/faculties/faculty-delete:id', ctrlFaculty.getFacultyById);
router.delete('/faculties/faculty-delete:id', ctrlFaculty.deleteFaculty);

// courses routes
router.get('/courses', ctrlCourses.getCourses);
router.post('/courses/course-add', ctrlCourses.createCourse);




router.get('/profile', auth, ctrlProfile.profileRead);


// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
