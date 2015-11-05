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
          var month = d.getMonth() + 1;
          var day = d.getDate();
          var date = month + '/' + day;
          $('#feed').append('<li><a href="'+entry.link+'" target="_blank"><span class="feed-date">'+date+'</span><span class="feed-title">'+entry.title+'</span></a></li>');
        }
      }
    });
  }
  google.setOnLoadCallback(initialize);
}
window.onLoad = init();