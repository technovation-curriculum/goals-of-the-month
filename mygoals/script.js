// Find elements from the HTML page
const addGoalBtn = document.getElementById('addGoalBtn');
const goalInput = document.getElementById('goalInput');
const goalList = document.getElementById('goalList');

// When the button is clicked
addGoalBtn.addEventListener('click', function() {
    const goalText = goalInput.value.trim(); // Remove extra spaces

    if (goalText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = goalText;

        // Add a click event to cross off goals
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Add the new goal to the list
        goalList.appendChild(li);

        // Clear the input field
        goalInput.value = '';
    } else {
        alert('Please write a goal!');
    }
});
