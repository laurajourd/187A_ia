//function displayNavbar(mainNav){
//    if (navDisplay = true){

//    }

//    var subNav = mainNav.lastElementChild;
//    subNav.style.display = "table-row"
//    var navDisplay = true;
//}

//function delayNavbar(currentElement){
//    var subNav = currentElement.lastElementChild;

//    setTimeout(function(){
//        subNav.style.display = "none";
//    }, 500);
//}

$(function(){
  /*display subnavigation*/

    $(".main-nav-").hover(
        function () {
            $("a", this).css({"background-color":"#C1C1C1"});
            $(".navx", this).show();


        },
        function () {
            $("a", this).css("background-color","#F4F2EE");
            $(".navx", this).hide();
        }
    );


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

});
/* drop down menu*/
//$('.dropdown-toggle').dropdown();
  
//});



