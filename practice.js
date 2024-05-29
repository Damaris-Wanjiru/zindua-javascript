// find raisetoindex

let array = [2, 8, 9, 64];

{
    function findIndex(array){
        let resultArray = [];
        for (let i= 0; i < array.length; i++){
            resultArray.push(Math.pow(array[i], i))
        }
        return resultArray;
        
    }
}
let newArray = findIndex(array);
console.log(newArray)
//array[i]**i