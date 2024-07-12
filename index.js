//string slicing: creating a substring from a given string

const fullname = "Syed Sabir";

let name = fullname.slice(0,6);
let firstChar = fullname.slice(0,2);
let lastChar = fullname.slice(-4);

//console.log(firstChar);

//console.log(lastChar);

const email = "cringe@gmail.com";
let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

//console.log(username);

console.log(extension);