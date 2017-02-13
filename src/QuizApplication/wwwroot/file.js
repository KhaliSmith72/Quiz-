var Question = (function () {
    function Question(question, answerIndex) {
        this.questionText = question;
        this.correctAnswerIndex = answerIndex;
    }
    return Question;
}());
function startQuiz() {
    var totalPoints = 0;
    var questionPoint = 20;
    var questions = [
        new Question("What's 1 + 2 = ? \n" +
            "Possible Answers: \n" +
            "(1) = 4 \n" +
            "(2) = 6 \n" +
            "(3) = 7 \n" +
            "(4) = 3 \n" +
            "(5) = 5 \n", 4),
        new Question("What's 12 + 2 = ? \n" +
            "Possible Answers: \n" +
            "(1) = 24 \n" +
            "(2) = 15 \n" +
            "(3) = 7 \n" +
            "(4) = 10 \n" +
            "(5) = 14 \n", 5),
        new Question("What's 10 + 27 = ? \n" +
            "Possible Answers: \n" +
            "(1) = 37 \n" +
            "(2) = 3.14159265 \n" +
            "(3) = 38 \n" +
            "(4) = 42 \n" +
            "(5) = 9 \n", 1),
        new Question("What's 17 - 12 = ? \n" +
            "Possible Answers: \n" +
            "(1) = 3 \n" +
            "(2) = 8 \n" +
            "(3) = 7 \n" +
            "(4) = 5 \n" +
            "(5) = 4 \n", 4),
        new Question("What's 12 + 21 = ? \n" +
            "Possible Answers: \n" +
            "(1) = 32 \n" +
            "(2) = 35 \n" +
            "(3) = 33 \n" +
            "(4) = 31 \n" +
            "(5) = 55 \n", 3)
    ];
    var x = 0;
    for (x = 0; x < questions.length; x++) {
        var givenAnswerIndex = parseInt(prompt(questions[x].questionText));
        var question = questions[x];
        if (question.correctAnswerIndex == givenAnswerIndex) {
            totalPoints += questionPoint;
        }
        else {
            alert("That is the inncorect answer...");
        }
        console.log(totalPoints);
    }
    if (totalPoints >= 80) {
        alert("You Passed!");
    }
    else {
        alert("You Failed");
    }
}
//# sourceMappingURL=file.js.map