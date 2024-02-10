import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const Register = async (req, res) => {
  try {
    // Permet de vérifier qu'il y a au moins : une majuscule, une minuscule, un chiffre et un caractère spécial
    const checkPwd =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,50}$/;

    const { name, firstName, email, password } = req.body;

    if (
      name.trim() === "" ||
      firstName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      return res
        .status(400)
        .json({ message: "Veuillez remplir tous les champs" });
    }

    // Permet de savoir si l'utilisateur est déjà inscrit
    const verifEmail = await User.findOne({ email: req.body.email });

    if (verifEmail) {
      return res
        .status(401)
        .json({ message: "Cet email est déjà enregistré dans notre base" });
    }

    // Vérification du mot de passe respectant la regex
    if (!checkPwd.test(req.body.password)) {
      return res
        .status(401)
        .json({ message: "Le mot de passe ne respecte pas les conditions" });
    }

    const user = new User({
      name,
      firstName,
      email,
      password,
    });

    await user.save();
    // pour exercuter le hachage du mdp avant de sauvegarder en BDD afin que le hook pre puisse s'exécuter

    res.status(200).json({ message: "Votre compte a bien été crée" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "La création de compte a échoué" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Aucun utilisateur trouvé avec cette adresse mail" });
    }

    // comparaison du mot de passe inséré dans la req.body.password avec celui stocké en BDD
    const isValidPwd = bcrypt.compareSync(password, user.password);

    if (!isValidPwd) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    // création du token, si le MDP est correct
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_TOKEN }
    );

    res.status(200).json({
      id: user._id,
      name: user.name,
      firstName: user.firstName,
      role: user.role,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la connexion" });
  }
};
