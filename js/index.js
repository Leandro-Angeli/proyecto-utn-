

  
  var h2 = document.getElementsByTagName('h2');
  
 
  
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
  
   



  // SLIDE


   // SLIDE

 })




