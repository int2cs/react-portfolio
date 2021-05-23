const mongoose = require("mongoose");

exports.clientPromise = mongoose
  .connect(
    "mongodb+srv://Int2cs:SS0eyKFrC1mBvHn20jfaLIUktszKQ0fW@cluster0.twrwa.mongodb.net/social_project?retryWrites=true&w=majority",
    { NewUrlParser: true }
  )
  .then(() => console.log("Connexion à mongodb|Atlas ok !"))
  .catch((err) => console.log(err));
