$(document).ready(function () {
      //Get data from api
      $.ajaxSetup({
        cache: false
      });
      // Saved addresses of all chanels in a array, to iterate over them.
      var address = ["https://wind-bow.glitch.me/twitch-api/streams/freecodecamp",
        "https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2",
        "https://wind-bow.glitch.me/twitch-api/streams/noobs2ninjas"
      ]
      // Saved id's of data divs, to select and parse data into
      var ids = ["#fcc", "#esl", "#ninja"]
      /*Starting a loop to get started retrieving data in JSON form, and sending 
      it to appropriate div */
      for (let i = 0; i < 3; i++) {
        $.getJSON(address[i], function (data) {
          //if channel is offline do this
          if (data.stream == null) {
            $(ids[i]).append("<p class='ml-5 font'>Offline<p>");
            // Add class off, to show this channel is offline
            $(ids[i]).addClass("off");
          }
          //if channel is online append it's status (if it is a video) or it's game to the specific div.
          else {
            $(ids[i]).append("<p class='ml-5 status'>" + data.stream.channel.status || data.stream.channel.game +
              "<p>");
            // Add class on, to show this channel is online
            $(ids[i]).addClass("on");
          }
        });
      }
      //Configuring all three buttons.
      $("#all").click(function () {
        $('#fcc,#esl,#ninja').show();
      });
      $("#online").click(function () {
        $(".off").hide();
        $(".on").show();
      });
      $("#offline").click(function () {
        $(".off").show();
        $(".on").hide();
      });

    });