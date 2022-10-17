window.onload = pageLoad;

function pageLoad(){
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", "cloth.json"); 
    xhr.onload = function() { 
        var jsondata = JSON.parse(xhr.responseText);
        console.log(jsondata);
        showData(jsondata);
    }; 
    xhr.onerror = function() { alert("ERROR!"); }; 
    xhr.send();
}
 
function showData(layer){
	console.log(Object.keys(layer).length);
    var show = document.querySelectorAll("#layer div");
    var keys = Object.keys(layer);
    for(var i =0; i< keys.length;i++){     
        var img = document.createElement("img");
        var temp = document.createElement("p");
        temp.innerHTML = layer[keys[i]].brandname + " " + layer[keys[i]].price;
        img.src = layer[keys[i]].pic;
        show[i].appendChild(img);    
        show[i].appendChild(temp);
    }
}

