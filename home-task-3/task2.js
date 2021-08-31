function ellipsis(text, textLength) {
  if(text.length > textLength) {
    return text.slice(0, textLength - 1) + '...';
  }
  return text;
}

console.log(ellipsis('Today is rainy Sunday', 15))
console.log(ellipsis('Full text.', 15))