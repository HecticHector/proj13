const Note = require("./../models/noteModel");
const moment = require("moment");
let ts = Date.now();

exports.getAllNotes = async (req, res) => {
  try {
    const query = Note.find({});
    const note = await query;

    console.log(note);

    res.status(200).json({
      status: "success",
      requestedAt: `${moment(req.requestTime).format("YYMMDD-HHmmss")}`,
      results: note.length,
      message: note
    });
  } catch (err) {
    console.log(err);

    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
