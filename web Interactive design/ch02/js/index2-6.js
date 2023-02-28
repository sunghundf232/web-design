var btn = $('button');
var target = $('.target');

btn.click(function(){
  //btn 클릭시 할꺼 
  target.animate({width:'160px'},2000);
  // animate --> 자바스크립트에서  transition 대신 사용
});