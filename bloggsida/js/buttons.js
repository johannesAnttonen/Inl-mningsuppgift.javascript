
function functionContentOne(){

   // skapar h1 tag för första knappen
   var headerOne = document.createElement("h1");
   headerOne.id="headerThree";


   var blog = document.createTextNode("Blog1-TEC9");
   headerOne.appendChild(blog);
   var element = document.getElementById("bild1");
   element.appendChild(headerOne)


   // skapar paragraph för första knappen


   var pOne = document.createElement("p");
   // skapar ett id 
   pOne.id="p1";

   // ändrar font-size
   pOne.style.fontSize = "20px";
 

   // ändrar fontfamily "css"
   pOne.style.fontFamily = "sans-serif";




   var para = document.createTextNode("The Intratec TEC-9, TEC-DC9, KG-99 and AB-10 are a blowback-operated line of semi-automatic pistols. They were developed by Intratec, an American subsidiary of the Swedish firearms manufacturer Interdynamic AB. Introduced in 1984, the TEC-9 was made of inexpensive molded polymers and a mixture of stamped and milled steel parts. The simple design of the gun made it easy to repair and modify. The TEC-9 developed a negative reputation for its association with organized crime, street gangs and mass shootings in the 1990s. Most notably it was used during the 101 California Street shooting and the Columbine High School massacre. However, it was a commercial success, with over 250,000 being sold.");
   pOne.appendChild(para);
   var element = document.getElementById("bild1");
   element.appendChild(pOne);


   
   

}
















function functionContentTwo(){

    functionContentOne();

       // skapar h1 tag för Andra knappen
   var headerTwo = document.createElement("h1");
   headerTwo.id="headerTwo";
   var blog = document.createTextNode("Blog2-TEC9");
   headerTwo.appendChild(blog);
   var element = document.getElementById("bild2");
   element.appendChild(headerTwo);


   // skapar paragraph för Andra knappen

   var pTwo = document.createElement("p");
   pTwo.id="p2";
   pTwo.style.fontSize = "20px";
   pTwo.style.fontFamily = "sans-serif";
   var para = document.createTextNode("The Intratec TEC-9, TEC-DC9, KG-99 and AB-10 are a blowback-operated line of semi-automatic pistols. They were developed by Intratec, an American subsidiary of the Swedish firearms manufacturer Interdynamic AB. Introduced in 1984, the TEC-9 was made of inexpensive molded polymers and a mixture of stamped and milled steel parts. The simple design of the gun made it easy to repair and modify. The TEC-9 developed a negative reputation for its association with organized crime, street gangs and mass shootings in the 1990s. Most notably it was used during the 101 California Street shooting and the Columbine High School massacre. However, it was a commercial success, with over 250,000 being sold.");
   pTwo.appendChild(para);
   var element = document.getElementById("bild2");
   element.appendChild(pTwo);


 
    
      
 }

 function functionContentThree(){
     
    
    functionContentTwo();


           // skapar h1 tag för tredje knappen
   var headerThree = document.createElement("h1");
   headerThree.id="headerThree";
   var blog = document.createTextNode("Blog3-TEC9");
   headerThree.appendChild(blog);
   var element = document.getElementById("bild3");
   element.appendChild(headerThree);


   // skapar paragraph för tredje knappen

   var pThree = document.createElement("p");
   pThree.id="p3";
   pThree.style.fontSize = "20px";



   pThree.style.fontFamily = "sans-serif";
   var para = document.createTextNode("The Intratec TEC-9, TEC-DC9, KG-99 and AB-10 are a blowback-operated line of semi-automatic pistols. They were developed by Intratec, an American subsidiary of the Swedish firearms manufacturer Interdynamic AB. Introduced in 1984, the TEC-9 was made of inexpensive molded polymers and a mixture of stamped and milled steel parts. The simple design of the gun made it easy to repair and modify. The TEC-9 developed a negative reputation for its association with organized crime, street gangs and mass shootings in the 1990s. Most notably it was used during the 101 California Street shooting and the Columbine High School massacre. However, it was a commercial success, with over 250,000 being sold.");
   pThree.appendChild(para);
   var element = document.getElementById("bild3");
   element.appendChild(pThree);
    
      
 }

 function functionContentFour(){

  
    functionContentThree();


      // skapar h1 tag för fjärde knappen

    var headerFour = document.createElement("h1");
    headerFour.id="headerThree";
    var blog = document.createTextNode("Blog4-TEC9");
    headerFour.appendChild(blog);
    var element = document.getElementById("bild4");
    element.appendChild(headerFour);
 
 
    // skapar paragraph för fjärde knappen
 
    var pFour = document.createElement("p");
    pFour.id="p4";
    pFour.style.fontSize = "20px";



    pFour.style.fontFamily = "sans-serif";
    var para = document.createTextNode("The Intratec TEC-9, TEC-DC9, KG-99 and AB-10 are a blowback-operated line of semi-automatic pistols. They were developed by Intratec, an American subsidiary of the Swedish firearms manufacturer Interdynamic AB. Introduced in 1984, the TEC-9 was made of inexpensive molded polymers and a mixture of stamped and milled steel parts. The simple design of the gun made it easy to repair and modify. The TEC-9 developed a negative reputation for its association with organized crime, street gangs and mass shootings in the 1990s. Most notably it was used during the 101 California Street shooting and the Columbine High School massacre. However, it was a commercial success, with over 250,000 being sold.");
    pFour.appendChild(para);
    var element = document.getElementById("bild4");
    element.appendChild(pFour);

   
    
      
 }

// startar om sidan.

 function reloadPage(){
  
    window.location.reload();
 }


 // ändrar sidans färg

 function changeColorRed(){
   document.body.style.backgroundColor = "red";

 }

 function changeColorBlue(){
   document.body.style.backgroundColor = "#00BFFF";

 }

 function changeColorGreen(){
   document.body.style.backgroundColor = "green";

 }

 function changeColorYellow(){
   document.body.style.backgroundColor = "Yellow";

 }


 // ändrar till grid!

 function changeGrid(){
   document.getElementById('content').className = "grid"; 
 }

