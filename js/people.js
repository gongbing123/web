$(function () {
   new Vue({
       el:'#app',
       data:{
           person:{
               name:'',
               age:0,
               sex:'male',
           },
           people:[{name:'zhangsan',age:20,sex:'male'},{name:'lisi',age:24,sex:'female'}]
       },
       methods:{
           create:function () {
               this.people.push(this.person);
               this.person={name:'',age:0,sex:'male'}
           },
            deleted:function (index) {
                this.people.splice(index,1);
            }
       }
   })
});