<?php  
/*
    * update user's status
    * 这里要把信息写到数据库里
    */ 
    $msg_id = uniqid();
    $user_id = $_POST["user_id"];
    $message = $_POST["message"];
    $longitude = $_POST["longitude"];
    $latitude = $_POST["latitude"];
    $region_lon = $_POST["region_lon"];
    $region_lat = $_POST["region_lat"];
    
    $cons = mysqli_connect("localhost", "planetnd_yiyi", "4rfv5tgb", "planetnd_postit"); // 连接到数据库
    if (mysqli_connect_errno()){
        echo "Failed";
        exit;
    }
    
    $query_content = "INSERT INTO user_post VALUES ('$msg_id', '$user_id', '$message', '$longitude', '$latitude', '$region_lon', '$region_lat');";
    $result = mysqli_query($cons, $query_content);
    if(!$result){
        echo "Failed";
        exit;
    }
    else{
        echo "Success";
    }
?>