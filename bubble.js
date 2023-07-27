function bubbleSort(array){
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
      if(array[j] > array[j+1]){
        let aux = array[j]
        array[j] = array[j+1]
        array[j+1] = aux
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
