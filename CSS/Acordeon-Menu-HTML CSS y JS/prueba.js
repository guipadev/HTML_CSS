// Function to change the content of t2  
/*
function modifyText() {  
    var t2 = document.getElementById("t2");  
    t2.firstChild.nodeValue = "three";      
   }  
   
// add event listener to t  
var el = document.getElementById("t");   
el.addEventListener("click", modifyText, false);   
*/


const addClassActive = () => {
    document.getElementById("MyElement").className += " active";
}

document.getElementById("MyElement").addEventListener( 'click' , addClassActive );



/*
let btnItems = document.querySelectorAll(".item .btn-item")

for(let i = 0; i < btnItems.length; i++) {
    
    btnItems[i].addEventListener("click", function(e){
        //console.log(e.target)
        let btn = e.target;

        console.log(btn)

        if(btn.className === "btn-item"){
            
            //btn.classList.add("active")
            //removeClase()
            addClase()
            console.log(addClase() + "sfsdfs")
            
        }else {
           removeClase()
            btn.classList.add("active")
            //removeClase()
            //addClase()
            //console("no hago nada");
        }
    })
}

    const addClase = () => {

        for(let i = 0; i < btnItems.length; i++) {
            btnItems[i].classList.add("active")
        }
    }


    const removeClase = () => {

        for(let i = 0; i < btnItems.length; i++) {
            btnItems[i].classList.remove("active")
        }

    }
*/