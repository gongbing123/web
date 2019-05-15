$(function () {
   var
       label=$('ol li'),
       index=0;
   label.mouseover(function () {
       var curr=$(this).index();
       $(this).addClass('active').siblings().removeClass('active');
       $('ul li').eq(curr).find(':input').prop('checked',true);
   });
   function auto(){
       if(index<3){
           index++;
       }else{
           index=0;
       }
       label.eq(index).addClass('active').siblings().removeClass('active');
       $('ul li').eq(index).find(':input').prop('checked',true);
       setTimeout(auto,2000);
   }
   auto();
});