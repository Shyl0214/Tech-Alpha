const user_input = document.getElementById("date");
const button = document.getElementById("calculate_btn");
const para = document.getElementById("age");
user_input.max = new Date().toISOString().split("T")[0];
// new Date() return object date
//toISOString convert date object into YYYY-MM-DDTHH-mm
//split makes the date into YYYY-MM-DD and removes the THH-mm part

button.addEventListener("click", () => {
    //User Birthdate 
    let Birth_date = new Date(user_input.value);

    let user_birth_date = Birth_date.getDate();
    let user_birth_month = Birth_date.getMonth() + 1;
    let user_birth_year = Birth_date.getFullYear();

    //Current Year date

    let Current_year = new Date();

    let current_date = Current_year.getDate();
    let current_month = Current_year.getMonth() + 1;
    let current_year = Current_year.getFullYear();

    // Finding user accurate age

    let user_age_date, user_age_month, user_age_year;

    user_age_year = current_year - user_birth_year;

    if (current_month >= user_birth_month) {
        user_age_month = current_month - user_birth_month;
    }
    else {
        user_age_year--;
        user_age_month = 12 + current_month - user_birth_month;
    }

    if (current_date > user_birth_date) {
        user_age_date = current_date - user_birth_date;
    }
    else {
        current_month--;
        user_age_date = getDaysInMonth(user_birth_year, user_birth_month) + current_date - user_birth_date;
    }

    if (current_month < 0) {
        current_month = 11;
        current_year--;
    }
    console.log(`You are ${user_age_year} Years , ${user_age_month} Months , ${user_age_date} Days old`);
    para.innerHTML = `You are <span>${user_age_year}</span> Years , <span>${user_age_month}</span> Months , <span>${user_age_date}</span> Days old...`;
})

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

