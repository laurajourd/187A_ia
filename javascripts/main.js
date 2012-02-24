$(document).ready(function() {

  /*toggle visibility*/

    $('#_shelly').click(function(){
        $('#charles_').hide();
        $('#nico_').hide();
        $('#mary_').hide();
        $('#abdul_').hide();
        $('#shelly_').show();
    });

    $('#_charles').click(function(){
        $('#nico_').hide();
        $('#mary_').hide();
        $('#abdul_').hide();
        $('#shelly_').hide();
        $('#charles_').show();
    });


    $('#_nico').click(function(){
        $('#charles_').hide();
        $('#mary_').hide();
        $('#abdul_').hide();
        $('#shelly_').hide();
        $('#nico_').show();
    });


    $('#_mary').click(function(){
        $('#charles_').hide();
        $('#nico_').hide();
        $('#abdul_').hide();
        $('#shelly_').hide();
        $('#mary_').show();
    });


    $('#_abdul').click(function(){
        $('#charles_').hide();
        $('#nico_').hide();
        $('#mary_').hide();
        $('#shelly_').hide();
        $('#abdul_').show();
    });


  /*
    Simple image gallery. Use default settings
  */
  $('.fancybox').fancybox();
  
  /*gallery home page*/
  $('.myCarousel').carousel({
  interval: 3000
})


/* drop down menu*/
$('.dropdown-toggle').dropdown();
  
});



