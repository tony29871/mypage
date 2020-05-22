function toggle_backgound(value){
    if(value === 'dark'){
        value = 'light'
        document.querySelector('body').style.backgroundColor="black";
        document.querySelector('h1').style.backgroundColor = "rgb(169, 58, 105)";
        document.querySelector('h1').style.color = "whitesmoke";
        document.querySelector('.panel-footer').style.backgroundColor = "darkgreen";
        document.getElementById("right").style.backgroundColor = "gray";
        document.getElementById("right").style.color = "whitesmoke";
        document.getElementById("left").style.backgroundColor = "rgb(174, 174, 83)";
        return value;
    }
    else{
        value = "dark"
        document.querySelector('body').style.backgroundColor="white";
        document.querySelector('h1').style.backgroundColor = "lightpink";
        document.querySelector('h1').style.color = "gray";
        document.querySelector('.panel-footer').style.backgroundColor = "lightgreen";
        document.getElementById("right").style.backgroundColor = "whitesmoke";
        document.getElementById("right").style.color = "black";
        document.getElementById("left").style.backgroundColor = "rgb(255, 255, 140)";
        return value;
    }
}

function password(){
    let pw = prompt("비밀번호를 입력하세요",'');
    if(pw === '1234'){
        location.href="profile.html"
    }
    else{
        alert("비밀번호가 틀렸습니다");
    }
}