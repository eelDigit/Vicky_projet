import React from "react";

const UserQuestions = () => {
  return (
    <main className="container-questions-table">
      <h2>Mes questions</h2>
      <table className="questions-table">
        <thead>
          <tr>
            <th>Questions</th>
            <th>Dates</th>
            <th>Réponses</th>
            <th>Dates</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td> 1</td>
            <td> 2</td>
            <td> 3</td>
            <td> 4</td>
            <td> 5</td>
          </tr>
        </tfoot>
        <tbody>
        <tr>
            <td>Question 1</td>
            <td>Date 1</td> 
            <td>Réponse 1</td>
            <td>Date 1 bis</td> 
          </tr>
          <tr>
            <td>Question 2</td>
            <td>Date 2</td> 
            <td>Réponse 2</td>
            <td>Date 2 bis</td> 
          </tr>
          <tr>
            <td>Question 3</td>
            <td>Date 3</td> 
            <td>Réponse 3</td>
            <td>Date 3 bis</td> 
          </tr>
          <tr>
            <td>Question 4</td>
            <td>Date 4</td> 
            <td>Réponse 4</td>
            <td>Date 4 bis</td> 
          </tr>
          <tr>
            <td>Question 5</td>
            <td>Date 5</td> 
            <td>Réponse 5</td>
            <td>Date 5 bis</td> 
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default UserQuestions;
