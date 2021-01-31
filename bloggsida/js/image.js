
function getPictureOne() {

   
var picture = document.createElement("img");
picture.src = "bilder/tec-9.png";

picture.setAttribute("height", "300");
picture.setAttribute("width", "400");
picture.id = "pic";

document.getElementById("bild1").appendChild(picture);



//låser buttons, förutom första om man vill ha oändligt med bloggar! :D

document.getElementById("button2").disabled = true;
document.getElementById("button3").disabled = true;
document.getElementById("button4").disabled = true;




}


function getPictureTwo() {

    getPictureOne();
    

   
    
    var picture = document.createElement("img");
    picture.src = "bilder/tec-9.png";
    
    picture.setAttribute("height", "300");
    picture.setAttribute("width", "400");
    picture.id = "pic";
    
    
    
    document.getElementById("bild2").appendChild(picture);




    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("button4").disabled = true;
    
    
    }

    function getPictureThree() {

        
           getPictureTwo();


   
       
        var picture = document.createElement("img");
        picture.src = "bilder/tec-9.png";
        
        picture.setAttribute("height", "300");
        picture.setAttribute("width", "400");
        picture.id = "pic";
       
        
        
        document.getElementById("bild3").appendChild(picture);

        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
        document.getElementById("button3").disabled = true;
        document.getElementById("button4").disabled = true;
        
        }

        function getPictureFour() {

           
           
           getPictureThree();

           let picture = document.createElement("img");
           picture.src = "bilder/tec-9.png";
           
           picture.setAttribute("height", "300");
           picture.setAttribute("width", "400");
           picture.id = "pic";
           
           
           
            document.getElementById("button1").disabled = true;
            document.getElementById("button2").disabled = true;
            document.getElementById("button3").disabled = true;
            document.getElementById("button4").disabled = true;

            
            
            document.getElementById("bild4").appendChild(picture);
            
            
            }









