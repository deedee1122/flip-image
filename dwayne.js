       // <div id='image'> mouse over</div>
function turnImage(angle){
     var img = document.querySelector('#image');
     img.style.transform = 'rotate('+angle+'deg)';
}

function rotateImage(event) {
     var RightArrow = '39';
     var DownArrow = '40';
     var LeftArrow = '37';
     var UpArrow = '38';
     // up Arrow, down arrow, left arrow, right arrow
     var img = document.getElementById('image');
     //document.getElementsById('image').rotateImage;  
     console.log('key code pressed ', event);
     if(event.keyCode == RightArrow){  
          turnImage(90)
     } else if(event.keyCode == DownArrow){
         turnImage(180)
     }
     else if(event.keyCode == LeftArrow){
          turnImage(270)
     }
     else if(event.keyCode == UpArrow){
          turnImage(360)
     }


}
     var diffName = 0;

console.log('keycode');

document.querySelector('button#rightbutton').addEventListener('click' , function(event){
    console.log('clicked rightbutton');
    var img = document.querySelector('#image');
    img.style.transform = 'rotate(90deg)';
});

document.querySelector('button#upbutton').addEventListener('click' , function(event){
     console.log('clicked upbutton');
     var img = document.querySelector('#image');
     img.style.transform = 'rotate(360deg)';
 });

 document.querySelector('button#leftbutton').addEventListener('click' , function(event){
     console.log('clicked leftbutton');
     var img = document.querySelector('#image');
     img.style.transform = 'rotate(270deg)';
 });            
      
 document.querySelector('button#downbutton').addEventListener('click' , function(event){
     console.log('clicked downbutton');
     var img = document.querySelector('#image');
     img.style.transform = 'rotate(180deg)';
 });


       //      [up]
       //[left]     [right]
       //      [down]

      // var angle = 0;
       // img = document.getElementById('image');
      
     //onKeypress -> keydown
       
        
        var output = document.getElementById("output");
        var body = document.querySelector('body');

        body.addEventListener('keydown' , rotateImage);
       

        // how to call javascript after you press a key - Done
        // find out the key that is pressed using javascript
        // add two more buttons for flipping in different angles
        // add four buttons to display in the ui 
        // map these buttons with the four keys
        // tasks Strive
         
 // pascalCase default
 // CamelCase
 // kebab_case