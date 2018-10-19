/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//window.onload = hideShowButton();

function hideShowButton()  {
document.getElementById("show").style.display = "none";
}

function Hide() {
   document.getElementById("msg").style.display = "none";
   document.getElementById("show").style.display = "block";
}
function Show() {
   document.getElementById("msg").style.display = "block";
   document.getElementById("show").style.display = "none";
}


