import Question from "../models/questionModel.js";


// Pour AJOUTER 1 question
// export const addQuestion = async (req, res) => {
//   try {
//     const { userId, answer, message, status } = req.body;

//     // trim impossible sur answer car c'est un tableau
//     if (userId.trim() === "" || message.trim() === "") {
//       return res
//         .status(401)
//         .json({ message: "Veuillez remplir tous les champs" });
//     }

    export const addQuestion = async (req, res) => {
      try {
        const {  answer, message, status } = req.body;
    
        // trim impossible sur answer car c'est un tableau
        if ( message.trim() === "") {
          return res
            .status(401)
            .json({ message: "Veuillez remplir tous les champs" });
        }


    // Revoir l'authentification
    const newQuestion = new Question({
      message,
      category,
      // answer,
      // status,
      // userId,
    });
    await newQuestion.save();
    res.status(200).json({ message: "Votre question a bien été envoyée" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Impossible d'ajouter une question" });
  }
};

// Pour MODIFIER 1 question
export const editQuestion = async (req, res) => {
  try {
    // 1ère méthode pour trouver l'id de la question
    const question = await Question.findById(req.params.id);

    if (question.userId != req.params.userId) {
      throw new Error("Vous ne pouvez mettre à jour uniquement vos propres questions");
    }

    const { message } = req.body;

    if (message.trim() === "") {
      return      res.status(401).json({
        message: "Veuillez remplir tous les champs",
      });
    }
      const updateNew = {
        message,
        userId: req.params.userId,
      };

      // 2ème méthode pour récupérer l'id de la question et la modifier
      const updatedQuestion = await Question.findByIdAndUpdate(
        req.params.id,
        updateNew,
        { new: true }
      );

      if (!updatedQuestion) {
        throw new Error("Vous ne pouvez pas mettre à jour que vos questions uniquement");
      }

      res.status(200).json(updatedQuestion);
    
   } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Impossible de mettre à jour la question",
      error: error.message,
    });
  }
};

// Pour SUPPRIMER 1 seule question
export const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });

    res.status(200).json({ message: "La question a bien été supprimée" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Impossible de supprimer la question",
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                                  RECUPERATION                                 */
/* -------------------------------------------------------------------------- */

// Pour récupérer toutes les questions
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate("userId", "-password");

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Impossible de récupérer les questions" });
  }
};

// Pour RECUPERER 1 seule question
export const getOneQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const question = await Question.findOne({ _id: id }).populate(
      "userId",
      "-password"
    );

    if (!question) {
      return res.status(404).json({ message: "Question non trouvée" });
    }

    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: "Impossible de récupérer la question" });
  }
};

//Pour récupérer les questions liés à l'utilisateur
export const getQuestionsByUser = async (req, res) => {

  try {
    const { userId } = req.params;

    const questionsByUser = await Question.find({
      userId: userId,
    }).populate("userId", "-password");

    res.status(200).json(questionsByUser);
  } catch (error) {
    res.status(500).json({ message: "Impossible de récupérer les questions" });
  }
};


// Récupérer toutes les réponses
export const getAnswersByQuestion = async (req, res) => {

  try {
    const{questionId}=req.params
    const question = await Question.findOne({_id:questionId}).populate("userId", "-password");

if(!question){
  return res.status (400).json({
    message:"Question introuvable"
  })
}

    res.status(200).json(question.answer);
  } catch (error) {
    res.status(500).json({ message: "Impossible de récupérer les réponses" });
  }
};
