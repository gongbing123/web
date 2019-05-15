$(function () {
   var
       form=$('form'),
       check=form.find('p:first-of-type :checkbox'),
       all=form.find('span:first-of-type'),
       nall=form.find('span:last-of-type'),
       langs=form.find('[name=langs]'),
       reverse=form.find('a');
   form.find('*').show().off();
   langs.prop('checked',false).off();
   nall.hide();
   check.change(function () {
       var checked=check.prop('checked');
       langs.each(function () {
          $(this).prop('checked',checked);
       });
       if(checked){
           all.hide();
           nall.show();
       }else{
           all.show();
           nall.hide();
       }
   });
   function checkstatus() {
       var checkedall=langs.toArray().every(function (e) {
           return $(e).prop('checked');
       });
       if(checkedall){
          check.prop('checked',true);
          all.hide();
          nall.show();
       }else{
           check.prop('checked',false);
           all.show();
           nall.hide();
       }
   }
   langs.each(function () {
       $(this).change(function () {
           checkstatus();
       });
   });
   reverse.click(function () {
       langs.each(function () {
           $(this).prop('checked',!$(this).prop('checked'));
       });
       checkstatus();
   })
});