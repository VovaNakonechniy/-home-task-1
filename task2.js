//first method
function drawChessboard1() {
  const a = 'wbwbwbwb';
  const b = 'bwbwbwbw';
  for (let i = 0; i < 8; i++) {
    console.log(i % 2 ? b : a);
  }
}

drawChessboard1(); 
console.log('');

//second method
function drawChessboard2() {
  for (let i = 0; i < 8; i++) {
    let row = '';
    for (let j = 0; j < 8; j++) {
      row += i % 2 === j % 2 ? 'w' : 'b';
    }
    console.log(row);
  }
}

drawChessboard2(); 
    