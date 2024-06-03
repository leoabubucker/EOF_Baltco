var accomplishments = document.getElementsByClassName("accomplishment-content");
var idx = 0;
accomplishments.item(0).style.display = "unset";

function nextAccomplishment(){
    accomplishments.item(idx).style.display = "none";
    if(idx < accomplishments.length - 1){
        accomplishments.item(idx+1).style.display = "unset";
        idx++;
    }
    else{
        accomplishments.item(0).style.display = "unset";
        idx = 0;
    }
}

function prevAccomplishment(){
    accomplishments.item(idx).style.display = "none";
    if(idx > 0){
        accomplishments.item(idx-1).style.display = "unset";
        idx--;
    }
    else{
        accomplishments.item(accomplishments.length - 1).style.display = "unset";
        idx = accomplishments.length - 1;
    }
}