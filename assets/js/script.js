var requestUrl = 'https://sentim-api.herokuapp.com/api/v1/ ';


var responseText = document.getElementById('response-text');
var inputText = document.getElementById('story');
var urText;
var len;
function sendReq(){

    responseText.textContent="";

    urText= inputText.value;
    console.log(urText);


    
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json','Accept':'application/json' },
    body: JSON.stringify({ text: urText })
    };
    fetch(requestUrl, requestOptions)
        .then(function (response) {
        console.log(response);
        return response.json();
        })
        .then(function (data) {
            console.log(data);
            len=data.sentences.length;

            for(let i=0;i<len;i++){

                var newSentence = document.createElement("span");

                if(data.sentences[i].sentiment.type=="positive"){
                    newSentence.setAttribute("class","pos");
                }else if (data.sentences[i].sentiment.type=="negative"){
                    newSentence.setAttribute("class","neg");
                }else{
                    newSentence.setAttribute("class","neut");
                }
                newSentence.textContent=data.sentences[i].sentence + " ";

                responseText.append(newSentence);




                
            }




          });


    


    



}



