//Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello,
//<name>!" to the console. 
function userProfile(name){
console.log("Hello, " + name + "!");

}
userProfile("Ramya");

//Create an arrow function named `double` that takes a number as a parameter and returns
//double its value. 
 let double = (number) => {
  return number * 2;
};
console.log(double(5));

//Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
//after 2 seconds.
setTimeout(function () {
  console.log("This message is delayed by 2 seconds");
}, 2000); 

//Create a function named `getUserData` that takes a callback function as a parameter. Inside
//`getUserData`, simulate fetching data with `setTimeout` and then call the callback function with
//that should print “Call Back Function” after 3 seconds.
//Call the `getUserData` function and log message using the callback function.

function getUserData(callback) {
  setTimeout(()=>{
    callback("Call Back Function");
  }, 3000);
}

getUserData(function (message) {
  console.log(message);
});