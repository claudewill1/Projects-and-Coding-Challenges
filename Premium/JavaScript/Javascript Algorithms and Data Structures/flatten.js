/** flatten
 * Write a recursive function called flatten which accepts an array of arrays and returns
 * a new array with all values flattened.
 * 
 * Examples:
 * flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
 * flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
 * flatten([[1],[2],[3]]) // [1,2,3]
 * flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
 */

 const flatten = arr => {
     return arr.reduce((acc, item)=>{
         return acc.concat(
             Array.isArray(item) ? flatten(item) : item 
         );
     },[])
 }



 console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
 console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
 console.log(flatten([[1],[2],[3]])) // [1,2,3]
 console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]