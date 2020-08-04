function frankenSplice(arr1, arr2, n) {

  
    let localArr = arr2;
    localArr.splice(n,0,...arr1)
    return localArr;
  }



function menores(arr, n){
    let result = []
    for(let i= n-1; i >= 0 ; i--){
          result.unshift(arr[i])
    }


    return result 
}
  
 frankenSplice([1, 2, 3], [4, 5, 6], 1);
  