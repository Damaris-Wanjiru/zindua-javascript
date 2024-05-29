
// let color = true;
// {
//     function changeColor(){
//         if(defaultColor){
//             myH1.headingStyle= "heading2"
//             textcolor = false;
//         }else {
//             myH1.headingStyle = "heading"
//             textcolor = true

//         }

//     }

// }
function sumAsync(num1, num2, callback) {
    setTimeout(() => {
       let result = num1 + num2;
       callback(result);
 
    }, 3000);
 }
    sumAsync(5, 6,(result) => {
       console.log(result)
 
    })