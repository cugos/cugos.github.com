$(document).ready(function(){
  var paco = '';
  $(window).bind('keypress', function(e){
    key = String.fromCharCode(e.keyCode || e.which);
    paco += key;
    check = paco.substr(paco.length - 4);
    if(check=='paco') {
      console.log($('#thebigspoon img').attr('src'));
      $('#thebigspoon img').attr('src', '/image/paco.png');
    }
  });
});