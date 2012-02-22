$(document).ready(function() {

  /*toggle visibility*/
    $(".toggle p.title").click(function() {
        $(this).next().toggle('blind');
    });


  /*
    Simple image gallery. Use default settings
  */
  $('.fancybox').fancybox();

});
