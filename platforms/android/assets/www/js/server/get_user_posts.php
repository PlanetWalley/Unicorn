<?php  
/*
    * update user's status
    * 这里要把信息写到数据库里
    */ 
    $user_id = $_POST["user_id"];
    
    $cons = mysqli_connect("localhost", "planetnd_yiyi", "4rfv5tgb", "planetnd_postit"); // 连接到数据库
    if (mysqli_connect_errno()){
        echo "Failed";
        exit;
    }
    
    // check user exist
    $query_content = "SELECT message FROM user_post WHERE user_id='$user_id'";
    $result = mysqli_query($cons, $query_content);
    if(!$result){
        echo "Failed";
        exit;
    }
    else{
        $o = array();
        while($v = mysqli_fetch_array($result, MYSQLI_NUM)){
            array_push($o, $v);
        }
        echo json_encode($o);
    }

?>