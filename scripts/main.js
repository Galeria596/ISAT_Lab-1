// Add JS here

const quizForm = document.getElementById("quiz-form");

// <!-- JavaScript for handling submission -->
quizForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting to a server

    // Array of correct answers (A, B, B, C, A correspond to questions 1-5)
    const correctAnswers = ["", "A", "A", "B", "B", "A", "C", "B", "B", "A", "A"];
    const totalQuestions = 10;
    const answers = Array.from(new FormData(quizForm).entries());
    let correctCount = 0;

    if (answers.length == correctAnswers.length - 1) {
      answers.forEach(answer => {
        const answerNumber = parseInt(answer[0]);

        // Check each question's selected answer
        if (answer[1] == correctAnswers[answerNumber]) {
          correctCount++;
        } else {
          // Show results
          document.getElementById("themes-repeat").style.display = "block";
          document.getElementsByClassName(answer[0])[0].style.display = "block";
        }

        let correctPercentage = (correctCount / totalQuestions) * 100;

        // Update the results display
        document.getElementById("count").textContent = correctCount;
        document.getElementById("percentage").textContent = correctPercentage;

        // Hide quiz
        document.getElementById("quiz").style.display = "none";
        document.getElementById("results").style.display = "block";

      });
    }
    else {
      alert("Необходимо ответить на все вопросы!");
    }
  });