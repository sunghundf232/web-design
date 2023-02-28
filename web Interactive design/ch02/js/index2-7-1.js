var menu = $('#main-nav li');
menu.mouseover(function(){
  $(this).stop().animate({height:'50px'},500);
});
.mouseout(function(){
  $(this).stop().animate({height:'40px'},500)
});

/*
write less,do more!
 - 코드는 적게
 - 속도는 빠른게 좋아
 - js는 애니메이션 시도시 속도 늦어 --> 코드가 길어지면 속도 늦어

*/


