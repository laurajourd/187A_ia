$(document).ready(function() {

  /*toggle visibility*/
    $(".collapseit").click(function() {
        $(this.parentNode).css('display','none');
    });

    $('#_shelly').click(function(){
        $('#shelly_').show();
    });

    $('#_charles').click(function(){
        $('#charles_').show();
    });


    $('#_nico').click(function(){
        $('#nico_').show();
    });


    $('#_mary').click(function(){
        $('#mary_').show();
    });


    $('#_abdul').click(function(){
        $('#abdul_').show();
    });

    simpleSlide();

  /*
    Simple image gallery. Use default settings
  */
  $('.fancybox').fancybox();
  
  /*gallery home page*/
  $('.myCarousel').carousel({
  interval: 2000
})

});
