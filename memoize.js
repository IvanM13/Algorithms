const generateKey = args => ( 
    args.map(x => `${x.toString()}:${typeof(x)}`).join('|') // Результат: "x1:number|x2:number|..."
  );
  
  // Принимает функцию в качестве параметра
  const memoize = fn => {
    const cache = {};
    return (...args) => { 
  // Генерирует ключ для сохранения результата
      const key = generateKey(args); 
      const val = cache[key];
  // Проверяет, существует по данному ключу какое-либо значение и возвращает его, если оно есть
      if (val) return val;
  // Сохраняет результат вызова функции
      const res = fn(...args);
      cache[key] = res;
  // Возвращает результат
      return res; 
    };
  };

// Функция, находящая сумму чисел от a до b
const sumSeq = (a, b) => {
    console.log('Calculate sum');
    let r = 0;
    for (let i = a; i < b; i++) r += i;
    return r;
  }; 
  
  // Производим мемоизацию функции sumSeq
  const mSumSeq = memoize(sumSeq);
  
  console.log('First call mSumSeq(2, 5)');
  console.log('Value: ' + mSumSeq(2, 5)); // Выводит  в консоль "9"
  console.log('Second call mSumSeq(2, 5)');
  console.log('From cache: ' + mSumSeq(2, 5)); // Выводит в консоль "9"
  console.log('Call mSumSeq(2, 6)');
  console.log('Calculated: ' + mSumSeq(2, 6)); // Выводит в консоль "14"