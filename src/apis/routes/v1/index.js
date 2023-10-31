const express = require('express');

const router = express.Router();

// const StudentDetails = require('./StudentDetails'); // done

const Createuser = require('./CreateUser'); // done
const GetTutororAssignment = require('./GetTutororAssignment'); // done
const GetOnlineOrHome = require('./GetOnlineOrHome'); // done
const GetSubjectandlocation = require('./GetSubjectandlocation'); // done

const GetmailinTutor = require('./getmailinTutor'); // done
 // done
// const StudentDetailsById = require('./StudentDetailsById') // done

// const UpdateStudentById = require('./UpdateStudentById'); // done

// // const NotificationRoute = require('./Notification');

// const PersonalDetails = require('./PersonalDetails'); // 

// const EducationDetails = require("./EducationDetails")

 const CreateTutor = require('./CreateTutor')

 const login = require('./login')
const logout = require('./logout')
// const updateStatus = require("./updateStatus")

 const gettutordata = require('./gettutordata')


// router.use('/', EducationDetails);

// router.use('/', PersonalDetails); // api for updated persponal details

  

// // Route to get all students
// router.use('/', StudentDetails);

// // Route to create a new student


// // Route to get a single student by ID
// router.use('/', StudentDetailsById);

// // Route to update a student by ID
// router.use('/', UpdateStudentById);

// // Route to delete a delete by ID


// // Route to get student by userId


// // router to update status 
// router.use('/', updateStatus);
router.use('/',Createuser);
 router.use('/', login);
 router.use('/', logout);
 router.use('/', CreateTutor);
  router.use('/', gettutordata)
  router.use('/',GetTutororAssignment)
   router.use('/',GetOnlineOrHome)
      router.use('/',GetSubjectandlocation)

  router.use('/', GetmailinTutor);

module.exports = router;
