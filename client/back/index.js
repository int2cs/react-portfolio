const DB_NAME = "int2cs";
const DB_PWD = "SS0eyKFrC1mBvHn20jfaLIUktszKQ0fW";
const mongoose = require("mongoose");
const schema = mongoose.Schema;

// const usersSchema = schema({
//   firstname: { type: String, require: true },
//   lastname: { type: String, require: true },
//   nickname: { type: String, require: false },
//   // birthday: { type: Date, require: true },
//   connected: { type: Boolean, default: false },
// });
const usersSchema = schema({
  nickname: { type: String, require: false },

  info: {
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    birtday: { type: Date, require: false },
  },
  contact: {
    tel: { type: Number, require: false },
    mail: { type: String, require: true },
  },
  connected: { type: Boolean, default: false },
});

const Users = mongoose.model("users", usersSchema);

mongoose
  .connect(
    `mongodb+srv://${DB_NAME}:${DB_PWD}@cluster0.7bva5.mongodb.net/data`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connexion établie");

    //On récup tout les documents demandés
    Users.find({}, (err, document) => console.log(document));

    //On crée un nouvel utilisateur
    // const newUser = new Users();
    // newUser.lastname = "Doe";
    // newUser.firstname = "Janne";
    // newUser.nickname = "CadaverikBoy";

    // newUser.save((err, document) =>
    //   console.log("Un nouvel utilisateur à été enregistré : " + document)
    // );
  })
  .catch((err) => console.log("Erreur de connexion: " + err));
