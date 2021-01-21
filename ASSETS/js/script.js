 jQuery(document).ready(function(){
    var navOffset = jQuery("#centerNav").offset().top;

jQuery(window).scroll(function(){
   var scrolPosition = jQuery(window).scrollTop();
         
   if(scrolPosition >= navOffset){
      jQuery("#centerNav").addClass("fixed");

   }
   else{
      jQuery("#centerNav").removeClass("fixed");


   }

});
    
     });