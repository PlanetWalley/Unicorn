
/*
    这个函数用来 初始化 passby_people 数据
    
                 * passby_people data 
                 * passby_people = {
                    "20141102": {user_id0: "Hello THere",
                                 user_id1: "Fuck me"}
                    "20141103": {user_id0: "I am handsome" 
                                 user_id1: "Yes I know"}
                 }

*/
var initPassbyPeopleData = function(){
    var passby_people = {};
    var user_id = window.localStorage["user_id"];
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth();
    var date = time.getDay();
    var date_string = year.toString() + month.toString() + date.toString(); 
    
    passby_people[date_string] = {};
    // 发送请求到服务器
    $.ajax({
        url: "http://planetwalley.com/postit_test/init_passby.php",
        async: false,
        type: "POST",
        // 下面是发送的信息
        data:{
              user_id: user_id,
              date: date_string}
    }).done(function(data){
        console.log("Fetch passby data from server:");
        console.log(data);
        if(data === "Failed"){
            console.log("Failed to post passby user data");
        }
        else{ // get data. 
            data = JSON.parse(data);
            for(var i = 0; i < data.length; i++){
                var passby_id = data[i][0];
                var passby_username = data[i][1];
                var passby_user_status = data[i][2];
                passby_people[date_string][passby_id] = passby_user_status;
                // add to list
                // add to list
                var content = "<li><h2>Passby: " + passby_username + "</h2>" + 
                              "<p>" + passby_user_status + "</p></li>";
                $("#passby_people_list").prepend(content);
            }
            // refresh listview
            $('#passby_people_list').listview('refresh');
        }
        return passby_people;
    }).fail(function(data){
        console.log("Failed to post passby user data");
        return passby_people;
    })
    return passby_people;
}