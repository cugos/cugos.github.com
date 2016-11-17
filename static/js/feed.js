function init() {
  google.load("feeds", "1");

  function initialize() {
    var feed = new google.feeds.Feed("https://groups.google.com/forum/feed/cugos/topics/rss.xml?num=15");
    feed.setNumEntries(7);
    feed.load(function(result) {
      if (!result.error) {
        var container = document.getElementById("feed");
        var p = result.feed.entries;
        for (var i = 0; i < p.length; i++) {
          entry = p[i];
          var d = new Date(entry.publishedDate);
          var month = (d.getMonth() + 1)+'';
          month = month.length === 1 ? '0' + month : month;
          var day = d.getDate()+'';
          day = day.length === 1 ? '0' + day : day;
          var year = d.getFullYear();
          var date = month + '/' + day + '/' + year;
          $('#feed').append('<li class="post"><a href="'+entry.link+'" target="_blank"><span class="post-date">'+date+'</span>'+entry.title+'</a></li>');
        }
      }
    });
  }
  google.setOnLoadCallback(initialize);
}
window.onLoad = init();