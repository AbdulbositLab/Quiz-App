// Array of question objects, each with a question and a list of answer options
// const questions = [
    // {
    //     question: 'JavaScriptda closure nima?',
    //     answer: [
    //         {text: 'Bir funksiya ichidagi boshqa funksiyaning ishlash muhiti.', correct: true},
    //         {text: 'Bir funksiya bo\'yicha ma\'lumotlarni uzatish.', correct: false},
    //         {text: 'Funksiyaning qaytarish qiymatini saqlash.', correct: false},
    //         {text: 'Global o\'zgaruvchilarning ishlash qoidalari.', correct: false}
    //     ]
    // },
//     {
//         question: 'JavaScriptda "hoisting" nima?',
//         answer: [
//             {text: 'O\'zgaruvchi yoki funksiya deklaratsiyalarining kodni bajarilishidan oldin ko\'tarilishi.', correct: true},
//             {text: 'O\'zgaruvchining qiymatini boshida aniqlash.', correct: false},
//             {text: 'Funksiya ichida o\'zgaruvchi yaratish.', correct: false},
//             {text: 'Tuzilma xatoliklari bilan ishlash.', correct: false}
//         ]
//     },
//     {
//         question: 'JavaScriptda "call", "apply" va "bind" orasidagi farq nima?',
//         answer: [
//             {text: '"call" va "apply" metodlari bir xil, faqat parametrlar shakli farq qiladi, "bind" esa yangi funksiya yaratadi.', correct: true},
//             {text: '"call" funksiya ichidagi o\'zgaruvchilarni qo\'llashni bildiradi, "apply" esa massiv bilan ishlaydi.', correct: false},
//             {text: '"call" faqat metodlar bilan ishlaydi, "apply" esa funktsiyalar bilan.', correct: false},
//             {text: '"call" va "bind" faqat obyektlar bilan ishlaydi, "apply" esa massivlar bilan.', correct: false}
//         ]
//     },
//     {
//         question: 'JavaScriptda "async/await" qanday ishlaydi?',
//         answer: [
//             {text: 'Asinxron funksiyalarni sinxron tarzda bajarishga imkon beradi.', correct: true},
//             {text: 'Xatoliklar bilan ishlashni osonlashtiradi.', correct: false},
//             {text: 'Paryalel ishlovchi funksiyalarni yaratadi.', correct: false},
//             {text: 'Funksiya to\'liq bajarilguncha kutishni ta\'minlaydi.', correct: false}
//         ]
//     },
//     {
//         question: 'JavaScriptda "Promise" nima va u qanday ishlaydi?',
//         answer: [
//             {text: 'Asinxron kodning yakuniy natijasini qaytarish uchun ishlatiladigan obyekt.', correct: true},
//             {text: 'Ma\'lum bir shart bajarilguncha kutishni ta\'minlovchi metod.', correct: false},
//             {text: 'Funksiya qaytaradigan xatoliklarni ushlab qolish uchun ishlatiladi.', correct: false},
//             {text: 'Koddagi barcha muammolarni hal qilish uchun ishlatiladi.', correct: false}
//         ]
//     },
//     {
//         question: 'JavaScriptda destructuring assignment nima?',
//         answer: [
//             {text: 'O\'zgaruvchi yoki massivdagi ma\'lumotlarni shaxsiy o\'zgaruvchilarga ajratib olish.', correct: true},
//             {text: 'Kompilyator yordamida kodni qisqartirish.', correct: false},
//             {text: 'Ma\'lumotlarni JSON formatida saqlash.', correct: false},
//             {text: 'Funksiya ichida parametrlarni qaytarish.', correct: false}
//         ]
//     },
//     {
//         question: 'JavaScriptda "event delegation" qanday ishlaydi?',
//         answer: [
//             {text: 'Bir necha elementlarga umumiy hodisalarni qo\'shish, asosiy elementga event listener qo\'shish orqali.', correct: true},
//             {text: 'Har bir element uchun alohida event listener yaratish.', correct: false},
//             {text: 'Hodisalarning faqat DOM orqali bajarilishi.', correct: false},
//             {text: 'Elementning barcha metodlarini qo\'shish.', correct: false}
//         ]
//     },
//     {
//         question: 'JavaScriptda "setTimeout" va "setInterval" farqlari qanday?',
//         answer: [
//             {text: '"setTimeout" bitta marta ishga tushadi, "setInterval" esa doimiy ravishda takrorlanadi.', correct: true},
//             {text: '"setTimeout" faqat sinxron ishlarni bajaradi, "setInterval" esa asinxron.', correct: false},
//             {text: '"setTimeout" asinxron bo\'ladi, "setInterval" esa sinxron.', correct: false},
//             {text: '"setTimeout" va "setInterval"ning hech qanday farqi yo\'q.', correct: false}
//         ]
//     },
//     {
//         question: 'JavaScriptda "debounce" va "throttle" metodlarining farqi nima?',
//         answer: [
//             {text: '"debounce" faqat oxirgi chaqiruvni bajaradi, "throttle" esa maxsus vaqt oralig\'ida bir nechta chaqiruvni bajaradi.', correct: true},
//             {text: '"debounce" ko\'p chaqiruvlarni birlashtiradi, "throttle" esa faqat birinchi chaqiruvni bajaradi.', correct: false},
//             {text: '"debounce" kodni to\'liq bajaradi, "throttle" faqat avvalgi chaqiruvni bajaradi.', correct: false},
//             {text: '"debounce" va "throttle"ning farqi yo\'q.', correct: false}
//         ]
//     },
//     {
//         question: 'JavaScriptda "Map" va "Set" orasidagi farq nima?',
//         answer: [
//             {text: 'Map - kalit-qiymat juftliklarini saqlaydi, Set esa faqat noyob qiymatlar to\'plamini saqlaydi.', correct: true},
//             {text: 'Map faqat string kalitlarini saqlaydi, Set esa barcha turdagi ma\'lumotlarni.', correct: false},
//             {text: 'Map faqat massivlarni saqlaydi, Set esa faqat obyektlarni.', correct: false},
//             {text: 'Map va Set bir xil.', correct: false}
//         ]
//     },
//     {
//         question: 'JavaScriptda "Symbol" nima?',
//         answer: [
//             {text: 'Noyob identifikatorlar yaratish uchun ishlatiladi.', correct: true},
//             {text: 'Chiziqli kodni aniqlash uchun ishlatiladi.', correct: false},
//             {text: 'Funktsiya parametrlarini o\'zgartirish uchun ishlatiladi.', correct: false},
//             {text: 'Xatoliklarni ko\'rsatish uchun ishlatiladi.', correct: false}
//         ]
//     },
//     {
//         question: 'JavaScriptda "Generator" funksiyalari qanday ishlaydi?',
//         answer: [
//             {text: 'Funksiyalarni to\'liq bajarish o\'rniga, kerakli joylarda qiymat qaytarib, keyingi chaqiruvga imkon beradi.', correct: true},
//             {text: 'Bir vaqtning o\'zida bir nechta natijalarni qaytaradi.', correct: false},
//             {text: 'Funksiyalarni parallel ravishda bajaradi.', correct: false},
//             {text: 'Funksiyalarga parametrlar uzatish imkoniyatini beradi.', correct: false}
//         ]
//     },
   
