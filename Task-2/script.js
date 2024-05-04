const password_box = document.getElementById("Password");
const copy = document.getElementById("copy");
const button = document.getElementById("generate_btn");

const password_length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special_characters = "!@#$%^&*()_-+=.";
const all_characters = upperCase + lowerCase + numbers + special_characters;

button.addEventListener("click",()=>{
    let random_password = "";
    random_password += upperCase[Math.floor(Math.random() * upperCase.length)];
    random_password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    random_password += numbers[Math.floor(Math.random() * numbers.length)];
    random_password += special_characters[Math.floor(Math.random() * special_characters.length)];

    while(password_length > random_password.length){
        random_password += all_characters[Math.floor(Math.random() * all_characters.length)];
    }

   console.log(random_password);
   password_box.value = random_password;
})

copy.addEventListener("click",()=>{
    password_box.select();
    document.execCommand("copy");
})