// retrieve the value contained in the node t from the DOM exposed by d
// Returns the text data for specific tag (single tag)
function GetData(root, tag)  {   
   return (root.getElementsByTagName(tag).item(0).firstChild.data); 
}

function GetRootName(root)  {   
  return (root.nodeName);
}

// Returns the value for the root element
function GetRootData(root)  {   
   return (root.childNodes.item(0).nodeValue);  
}

//Returns array of strings with the given tag 
function GetList(root,tag){
      var tagArray = [];
      for (var i = 0; i < root.getElementsByTagName(tag).length; i++) {
            var child = root.getElementsByTagName(tag).item(i).firstChild.data;
            tagArray.push(child);
            }
      return tagArray;
}

function GetElement(list,index){
    return list[index];
}

function splitData(str){
   var pattern = /\W+/;
   return str.split(" ");
}
      
      

