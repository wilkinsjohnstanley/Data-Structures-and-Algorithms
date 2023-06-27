/*Given a sorted array, write a function that returns the index for the given element.
nums = [1, 3, 5, 7, 9, 11, 13];
target = 1
*/
const arr = ['a', 'b', 'c', 'x', 'y', 'z'];
function findMe(arr, target){
    for (let i = 0; i<=arr.length; i++){
        if (arr[i] === target){
            return arr[i]
        }
    }
}
console.log(findMe(arr, 'y'));
