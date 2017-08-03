$.ajax({
  url: 'http://ip.jsontest.com/',
  data: {
    format: 'json'
  },
  error: function() {
    $('.placeholder').html('<p>An error has occurred</p>');
  },
  dataType: 'jsonp',
  success: function(data) {
    var $ip = $('<h1>').text(data.ip);
    
    $('.placeholder')
      .append($ip)
  },
  type: 'GET'
});
