const TutorData = require('@models/tutor');


const getTutorData = async () => {

  try {
    
    const tutor = await TutorData.find({} )

    if (!tutor) {
      return "Tutor not found"
    }

   

  

    return tutor;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTutorData,
};
