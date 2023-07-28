function selectionSort(array){
  for(let i = 0; i < array.length; i++){
    let min = array[i]
    let potentialReplacedIndex;
    for(let j = i; j < array.length; j++){
      if(array[j] < min){
        min = array[j]
        potentialReplaced = j
      }
    }
    let aux = array[i]
    array[i] = min
    array[potentialReplaced] = aux

  }
  return array
}

var ages = []
for(let i=0; i<10; i++){
  ages.push(parseInt(Math.random()*100))
}

console.log("Before sorting: ")
console.log(ages)

ages = selectionSort(ages)

console.log("After sorting: ")
console.log(ages)
