const MyRegex = /[0-9]{4,5}/gi;

//"show_matches": ["*://*.ebay.co.uk/*"]
function ebayListing()
{
  console.log("LOG: ebayListing() has run.");
  //Gets all the listing nodes
  var items = document.getElementsByClassName("s-item s-item__pl-on-bottom s-item--watch-at-corner");

  //Iterates through listing nodes
  for (let item of items) {

    //Stores titles of listing
    var title = item.querySelectorAll('[class^="s-item__title"]');

    //Stores list of IDs found in the title
    var foundIDs = title[title.length- 1].innerHTML.match(MyRegex);

    var infoBox = item.querySelector('[class*="s-item__subtitle"]');
    if(foundIDs != null)
    {
      foundIDs.forEach(function(item, index){
        if(item >= 2022 || item < 1980)
        {
          var DisplayID = document.createElement("a");
          DisplayID.className = "overlayElement";
          DisplayID.innerHTML = " "+item+" ";
          DisplayID.style.padding = "5px";
          DisplayID.style.backgroundClip = "padding-box";
          DisplayID.style.backgroundColor = "DarkSlateGrey";
          DisplayID.style.color = "white";
          DisplayID.style.border = "2px solid white";
          DisplayID.style.verticalAlign = "middle";
          DisplayID.href = "https://www.bricklink.com/v2/catalog/catalogitem.page?S=" + item;
          infoBox.appendChild(DisplayID);

          

          var img = document.createElement("img");
          img.setAttribute("src", browser.extension.getURL("icons/partoutNew.png"));
          img.width = "16";
          img.height = "16";
          console.log(img.outerHTML);
          
          var imgLink = document.createElement("a");
          imgLink.className = "overlayElement";
          imgLink.innerHTML = img.outerHTML;
          imgLink.style.verticalAlign = "middle";
          imgLink.style.padding = "2px";
          imgLink.style.backgroundClip = "padding-box";
          imgLink.style.border = "2px solid white";
          imgLink.href = "https://www.bricklink.com/catalogPOV.asp?itemType=S&itemNo="+ item + "&itemSeq=1&itemQty=1&breakType=M&itemCondition=N&incInstr=Y=";
          infoBox.appendChild(imgLink);

          var img = document.createElement("img");
          img.setAttribute("src", browser.extension.getURL("icons/partoutUsed.png"));
          img.width = "16";
          img.height = "16";
          console.log(img.outerHTML);
          
          var imgLink = document.createElement("a");
          imgLink.className = "overlayElement";
          imgLink.innerHTML = img.outerHTML;
          imgLink.style.verticalAlign = "middle";
          imgLink.style.padding = "2px";
          imgLink.style.backgroundClip = "padding-box";
          imgLink.style.border = "2px solid white";
          imgLink.href = "https://www.bricklink.com/catalogPOV.asp?itemType=S&itemNo="+ item + "&itemSeq=1&itemQty=1&breakType=M&itemCondition=U&incInstr=Y=";
          infoBox.appendChild(imgLink);


        }
      });
      
    }
  }
}

/* function bricksAndPieces()
{
  console.log("LOG: bricksAndPieces() has run.");
  //Gets all the listing nodes
  var cards = document.getElementsByClassName("c-card__content");

  //Iterates through listing nodes
  for (let card of cards) {
    var cardLines = card.childNodes;
    elementID = cardLines[4].lastChild.innerHTML;
    console.log(elementID); 

    var DisplayID = document.createElement("a");
    DisplayID.innerHTML = " "+elementID+" ";
    DisplayID.style.padding = "5px";
    DisplayID.style.backgroundClip = "padding-box";
    DisplayID.style.backgroundColor = "DarkSlateGrey";
    DisplayID.style.color = "white";
    DisplayID.style.border = "2px solid white";
    DisplayID.style.verticalAlign = "middle";
    DisplayID.href = "https://www.bricklink.com/v2/catalog/catalogitem.page?P=" + elementID;
    card.appendChild(DisplayID);

  }

  
}

bricksAndPieces(); */
ebayListing();