// string methods = allow you to manipulate and work with text (strings)

let userName = "Linkx";

console.log(userName.charAt(1));
console.log(userName.indexOf("n"));
console.log(userName.lastIndexOf("x"));
console.log(userName.length);

// userName = userName.trim();
// console.log(userName);

// userName = userName.toUpperCase();
// console.log(userName);

// userName = userName.toLowerCase();
// console.log(userName);

// userName = userName.repeat(3);
// console.log(userName);

let result = userName.startsWith(" ");
// console.log(result);

if(result){
    console.log("Your username can't begin with ' '");
}
else{
    console.log(userName);
}

// let result = userName.endsWith(" ");

// if(result){
//     console.log("Your username can't end with ' '");
// }
// else{
//     console.log(userName);
// }

// let result = userName.includes(" ");

// if(result){
//     console.log("Your username can't include ' '");
// }
// else{
//     console.log(userName);
// }

let phoneNumber = "0950-123-4567";

phoneNumber = phoneNumber.replaceAll("-", "/");
// phoneNumber = phoneNumber.padStart(15, "0");
// phoneNumber = phoneNumber.padEnd(20, "0");

console.log(phoneNumber);