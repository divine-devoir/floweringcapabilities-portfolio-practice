
  $(document).on('ready',function(){
  $(".foo-hamburger").on('click',function(){
    $(".navmobile-wrapper").toggle();
  });
  //scroll to with offset
  var buffer = 20;
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

















});
var class_colors = ["#CCFFFF","#99FFCC","#66FFCC","#33FFCC","#00FFCC"];
var index = 0;

setInterval(
  function () {
  document.body.style.backgroundColor = (class_colors[index]);

    if(index === class_colors.length -1){
      index = 0;
    }
    else{
      index++;
    }
  }
, 1000);