// ];

// // DOM elements for displaying the question, answers, and the next button
// const questionElement = document.getElementById('question');
// const answerButtons = document.getElementById('answer-buttons');
// const nextButton = document.getElementById('next-btn');

// // Track the current question index and score
// let currentQuestionIndex = 0;
// let score = 0;
// let shuffledQuestions = [];

// // Shuffles the questions array to display questions in random order
// function shuffleQuestions() {
//     shuffledQuestions = questions.sort(() => Math.random() - 0.5);
// }

// // Initializes the quiz by resetting question index and score, shuffling questions, and showing the first question
// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     shuffleQuestions(); // Shuffle questions at the beginning of the quiz
//     nextButton.innerHTML = 'Next';
//     nextButton.style.display = 'none';
//     showQuestion(); // Show the first question
// }

// // Displays the current question and its answer options
// function showQuestion() {
//     resetState();
//     nextButton.style.display = 'none';

//     let currentQuestion = shuffledQuestions[currentQuestionIndex];
//     let questionNO = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNO + '. ' + currentQuestion.question;

//     // Create and display buttons for each answer option
//     currentQuestion.answer.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerHTML = answer.text;
//         button.classList.add('btn');
//         button.dataset.correct = answer.correct;
//         button.addEventListener('click', selectAnswer);
//         answerButtons.appendChild(button);
//     });
// }

