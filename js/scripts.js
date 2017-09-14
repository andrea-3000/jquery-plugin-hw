// A $( document ).ready() block.
$( document ).ready(function() {
    setPage();
});

function setPage() {

  //Make it slick!
  $('#make-it-slick').on('click', function(){
      $('#demo-htmlselect').ddslick();
  });
  //Restore Original
  $('#restore').on('click', function(){
      $('#demo-htmlselect').ddslick('destroy');
  });
  //
  // $("#showButton").hide();
  // $('a[title]').qtip();
  // $("button").click(function() {
  //   $("#intro, button").toggle();
  // })
}
