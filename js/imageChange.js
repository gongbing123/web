window.onload=function () {
  var curr=1;
  function change(){
    if(curr<4){
      curr++;
    }else{
      curr=1;
    }
    var obj=document.getElementsByTagName('img');
    obj[0].src='../img/pc-'+curr+'.jpg';
    setTimeout(change,1000);
  }
  change();
};
