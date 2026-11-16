/*================================================
  SKILLS CHECK 012
  Image with caption, figure and figcaption
================================================*/

/*=============== CONFIGURATION ===============*/
const CONFIG = {
    testId: "012",
    storageKey: "freetimezp:roadmap:skill-check-results:v1",
    historyLimit: 20,
};

/*=============== DOM ELEMENTS ===============*/
const $ = (selector) => document.querySelector(selector);

const elements = {
    // Quiz screens
    quizIntro: $("#quiz-intro"),
    quizApp: $("#quiz-app"),
    resultsPanel: $("#results-panel"),

    // Quiz controls
    startButton: $("#start-quiz"),
    nextButton: $("#next-question"),
    restartButton: $("#restart-quiz"),
    reviewButton: $("#review-answers"),

    // Progress
    progressText: $("#progress-text"),
    progressFill: $("#progress-fill"),
    liveScore: $("#live-score"),

    // Question
    questionCategory: $("#question-category"),
    questionType: $("#question-type"),
    questionTitle: $("#question-title"),
    questionDescription: $("#question-description"),
    questionCode: $("#question-code"),
    questionCodeContent: $("#question-code-content"),
    answerList: $("#answer-list"),

    // Feedback
    feedbackPanel: $("#feedback-panel"),
    feedbackIcon: $("#feedback-icon"),
    feedbackTitle: $("#feedback-title"),
    feedbackSubtitle: $("#feedback-subtitle"),
    feedbackExplanation: $("#feedback-explanation"),
    feedbackTip: $("#feedback-tip"),

    // Results
    resultScore: $("#result-score"),
    resultPercentage: $("#result-percentage"),
    resultCorrect: $("#result-correct"),
    resultIncorrect: $("#result-incorrect"),
    resultTime: $("#result-time"),
    bestScore: $("#best-score"),
    resultsTitle: $("#results-title"),
    resultsMessage: $("#results-message"),
    completionPercent: $("#completion-percent"),

    // Review
    reviewList: $("#review-list"),
    reviewItems: $("#review-items"),

    // Navigation
    menuToggle: $("#menu-toggle"),
    mobileNav: $("#mobile-nav"),

    // Footer
    currentYear: $("#current-year"),
};

/*=============== QUIZ DATA ===============*/
const quizData = window.SKILLSCHECK_012;

if (!quizData || !Array.isArray(quizData.questions)) {
    throw new Error("Skills Check 012 question data could not be loaded.");
}

/*=============== QUIZ STATE ===============*/
let questions = [];
let currentQuestionIndex = 0;
let selectedAnswers = [];
let userAnswers = [];

let score = 0;
let correctCount = 0;
let incorrectCount = 0;

let quizStarted = false;
let answerChecked = false;

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

/*=============== HELPERS ===============*/

// Shuffle an array without changing the original.
function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[i],
        ];
    }

    return shuffled;
}

