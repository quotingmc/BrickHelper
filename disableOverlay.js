console.log("clear called");
var elements = document.getElementsByClassName("overlayElement");
while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
}
