var enroll = document.getElementById("enroll");
enroll.onclick = function(e){         //e代表调用函数的onclick事件参数
    e.preventDefault();
    enroll.innerHTML = "GoodLuck For You";
    enroll.style.background = "#27cb8b";
    enroll.style.borderColor = "#27cb8b";
}