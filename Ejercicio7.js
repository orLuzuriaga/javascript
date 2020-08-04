/** 
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 * 
*/


function titleCase(str){
  
    let arr = str.toLowerCase().split(' ')

    const result = arr.map((subArr)=>{
          return subArr.replace(subArr[0], subArr[0].toUpperCase());
    });

    return result.join(' ')
}


console.log(titleCase("I'm a little tea pot"));