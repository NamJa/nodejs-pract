// array, object
// function

//javascript에서는 function이라는 키워드가 값으로 인정된다. c언어에서의 함수포인터와 같다

var f = function()
{
  console.log(1);
  console.log(2);
  console.log(3);
}

var a = [f];
a[0]();

var o = {
  func:f
}
o.func();

// f라는 함수를 호출하는 각각의 방법이다
