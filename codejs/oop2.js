// 다시 말하지만 function은 값으로 처리되기 때문에,
// js에서는 특이한 방법으로 다른 언어의 'class'형식을 구현할 수 있다.
var q = {
  v1:'v1',
  v2:'v2',
  f1:function (){
    console.log(this.v1); // 다른 언어의 class에서 사용하는 'this'키워드와 같다.
  },
  f2:function(){
    console.log(this.v2);
  }
}

q.f1();
q.f2();
