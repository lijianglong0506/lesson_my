var count = 1;
var container = document.getElementById('container');

function getUserAction() {   //这里没有用addEventListener 所以是 DOM 0
    container.innerHTML = count++;
};


container.onmousemove = getUserAction;



