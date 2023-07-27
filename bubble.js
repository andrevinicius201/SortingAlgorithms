function bubbleSort(array){
  for(let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
          if(array[i] > array[j]){
            let aux = array[i]
            array[i] = array[j]
            array[j] = aux
          }
    }

  }
  return array
}

var ages = []
for(let i=0; i<10; i++){
  ages.push(parseInt(Math.random()*100))
}

console.log("Before sorting: ")
console.log(ages)

ages = bubbleSort(ages)

console.log("After sorting: ")
console.log(ages)
