$(document).ready(function() {

  /*toggle visibility*/
    $(".title").click(function() {
        $(".content").toggle('blind');
    });


  /*
    Simple image gallery. Use default settings
  */
  $('.fancybox').fancybox();

});
