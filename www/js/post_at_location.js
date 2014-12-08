// user change status
$("#post_btn").click(function(){
    var user_id = window.localStorage["user_id"];
    var message = $("#post_textarea").val();
    message = message.trim();
    console.log("Post at Location: " + message);
    if(message.length === 0) return;
    if(message.length >= 128){
        alert("Message too long...");
        return;
    }
    $.ajax({
            url: "http://planetwalley.com/postit_test/post_at_location.php",
            async: false,
            type: "POST",
            // 下面是发送的信息
            data:{user_id: user_id,
                  message: message,
                  longitude: LONGITUDE,
                  latitude: LATITUDE,
                  region_lon: calculateRegion(LONGITUDE),
                  region_lat: calculateRegion(LATITUDE)}
        }).done(function(data){
            if(data === "Failed"){
                alert("Failed to change status\nPlease try later");
                return;
            }
            else if (data === "Success"){
                alert("Message Posted");
                var content = "<li><p>"+message+"</p></li>";
                $("#profile_posts").prepend(content);
                $("#profile_posts").listview("refresh");
            }
            else{
                alert("Failed to post status\nPlease try later");
            }
        }).fail(function(data){
            alert("Failed");
        })
                              })