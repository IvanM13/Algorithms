// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let imin = i;
//         for(let j = i; j < arr.length; j++){
//             if(arr[j] < arr[imin]){
//                 imin = j;
//             }
//         }

//         swap(arr, i, imin);       
//     }

//     return arr;
// };

// function swap(arr, i, imin){
//     let temp = arr[imin];
//     arr[imin] = arr[i];
//     arr[i] = temp;       
// };


const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

function straigthSelection(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let k = i;
    let x = arr[i];
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (x > arr[j]) {
        k = j;
        x = arr[j];
      }
    }
    arr[k] = arr[i];
    arr[i] = x;
  }
  return arr;
}

function directSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minPosition = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minPosition]) {
        minPosition = j;
      }
    }
    if (i !== minPosition) {
      // let tmp = arr[i];
      // arr[i] = arr[minPosition]; 
      // arr[minPosition] = tmp;
      swap(arr, i, minPosition);
    }

  }

  return arr;

}

function swap(arr, a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

// Пример использования
//   let arr = [64, 34, 25, 12, 56, 43, 87, 98, 76, 33];
//   console.log("Массив до сортировки:", arr);
//   console.log("Массив после сортировки:", selectionSort(arr));

rand = function (arr) {
  let n = Math.floor(Math.random() * 10);
  for (let i = 0; i < n; i++) {
    mass[i] = Math.floor(Math.random() * 1000);
  }
  return arr;
};

let mass = [];
rand(mass);

console.log(mass);

console.log(directSort(mass));
