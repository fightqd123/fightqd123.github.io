/*my works 我的作品组件*/
var H5ComponentMyworks = function (name,cfg) {
  var component =  new H5ComponentBase(name,cfg);
  var work1 = $('<div class="work1">');
  var bg1    = $('<div class="bg1">');
  var text1    = $('<div class="text1">');
  var work2 = $('<div class="work2">');
  var bg2    = $('<div class="bg2">');
  var text2    = $('<div class="text2">');
  text1.text('web app');
  text2.text('我的简历');
  bg1.on('click',function(){
    window.open('https://fightqd123.github.io/Report');  
  })
  bg2.on('click',function(){
    $.fn.fullpage.moveTo( 1 ); 
  })
  work1.append(bg1).append(text1);
  work2.append(bg2).append(text2);
  component.append(work1).append(work2);
  


  return component;  
}
