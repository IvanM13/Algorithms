function computeLPS(pattern) {
    const lps = [0];
    let len = 0;
    let i = 1;
    
    while (i < pattern.length) {
      if (pattern[i] === pattern[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len !== 0) {
          len = lps[len - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    
    return lps;
  }
  function KMP(text, pattern) {
    const lps = computeLPS(pattern);
    const indices = [];
    let i = 0;
    let j = 0;
    
    while (i < text.length) {
      if (text[i] === pattern[j]) {
        i++;
        j++;
      }
      
      if (j === pattern.length) {
        indices.push(i - j);
        j = lps[j - 1];
      } else if (i < text.length && text[i] !== pattern[j]) {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          i++;
        }
      }
    }
    
    return indices;
  }
  const text = "ABABDABACDABABCABAB";
  const pattern = "ABABCABAB";
  const indices = KMP(text, pattern);
  console.log(indices); // Output: [10]
  