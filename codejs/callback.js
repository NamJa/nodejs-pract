// function a() {
//   console.log('A');
// }

//익명 함수
var a = function() {
  console.log('A');
}


//javascript에서 함수는 값으로 표현되며, 콜백을 구현할땐 함수명을 기입해서 실행시키면 된다.
function slowfunc(hou) {
  hou();
}

slowfunc(a);
