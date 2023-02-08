$(document).ready(function(){
    $(document).on('click', '.headeraccor', function()
      {   
         $(this).siblings('.headeraccor').children('i').removeClass('fa-minus').addClass('fa-plus');
         $(this).siblings('.bodyaccor').not($(this).next()).slideUp();
         $(this).children('i').toggleClass('fa-plus').toggleClass('fa-minus');
         $(this).next().slideToggle();
         $(this).siblings('.active').removeClass('active');
         $(this).toggleClass('active');
      })
    })