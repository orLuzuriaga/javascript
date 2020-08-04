/**
 Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
 Return the truncated string with a ... ending.
 */

function truncateString(str,num){

     return num < str.length? str.substring(0,num) + "...":str
}


console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));