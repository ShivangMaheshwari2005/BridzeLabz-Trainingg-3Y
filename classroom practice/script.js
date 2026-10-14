// let username= "  yash singh "
//     console.log(username.trim())


// console.log(username.toLowerCase())
// console.log(username.toUpperCase())
// console.log(username.includes("singh"))
// console.log(username.split(" "))
// console.log(username.trim().split(" "))
// console.log(username.replace("singh","kumar"))
// console.log(username.trim().toUpperCase().split(" "))
// console.log(username.slice(4))



// check password is correct or not

// let password = " wertyui#$%WQ23 ";

// function checkPassword(password) {
//     let a = password.trim();

//     if (a.length < 6) return false;

//     let upper = false;
//     let lower = false;
//     let digit = false;
//     let special = false;

//     for (let i = 0; i < a.length; i++) {
//         let ch = a.charAt(i);

//         if (ch >= "A" && ch <= "Z") {
//             upper = true;
//         }
//         else if (ch >= "a" && ch <= "z") {
//             lower = true;
//         }
//         else if (ch >= "0" && ch <= "9") {
//             digit = true;
//         }
//         else {
//             special = true;
//         }
//     }

//     if (upper && lower && digit && special) {
//         return true;
//     }

//     return false;
// }

// let ans = checkPassword(password);
// console.log(ans);



//  otp generataor

// function otpGenrate(){


// let otp="";
// for (let i=0;i<4;i++){

// let  num =Math.floor(Math.random()*10);

// otp +=num;

// }
// return otp;
// }
// console.log(otpGenrate())



