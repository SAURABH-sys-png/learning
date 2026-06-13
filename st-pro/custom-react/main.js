import { findEligibility } from "./src/logic/find_eligibility.js";

let myObj = new Object(); 

const findE = document.getElementById('submit-btn');

findE.addEventListener('click', (e) => {
    e.preventDefault();

    const getAge = document.getElementById('age');
    const getStream = document.getElementById('stream');
    const getEntryType = document.querySelector('input[name="entry_type"]:checked');

    if (!getAge.value || !getStream.value || !getEntryType) {
        alert("Please fill in all the fields to check your eligibility.");
        return;
    }

    myObj.age = parseFloat(getAge.value);
    myObj.aimingFor = getEntryType.value;

    if (getStream.value === 'pcm') {
        myObj.subjects = ['Math', 'Physics', 'Chemistry'];
    } else {
        myObj.subjects = ['Others'];
    }

    const resultHTML = findEligibility(myObj);
    
    let resultContainer = document.getElementById('eligibility-result');
    
    if (!resultContainer) {
        resultContainer = document.createElement('div');
        resultContainer.id = 'eligibility-result';
        resultContainer.className = 'mt-6 p-4 rounded-lg bg-zinc-950 border border-zinc-800 transition-all';
        findE.closest('form').appendChild(resultContainer);
    }

    resultContainer.innerHTML = resultHTML;
});