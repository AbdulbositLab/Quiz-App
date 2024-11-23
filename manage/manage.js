// Assuming you have input elements for question and options
const questionInput = document.getElementById('question-input');
const optionInputs = document.querySelectorAll('.option-input');  // Assuming class for options inputs
const correctAnswer = document.getElementById('correct-answer');

// Function to move focus to the next input field on Enter
function moveToNextInput(e) {
    if (e.key === "Enter" || e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault(); // Prevent form submission or default action
        const inputs = Array.from(optionInputs);  // Convert NodeList to Array
        const index = inputs.indexOf(e.target);   // Find index of current input

        // When ArrowDown or Enter is pressed
        if (e.key === "ArrowDown" || e.key === "Enter") {
            if (e.target === questionInput) {
                // Move focus from question input to first option input
                inputs[0].focus();
            } else if (index >= 0 && index < inputs.length - 1) {
                // Move focus to the next option input
                inputs[index + 1].focus();
            } else {
                // Move focus to correct answer input if it's the last option input
                correctAnswer.focus();
            }
        }

        // When ArrowUp is pressed
        else if (e.key === "ArrowUp") {
            if (e.target === correctAnswer) {
                // Move focus to the last option input if at correct answer input
                inputs[inputs.length - 1].focus();
            } else if (index > 0) {
                // Move focus to the previous input
                inputs[index - 1].focus();
            } else if (index === 0) {
                // Move focus back to question input if at the first option input
                questionInput.focus();
            }
        }
    }
}// Add event listeners to all inputs to trigger move on Enter key press
questionInput.addEventListener('keydown', moveToNextInput);
optionInputs.forEach(input => input.addEventListener('keydown', moveToNextInput));
correctAnswer.addEventListener('keydown', moveToNextInput);




// MockAPI endpoint
const apiUrl = 'https://673f1b38a9bc276ec4b73097.mockapi.io/api/a1/question';

// Add event listeners for Add, Edit, and Delete operations
document.getElementById('add-btn').addEventListener('click', addQuestion);
document.getElementById('edit-btn').addEventListener('click', function () {
    const id = prompt('Enter the ID of the question you want to edit:');
    if (id) {
        editQuestion(id);
    }
});
document.getElementById('delete-btn').addEventListener('click', function () {
    const id = prompt('Enter the ID of the question you want to delete:');
    if (id) {
        deleteQuestion(id);
    }
});

// Add a new question
function addQuestion() {
    const submitButton = document.getElementById('add-btn');  // Get submit button
    submitButton.disabled = true;  // Disable the button

    const questionInput = document.getElementById('question-input').value;
    const options = document.querySelectorAll('.option-input');
    const correctAnswer = document.getElementById('correct-answer').value;

    // Validation: Ensure no fields are empty and correct answer is between 1 and 4
    if (!questionInput || !options[0].value || !options[1].value || !options[2].value || !options[3].value || !correctAnswer) {
        alert('All fields are required!');
        submitButton.disabled = false;  // Enable the button after failed validation
        return;  // Stop the function execution
    }

    if (isNaN(correctAnswer) || correctAnswer < 1 || correctAnswer > 4) {
        alert('Correct answer must be a number between 1 and 4');
        submitButton.disabled = false;  // Enable the button after failed validation
        return;  // Stop the function execution
    }

    const answers = [];
    for (let i = 0; i < 4; i++) {
        answers.push({
            text: options[i].value,
            correct: (i + 1 === parseInt(correctAnswer))
        });
    }

    const newQuestion = {
        question: questionInput,
        answer: answers
    };

    // Sending POST request to save the new question
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuestion)
    })
    .then(response => response.json())
    .then(data => {
        alert('Question added:', data);
        submitButton.disabled = false;  // Enable the button after successful submission
        document.getElementById('question-form').reset();  // Optionally reset the form
    })
    .catch(error => {
        alert.error('Error adding question:', error);
        submitButton.disabled = false;  // Enable the button in case of error
    });
}

// Edit an existing question
function editQuestion(id) {
    const submitButton = document.getElementById('add-btn');  // Get submit button
    submitButton.disabled = true;  // Disable the button

    fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data) {
                document.getElementById('question-input').value = data.question;
                const options = document.querySelectorAll('.option-input');
                options[0].value = data.answer[0].text;
                options[1].value = data.answer[1].text;
                options[2].value = data.answer[2].text;
                options[3].value = data.answer[3].text;
                document.getElementById('correct-answer').value = data.answer.findIndex(a => a.correct) + 1; // Correct option is 1-4
                document.getElementById('add-btn').textContent = 'Update Question';
                document.getElementById('add-btn').onclick = function () {
                    updateQuestion(id);
                };
                submitButton.disabled = false;  // Enable the button after data is loaded
            } else {
                alert('Question with that ID not found');
                submitButton.disabled = false;  // Enable the button if not found
            }
        })
        .catch(error => {
            alert.error('Error fetching question:', error);
            submitButton.disabled = false;  // Enable the button on error
        });
}

// Update the existing question
function updateQuestion(id) {
    const submitButton = document.getElementById('add-btn');  // Get submit button
    submitButton.disabled = true;  // Disable the button

    const questionInput = document.getElementById('question-input').value;
    const options = document.querySelectorAll('.option-input');
    const correctAnswer = document.getElementById('correct-answer').value;

    // Validation: Ensure no fields are empty and correct answer is between 1 and 4
    if (!questionInput || !options[0].value || !options[1].value || !options[2].value || !options[3].value || !correctAnswer) {
        alert('All fields are required!');
        submitButton.disabled = false;  // Enable the button after failed validation
        return;  // Stop the function execution
    }

    if (isNaN(correctAnswer) || correctAnswer < 1 || correctAnswer > 4) {
        alert('Correct answer must be a number between 1 and 4');
        submitButton.disabled = false;  // Enable the button after failed validation
        return;  // Stop the function execution
    }

    const answers = [];
    for (let i = 0; i < 4; i++) {
        answers.push({
            text: options[i].value,
            correct: (i + 1 === parseInt(correctAnswer))
        });
    }

    const updatedQuestion = {
        question: questionInput,
        answer: answers
    };

    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedQuestion)
    })
    .then(response => response.json())
    .then(data => {
        alert('Question updated:', data);
        submitButton.disabled = false;  // Enable the button after successful update
        document.getElementById('question-form').reset();
        document.getElementById('add-btn').textContent = 'Add Question';
        document.getElementById('add-btn').onclick = addQuestion; // Reset button function to add
    })
    .catch(error => {
        console.error('Error updating question:', error);
        submitButton.disabled = false;  // Enable the button on error
    });
}

// Delete a question
function deleteQuestion(id) {
    const submitButton = document.getElementById('add-btn');  // Get submit button
    submitButton.disabled = true;  // Disable the button

    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('Question deleted:', data);
        submitButton.disabled = false;  // Enable the button after successful deletion
    })
    .catch(error => {
        console.error('Error deleting question:', error);
        submitButton.disabled = false;  // Enable the button on error
    });
}

