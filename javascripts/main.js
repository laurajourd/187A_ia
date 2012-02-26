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

    $(".navx li").hover(
        function(){
            $(".list_fleur", this).css("display","inline");
        },
        function(){
            $(".list_fleur", this).css("display","none");
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

    $('#_main_table').click(function(){
        $('#main_table').show();
        $('#count_table').hide();
        $('#home_table').hide();
        $('#about_table').hide();
        $('#admiss_table').hide();
        $('#acad_table').hide();
        $('#life_table').hide();
        $('#research_table').hide();
    });

    $('#_count_table').click(function(){
        $('#main_table').hide();
        $('#count_table').show();
        $('#home_table').hide();
        $('#about_table').hide();
        $('#admiss_table').hide();
        $('#acad_table').hide();
        $('#life_table').hide();
        $('#research_table').hide();
    });

    $('#_home_table').click(function(){
        $('#main_table').hide();
        $('#count_table').hide();
        $('#home_table').show();
        $('#about_table').hide();
        $('#admiss_table').hide();
        $('#acad_table').hide();
        $('#life_table').hide();
        $('#research_table').hide();
    });

    $('#_about_table').click(function(){
        $('#main_table').hide();
        $('#count_table').hide();
        $('#home_table').hide();
        $('#about_table').show();
        $('#admiss_table').hide();
        $('#acad_table').hide();
        $('#life_table').hide();
        $('#research_table').hide();
    });

    $('#_admiss_table').click(function(){
        $('#main_table').hide();
        $('#count_table').hide();
        $('#home_table').hide();
        $('#about_table').hide();
        $('#admiss_table').show();
        $('#acad_table').hide();
        $('#life_table').hide();
        $('#research_table').hide();
    });

    $('#_acad_table').click(function(){
        $('#main_table').hide();
        $('#count_table').hide();
        $('#home_table').hide();
        $('#about_table').hide();
        $('#admiss_table').hide();
        $('#acad_table').show();
        $('#life_table').hide();
        $('#research_table').hide();
    });

    $('#_life_table').click(function(){
        $('#main_table').hide();
        $('#count_table').hide();
        $('#home_table').hide();
        $('#about_table').hide();
        $('#admiss_table').hide();
        $('#acad_table').hide();
        $('#life_table').show();
        $('#research_table').hide();
    });

    $('#_research_table').click(function(){
        $('#main_table').hide();
        $('#count_table').hide();
        $('#home_table').hide();
        $('#about_table').hide();
        $('#admiss_table').hide();
        $('#acad_table').hide();
        $('#life_table').hide();
        $('#research_table').show();
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



