

function cal(){
    var obj=document.getElementById("rslt");
    obj.value=eval(obj.value);
   }
   
   function input(a){
     var obj=document.getElementById("rslt");
     obj.value+=a;
   }
   
   function clrscr(){
     var obj=document.getElementById("rslt");
     obj.value=" ";
   }
   /*button:hover{
       background-color:#9D9D9D;
       border:1px dashed black;
       border-radius:4px;
     }*/
   function mover(id){
     document.getElementById(id).style.backgroundColor="#9D9D9D";
     document.getElementById(id).style.border="1px dashed black";
   }
   function mout(id){
     document.getElementById(id).style.backgroundColor="#E9E9E9"; document.getElementById(id).style.border="none";
   }
     function emout(){
     document.getElementById('equal').style.backgroundColor="#92D6FF"; document.getElementById('equal').style.border="none";
   }
   
   