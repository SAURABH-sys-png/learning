export function findEligibility(dataObj) {
    const age = dataObj.age;
    const subjects = dataObj.subjects;
    const aimingFor = dataObj.aimingFor;

    // Check if age meets the criteria
    if (age >= 16.5 && age <= 19.5) {
        if (subjects.includes('Math') && subjects.includes('Physics') && subjects.includes('Chemistry')) {
            return `
                <div>
                    <p>You are eligible for:</p>
                    <ol>
                        <li>NDA</li>
                        <li>TES 10+2</li>
                    </ol>
                </div>
            `;
        }
    } 
    
    // Fallback if they don't meet the criteria
    return '<p style="color: red;">Keep prepping! You do not meet the eligibility criteria at this time.</p>';
}