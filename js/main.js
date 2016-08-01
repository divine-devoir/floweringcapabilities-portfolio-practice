
  $(document).on('ready',function(){
  $(".foo-hamburger").on('click',function(){
    $(".navmobile-wrapper").toggle();
  });
  //scroll to with offset
  var buffer = 5;
  var offset = buffer + $('.nav-main').outerHeight(true);
  console.log(offset);


  $('body').css('margin-top', offset);
    $('.navdesktop-wrapper').outerHeight(true);


  $('.navmobile-wrapper a').on('click',function(event){

    console.log(event);

    event.preventDefault();

    var pageToScrollTo = $(this).attr('href');


    $(window).scrollTo(/*can put to content inside of section*/pageToScrollTo, 1000, {offset: -offset});

  });
  $('.navdesktop-wrapper a').on('click',function(event){

    console.log(event);

    event.preventDefault();

    var pageToScrollTo = $(this).attr('href');


    $(window).scrollTo(/*can put to content inside of section*/pageToScrollTo, 800, {offset: -offset});

//end scrollTo
});


//business card toggle show hide

//see pearltrees fadecolor
var class_colors = [
"#fff0d9",	"#fbffd9",	"#fff0d9", "#fbffd9"
];
var index = 0;

setInterval(
  function () {
  document.getElementById("home").style.backgroundColor = (class_colors[index]);

    if(index === class_colors.length -1){
      index = 0;
    }
    else{
      index++;
    }
  }
, 2000);
/*"#CCFFFF","#99FFCC",*/
$(".labelfig1").hover(
  function(){
    $("figcaption1").toggle();


  });
  $(".labelfig2").hover(
    function(){
      $(".figcaption2").toggle();


    });
    $(".labelfig3").hover(
      function(){
        $(".figcaption3").toggle();


      });


      $(".labelfig4").hover(
        function(){
          $("figcaption4").toggle();


        });
        $(".labelfig5").hover(
          function(){
            $(".figcaption5").toggle();


          });
          $(".labelfig6").hover(
            function(){
              $(".figcaption6").toggle();


            });






});
