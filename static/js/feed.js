$(document).ready(function() {
  $.getJSON('https://cugosfeedapi.herokuapp.com/?count=10', function(data) {
    var posts = data.rss.channel.item;
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];

      var D = new Date(post.pubDate);
      var m = D.getMonth() < 10 ? '0' + (D.getMonth()+1) : (D.getMonth()+1);
      var d = D.getDay() < 10 ? '0' + (D.getDay()+1) : (D.getDay()+1);
      var y = D.getFullYear();
      var date = m + '/' + d + '/' + y;

      $('#feed').append('<li class="post">\
                           <a href="'+post.link+'" target="_blank">\
                             <span class="post-date">'+date+'</span>'+post.title+'\
                           </a>\
                         </li>');

    }


  });
});
