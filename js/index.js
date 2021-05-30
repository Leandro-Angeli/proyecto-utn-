

  
 
  
 
  
dropdownBtn.addEventListener('click',()=>{
   navMenu.classList.toggle('nav-visible') ;
    header = document.querySelector('#header-move');
   header.classList.toggle('header-move');
   var aria =  dropdownBtn.getAttribute('aria-expanded');
   if (aria === true ) {
     aria= false;
     
   } else { aria= true;
     
   }
   dropdownBtn.setAttribute('aria-expanded',aria);
  
   



  

 })


 // SKIP TO MAIN FUNCTION
 var toMainLink = document.getElementById('to-main-link');
var accesibilityCont = document.getElementById('accesibility-container');

 toMainLink.addEventListener('focus',show);
 
 function show() {
   accesibilityCont.classList.add('screen-only-focus');
   accesibilityCont.classList.remove('screen-only');
  
   
 }
 toMainLink.addEventListener('focusout',hide);

 function hide() {
  accesibilityCont.classList.add('screen-only');
  accesibilityCont.classList.remove('screen-only-focus');
 
  
}



 show();
hide();


// SKIP TO MAIN FUNCTION



