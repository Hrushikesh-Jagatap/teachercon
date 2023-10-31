const Gettutordata = require('@services/v1/gettutordata');

const { HttpResponseHandler } = require('intelli-utility');


const tutor = async (req, res) => {
  try {
    const data = await Gettutordata.getTutorData();

    if (!data) {
      return HttpResponseHandler.success(req, res, data);
    }
    return HttpResponseHandler.success(req, res, data);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  tutor
}  