// // Clears previous answer buttons from the answerButtons container
// function resetState() {
//     while (answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// // Handles the answer selection and applies correct/incorrect styling
// function selectAnswer(e) {
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === 'true';
//     if (isCorrect) {
//         selectedBtn.classList.add('correct');
//         score++;
//     } else {
//         selectedBtn.classList.add('incorrect');
//     }

//     Array.from(answerButtons.children).forEach(button => {
//         if (button.dataset.correct === 'true') {
//             button.classList.add('correct');
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = 'block';
// }

// // Show the score at the end of the quiz
// function showScore() {
//     resetState();
//     questionElement.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}!`;
//     nextButton.innerHTML = 'Play Again';
//     nextButton.style.display = "block";
// }

// // Handles the next button click logic
// function handleNextButton() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < shuffledQuestions.length) {
//         showQuestion();
//     } else {
//         showScore();
//     }
// }

// // Event listener for next button
// nextButton.addEventListener('click', () => {
//     if (currentQuestionIndex < shuffledQuestions.length) {
//         handleNextButton();
//     } else {
//         startQuiz(); // Restart quiz if all questions have been answered
        
//     }
// });

// // Starts the quiz on page load
// startQuiz();


// DOM elements for displaying the question, answers, and the next button
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

// Track the current question index and score
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

// Fetch questions from the API
async function fetchQuestions() {
    try {
        const response = await fetch('https://673f1b38a9bc276ec4b73097.mockapi.io/api/a1/question');
        if (!response.ok) {
            throw new Error('Failed to fetch questions from the API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        questionElement.innerHTML = 'Error loading questions. Please try again later.';
        nextButton.style.display = 'none';
        return [];
    }
}

// Shuffles the questions array to display questions in random order
function shuffleQuestions() {
    shuffledQuestions = shuffledQuestions.sort(() => Math.random() - 0.5);
}

// Initializes the quiz by resetting question index and score, shuffling questions, and showing the first question
async function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionElement.innerHTML = 'Loading questions...';
    nextButton.style.display = 'none';

    const questions = await fetchQuestions();
    if (questions.length === 0) return; // Stop initialization if questions failed to load

    shuffledQuestions = questions;
    shuffleQuestions(); // Shuffle questions at the beginning of the quiz
    nextButton.innerHTML = 'Next';
    showQuestion(); // Show the first question
}

// Displays the current question and its answer options
function showQuestion() {
    resetState();
    nextButton.style.display = 'none';

    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + '. ' + currentQuestion.question;

    // Create and display buttons for each answer option
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

// Clears previous answer buttons from the answerButtons container
function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Handles the answer selection and applies correct/incorrect styling
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

// Show the score at the end of the quiz
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = "block";
}

// Handles the next button click logic
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event listener for next button
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < shuffledQuestions.length) {
        handleNextButton();
    } else {
        startQuiz(); // Restart quiz if all questions have been answered
    }
});

// Starts the quiz on page load
startQuiz();
