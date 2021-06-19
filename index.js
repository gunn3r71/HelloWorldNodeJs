var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var salute = "";

if (hours <= 11) {
    salute = "Good morning!";
} else if(hours <= 18) {
    salute = "Good afternoon!";
} else {
    salute = "Good night!";
}

console.log("Hi, " + salute + "\nNow it's " + hours + " and " + minutes + " minutes");