// Format seconds as MM:SS.
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds,
    ).padStart(2, "0")}`;
}

// Safely update text content.
function setText(element, value) {
    if (element) {
        element.textContent = value ?? "";
    }
}

// Show or hide an element.
function toggleHidden(element, shouldHide) {
    if (element) {
        element.classList.toggle("hidden", shouldHide);
    }
}

// Read the shared roadmap storage.
function getStoredResults() {
    try {
        const stored = JSON.parse(localStorage.getItem(CONFIG.storageKey));

        if (
            stored &&
            stored.schemaVersion === 1 &&
            stored.tests &&
            typeof stored.tests === "object"
        ) {
            return stored;
        }
    } catch (error) {
        console.warn("Could not read quiz results:", error);
    }

    return {
        schemaVersion: 1,
        updatedAt: null,
        tests: {},
    };
}

/*=============== ROADMAP STORAGE ===============*/

function getPreviousBest() {
    const storage = getStoredResults();
    const test = storage.tests[CONFIG.testId];

    return test?.best?.percentage ?? 0;
}

function saveQuizResult() {
    const storage = getStoredResults();

    const previousTest = storage.tests[CONFIG.testId] || {
        testId: CONFIG.testId,
        title: quizData.title,
        attempts: 0,
        latest: null,
        best: null,
        history: [],
    };

    const percentage = Math.round((score / questions.length) * 100);

    const attempt = {
        score,
        total: questions.length,
        percentage,
        completedAt: new Date().toISOString(),
        duration: elapsedTime,
    };

    const previousBest = previousTest.best?.percentage ?? 0;

    const best =
        !previousTest.best || percentage > previousBest
            ? attempt
            : previousTest.best;

    storage.tests[CONFIG.testId] = {
        testId: CONFIG.testId,
        title: quizData.title,
        attempts: (previousTest.attempts || 0) + 1,
        latest: attempt,
        best,
        history: [attempt, ...(previousTest.history || [])].slice(
            0,
            CONFIG.historyLimit,
        ),
    };

    storage.updatedAt = new Date().toISOString();

    try {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(storage));
    } catch (error) {
        console.warn("Could not save quiz results:", error);
    }
}

/*=============== TIMER ===============*/

function startTimer() {
    startTime = Date.now();
    elapsedTime = 0;

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (!quizStarted) return;

        elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);

    if (startTime) {
        elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    }
}

/*=============== START QUIZ ===============*/

function startQuiz() {
    questions = shuffleArray(quizData.questions).map((question) => ({
        ...question,
        options: shuffleArray(question.options),
    }));

    currentQuestionIndex = 0;
    selectedAnswers = [];
    userAnswers = [];

    score = 0;
    correctCount = 0;
    incorrectCount = 0;

    quizStarted = true;
    answerChecked = false;

    toggleHidden(elements.quizIntro, true);
    toggleHidden(elements.quizApp, false);
    toggleHidden(elements.resultsPanel, true);
    toggleHidden(elements.reviewList, true);

    setText(elements.liveScore, "0");

    startTimer();
    renderQuestion();
}

/*=============== RENDER QUESTION ===============*/

function renderQuestion() {
    const question = questions[currentQuestionIndex];

    if (!question) return;

    selectedAnswers = [];
    answerChecked = false;

    // Progress
    const questionNumber = currentQuestionIndex + 1;
    const progress = (questionNumber / questions.length) * 100;

    setText(
        elements.progressText,
        `${String(questionNumber).padStart(2, "0")} / ${String(
            questions.length,
        ).padStart(2, "0")}`,
    );

    if (elements.progressFill) {
        elements.progressFill.style.width = `${progress}%`;
    }

    setText(elements.liveScore, score);

    // Question information
    setText(elements.questionCategory, question.category);
    setText(
        elements.questionType,
        question.type === "multiple" ? "Multiple answers" : "Single answer",
    );

    setText(elements.questionTitle, question.title);
    setText(elements.questionDescription, question.description);

    // Optional code example
    if (question.code) {
        toggleHidden(elements.questionCode, false);
        setText(elements.questionCodeContent, question.code);
    } else {
        toggleHidden(elements.questionCode, true);
        setText(elements.questionCodeContent, "");
    }

    // Reset feedback
    toggleHidden(elements.feedbackPanel, true);

    // Reset next button
    if (elements.nextButton) {
        elements.nextButton.disabled = true;
        elements.nextButton.textContent = "Check answer";
    }

    renderOptions(question);
}

/*=============== RENDER ANSWER OPTIONS ===============*/

function renderOptions(question) {
    if (!elements.answerList) return;

    elements.answerList.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-option";
        button.dataset.answerId = option.id;
        button.setAttribute("aria-pressed", "false");

        const marker = document.createElement("span");
        marker.className = "answer-marker";
        marker.textContent = String.fromCharCode(65 + index);

        const text = document.createElement("span");
        text.className = "answer-text";
        text.textContent = option.text;

        button.append(marker, text);

        button.addEventListener("click", () => {
            selectAnswer(option.id, button);
        });

        elements.answerList.appendChild(button);
    });
}

/*=============== SELECT ANSWER ===============*/

function selectAnswer(answerId, button) {
    if (answerChecked) return;

    const question = questions[currentQuestionIndex];
    const isMultiple = question.type === "multiple";

    if (isMultiple) {
        if (selectedAnswers.includes(answerId)) {
            selectedAnswers = selectedAnswers.filter((id) => id !== answerId);

            button.classList.remove("selected");
            button.setAttribute("aria-pressed", "false");
        } else {
            selectedAnswers.push(answerId);

            button.classList.add("selected");
            button.setAttribute("aria-pressed", "true");
        }
    } else {
        selectedAnswers = [answerId];

        elements.answerList
            .querySelectorAll(".answer-option")
            .forEach((option) => {
                option.classList.remove("selected");
                option.setAttribute("aria-pressed", "false");
            });

        button.classList.add("selected");
        button.setAttribute("aria-pressed", "true");
    }

    if (elements.nextButton) {
        elements.nextButton.disabled = selectedAnswers.length === 0;
    }
}

/*=============== CHECK ANSWER ===============*/

function checkAnswer() {
    if (answerChecked || selectedAnswers.length === 0) return;

    const question = questions[currentQuestionIndex];

    const correctAnswers = [...question.correctAnswers].sort();
    const chosenAnswers = [...selectedAnswers].sort();

    // Exact-set matching: all correct answers and no incorrect ones.
    const isCorrect =
        correctAnswers.length === chosenAnswers.length &&
        correctAnswers.every(
            (answer, index) => answer === chosenAnswers[index],
        );

    answerChecked = true;

    if (isCorrect) {
        score++;
        correctCount++;
    } else {
        incorrectCount++;
    }

    userAnswers.push({
        questionId: question.id,
        selectedAnswers: [...selectedAnswers],
        correctAnswers: [...question.correctAnswers],
        isCorrect,
    });

    updateAsideProgress();

    setText(elements.liveScore, score);

    showAnswerFeedback(question, isCorrect);
    revealCorrectAnswers(question);

    if (elements.nextButton) {
        elements.nextButton.disabled = false;

        elements.nextButton.textContent =
            currentQuestionIndex === questions.length - 1
                ? "View results"
                : "Next question";
    }
}

/*=============== FEEDBACK ===============*/

function showAnswerFeedback(question, isCorrect) {
    toggleHidden(elements.feedbackPanel, false);

    if (elements.feedbackPanel) {
        elements.feedbackPanel.classList.toggle(
            "incorrect-feedback",
            !isCorrect,
        );
    }

    setText(elements.feedbackIcon, isCorrect ? "✓" : "!");

    setText(
        elements.feedbackTitle,
        isCorrect ? "Excellent work!" : "Not quite right",
    );

    setText(
        elements.feedbackSubtitle,
        isCorrect
            ? "You selected the correct answer."
            : "Let's understand the correct approach.",
    );

    setText(elements.feedbackExplanation, question.explanation);

    setText(elements.feedbackTip, question.tip);
}

/*=============== REVEAL CORRECT ANSWERS ===============*/

function revealCorrectAnswers(question) {
    if (!elements.answerList) return;

    elements.answerList.querySelectorAll(".answer-option").forEach((option) => {
        const answerId = option.dataset.answerId;

        const isCorrect = question.correctAnswers.includes(answerId);
        const wasSelected = selectedAnswers.includes(answerId);

        option.disabled = true;

        if (isCorrect) {
            option.classList.add("correct-answer");
        } else if (wasSelected) {
            option.classList.add("wrong-answer");
        }
    });
}

/*=============== NEXT QUESTION ===============*/

function nextQuestion() {
    if (!answerChecked) {
        checkAnswer();
        return;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

/*=============== FINISH QUIZ ===============*/

function finishQuiz() {
    quizStarted = false;
    stopTimer();

    saveQuizResult();
    showResults();
}

/*=============== SHOW RESULTS ===============*/

function showResults() {
    const percentage = Math.round((score / questions.length) * 100);

    const previousBest = getPreviousBest();

    setText(elements.resultScore, `${score}/${questions.length}`);
    setText(elements.resultPercentage, `${percentage}%`);
    setText(elements.resultCorrect, correctCount);
    setText(elements.resultIncorrect, incorrectCount);
    setText(elements.resultTime, formatTime(elapsedTime));
    setText(elements.bestScore, `${previousBest}%`);
    setText(elements.completionPercent, `${percentage}%`);

    let title = "Keep exploring!";
    let message = "Every attempt is another step toward understanding HTML.";

    if (percentage === 100) {
        title = "Perfect result!";
        message =
            "You understand how figure, figcaption and image descriptions work.";
    } else if (percentage >= 80) {
        title = "Excellent work!";
        message = "You have a strong understanding of semantic image markup.";
    } else if (percentage >= 60) {
        title = "Good progress!";
        message =
            "You are getting there. Review the explanations to strengthen your knowledge.";
    }

    setText(elements.resultsTitle, title);
    setText(elements.resultsMessage, message);

    toggleHidden(elements.quizApp, true);
    toggleHidden(elements.resultsPanel, false);
    toggleHidden(elements.reviewList, true);
}

/*=============== REVIEW ANSWERS ===============*/

function reviewAnswers() {
    if (!elements.reviewItems) return;

    elements.reviewItems.innerHTML = "";

    questions.forEach((question, index) => {
        const answer = userAnswers.find(
            (item) => item.questionId === question.id,
        );

        if (!answer) return;

        const item = document.createElement("article");
        item.className = "review-item";

        item.classList.add(
            answer.isCorrect ? "correct-review" : "incorrect-review",
        );

        const heading = document.createElement("h3");
        heading.textContent = `${String(index + 1).padStart(2, "0")} / ${
            question.title
        }`;

        const status = document.createElement("span");
        status.className = "review-status";
        status.textContent = answer.isCorrect ? "✓ Correct" : "✕ Incorrect";

        const selected = document.createElement("p");
        selected.textContent = `Your answer: ${getAnswerTexts(
            question,
            answer.selectedAnswers,
        )}`;

        const correct = document.createElement("p");
        correct.textContent = `Correct answer: ${getAnswerTexts(
            question,
            answer.correctAnswers,
        )}`;

        const explanation = document.createElement("p");
        explanation.textContent = question.explanation;

        const tip = document.createElement("p");
        tip.textContent = `Learning note: ${question.tip}`;

        item.append(heading, status, selected, correct, explanation, tip);

        elements.reviewItems.appendChild(item);
    });

    // Keep the parent results panel visible!
    toggleHidden(elements.resultsPanel, false);
    toggleHidden(elements.reviewList, false);

    elements.reviewList.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function getAnswerTexts(question, answerIds) {
    return answerIds
        .map((id) => {
            const option = question.options.find((item) => item.id === id);

            return option?.text || "Unknown answer";
        })
        .join(" · ");
}

/*=============== RESTART QUIZ ===============*/

function restartQuiz() {
    stopTimer();

    // Reset quiz state
    questions = [];
    currentQuestionIndex = 0;
    selectedAnswers = [];
    userAnswers = [];

    score = 0;
    correctCount = 0;
    incorrectCount = 0;

    quizStarted = false;
    answerChecked = false;

    updateAsideProgress();

    // Return to intro screen
    toggleHidden(elements.resultsPanel, true);
    toggleHidden(elements.reviewList, true);
    toggleHidden(elements.quizApp, true);
    toggleHidden(elements.quizIntro, false);

    setText(elements.liveScore, "0");

    // Return to top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link, i) => {
    link.addEventListener("click", () => {
        navLinks.forEach((link) => link.classList.remove("active"));

        link.classList.add("active");
    });
});

function updateAsideProgress() {
    const total = questions.length;
    const completed = userAnswers.length;

    const percentage = total ? Math.round((completed / total) * 100) : 0;

    setText(elements.completionPercent, `${percentage}%`);
}

/*=============== MOBILE NAVIGATION ===============*/

function toggleMobileMenu() {
    if (!elements.mobileNav || !elements.menuToggle) return;

    const isOpen = elements.mobileNav.classList.toggle("open");

    elements.menuToggle.classList.toggle("active", isOpen);
    elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileMenu() {
    if (!elements.mobileNav || !elements.menuToggle) return;

    elements.mobileNav.classList.remove("open");
    elements.menuToggle.classList.remove("active");
    elements.menuToggle.setAttribute("aria-expanded", "false");
}

/*=============== EVENT LISTENERS ===============*/

elements.startButton?.addEventListener("click", startQuiz);

elements.nextButton?.addEventListener("click", nextQuestion);

elements.restartButton?.addEventListener("click", restartQuiz);

elements.reviewButton?.addEventListener("click", reviewAnswers);

elements.menuToggle?.addEventListener("click", toggleMobileMenu);

elements.mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

/*=============== INITIALIZATION ===============*/

function initializeApp() {
    setText(elements.currentYear, new Date().getFullYear());

    toggleHidden(elements.quizIntro, false);
    toggleHidden(elements.quizApp, true);
    toggleHidden(elements.resultsPanel, true);
    toggleHidden(elements.reviewList, true);

    setText(elements.bestScore, `${getPreviousBest()}%`);
}

initializeApp();
