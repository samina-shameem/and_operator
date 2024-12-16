//dom varibales

const ageInput = document.getElementById('age');
const incomeInput = document.getElementById('income');
const checkEligibilityButton = document.getElementById('checkEligibility');
const result = document.getElementById('result');


//event listner

checkEligibilityButton.addEventListener('click', function () {


    //variables and datatypes(dttps)

    const age = Number(ageInput.value);// converts i/p to a number (d/t : nuber)
    const income = Number(incomeInput.value);

    //using "AND" operator

    if (age >= 18 && icome >= 2000) {

        //both condition must be true
        result.textContent = "Congratulations! You are eligible for the loan.";
        result.style.color = 'green';
    } else {
        //at least one condition is false.
        result.textContent = "Sorry, you are not eligible. Ensure you are at least and earn SEK2000/month";
        result.style.color = "red";
    }
});