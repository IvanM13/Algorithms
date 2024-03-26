function radixSort(arr) {
    // Находим максимальное число в массиве
    const max = Math.max(...arr);
    
    // Определяем количество разрядов
    const digitCount = Math.floor(Math.log10(max) + 1);
    
    // Создаем корзины для каждой цифры
    const buckets = Array.from({ length: 10 }, () => []);
    
    // Выполняем сортировку для каждого разряда
    for (let i = 0; i < digitCount; i++) {
      // Распределяем элементы по корзинам на основе текущего разряда
      for (let j = 0; j < arr.length; j++) {
        const digit = Math.floor(arr[j] / Math.pow(10, i)) % 10;
        buckets[digit].push(arr[j]);
      }
      
      // Объединяем элементы из всех корзин
      arr = [].concat(...buckets);
      
      // Очищаем корзины перед следующей итерацией
      for (let k = 0; k < buckets.length; k++) {
        buckets[k] = [];
      }
    }
    
    return arr;
  }
  // Пример использования
  // const arr = [170, 45, 75, 90, 802, 24, 2, 66];
  const arr = [300, 2, 80, 500, 9, 7, 4, 1, 60];
  const sortedArr = radixSort(arr);
  console.log(sortedArr); // [2, 24, 45, 66, 75, 90, 170, 802]

 