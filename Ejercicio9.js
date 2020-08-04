function getIndexToIns(arr, num) {


    if(arr.length === 0){
        return 0
    }else{
        const indice = (element) => element >= num
        let arr2 = qsort(arr);
        let index = arr2.findIndex(indice)
         console.log(arr2)
        return index !== -1?index:arr2.length;
    }
      

  
  }
  



  

  const pivote = (acc, valorActual) => acc + valorActual;



  function qsort(arr){

    if(arr.length < 2){
        return arr
    }else{
       
        let piv = Math.trunc(arr.reduce(pivote,0) / arr.length)

        let numMayores = arr.filter((valor) => valor > piv);
        let numMenores = arr.filter((valor) => valor < piv); 
        let iguales = arr.filter((valor)=> valor === piv)
    
        return qsort(numMenores).concat(iguales).concat(qsort(numMayores))
    }

   

  
  }

  const iduales = (valor) => valor === valor2 
  const arr = ['perro','Perro']
  const [uno, dos] = [...arr]
  uno.toLowerCase()
  dos.toLowerCase()
  console.log((uno.equals(dos)));
  console.log(uno.includes(dos));





