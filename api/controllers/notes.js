const notes = {}

notes.getStories = (req, res) => {
  var count = 0;
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var reqs = new XMLHttpRequest();
  reqs.open('GET', 'https://time.com/', false);   
  reqs.send(null);  
  var arr;
  var title = [];
  var link = [];
  var ent={};
  var result = [];
  var reg1 = new RegExp("Latest Stories");
  var reg2 = new RegExp("title");
  var reg3 = new RegExp("=/(.*?)/>");
  var reg4 = new RegExp("/>(.*?)</");
  if(reqs.status == 200) {
    // console.log(reqs) 
    arr = reqs.responseText.split("\n");
   // console.log(arr)
    for(var i=0;i<arr.length;i++){
      if(arr[i].match(reg1)){
         // console.log(arr[i])
        for(var j=i;j<arr.length && count<6;j++){
          if(arr[j].match(reg2)){
             //console.log(arr[j])
            link.push(arr[j].match(reg3));
            title.push(arr[j].match(reg4));
           // console.log(arr[j])
          // console.log(title)
            count++;
          }

        }
       // console.log(arr[i])
        break;
      }
    }
  }
  // console.log('titles'+title);
 //console.log('links'+link);
// console.log(title.length)



for (var i = 1; i < title.length; i++) {
    ent={}
    ent.title = title[i].toString().split(",")[1];
    ent.link = "https://time.com/"+link[i].toString().split(",")[1]+"/";
    result.push(JSON.parse(JSON.stringify(ent)));
    //console.log(result)
  }
   //result = JSON.stringify(result);
   //console.log('Result',result);
  res.send(result);
}


module.exports = notes
