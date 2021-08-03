// var arr= [10,-3,79,-15,23,-4]
// len=arr.length
// for(i=0;i<len-1;i++)
// {
//     for(j=i+1;j<len;j++)
//     {
//         if (arr[i] > arr[j])
//         {
//             temp= arr[j]
//             arr[j]= arr[i]
//             arr[i]= temp
//         } 
//     }
// }

// console.log(arr)

var arr = [10,-3, 38, 43, 43, 89,21,23,54,90]
var prompt = require('prompt-sync')();

var num = prompt("Enter number ");

found= false;
occ=0
positions =[]

for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
        found = true;
        occ ++;
        positions.push(i+1)


        //console.log("number found in " + (i+1)+ " position. " + "occurrences: " + occ );

        
    }    

}




if (!found)
{
    console.log("number not found..")
} else {
    console.log('number found in positions: ' + positions + " Occurrences: " + occ)
}


//  Create an array of at least 10 values.

// - Take an input from the user to look for in the array

// - Find and display the total number of occurrences of the user input value in the array

// - Also, display the positions in which they occur.      HINT: Create another array for keeping track of positions

