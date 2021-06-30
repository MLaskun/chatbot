var coll = document.getElementsByClassName("collapsible")

for(let i=0; i<coll.length; i++){
    coll[i].addEventListener("click",function(){
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if(content.style.maxHeight) {content.style.maxHeight = null;}
        else {content.style.maxHeight = content.scrollHeight + "px";}

    });
}

function getTime(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if(hours<10){
        hours = "0" + hours;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    
    let time = hours + ":" + minutes;
    return time;
}

function firstBotMessage() {
    let firstMessage = "Witaj, jestem botem Helpdesk, powiedz mi kim jesteś wybierając jedną z poniższych opcji: ";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
    document.getElementById("userInput").hidden = true;
}

firstBotMessage();

const initialArray = ["studentem", "pracownikiem", "kandydatem", "użytkownikiem biblioteki"];

function userSelect(options) {
    options.forEach(selectionButton)
}

function selectionButton(option) {
    let userHtml = '<p class="userText"><button onclick="getBtnText(this)" class="btnOption">' + option + '</button></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

userSelect(initialArray);

function getBtnText(btn) {
    let innerText = btn.textContent;
    removeButtons();
    buttonSendText(innerText);
    let botResponse = getHardResponse(innerText);
    if(botResponse.endOfTree){
        setTimeout(()=>{
            botSendText(botResponse.link);
        }, 500)
        setTimeout(()=>{
            userSelect(botResponse.responseArray);
        }, 500)
    }
    else {
        setTimeout(()=>{
            userSelect(botResponse.responseArray);
        }, 500)
    }
    
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// function getResponseText() {
//     let coll = document.getElementsByClassName("botText");
//     let text = toArray(coll);
//     let last = text.length-1;
//     let resp = text[last].innerText;
//     return resp;
// }

// function toArray(x) {
//     for(var i = 0, a = []; i < x.length; i++)
//         a.push(x[i]);

//     return a
// }

function removeButtons() {
    let elements = document.getElementsByClassName("btnOption");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse.response + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    return botResponse;
}

function btnResponse(btnText) {
    setTimeout(()=>{
        getHardResponse(btnText);
    }, 500)
}

function getResponse(){
    let userText = $("#textInput").val();

    if(userText=="") userText = "Ptaszek został kliknięty";
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(()=>{
        getHardResponse(userText);
    }, 500)
}

function buttonSendText(sampleText){
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function botSendText(sampleText) {
    let botHtml = '<p class="botText"><span>' + sampleText + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton(){
    getResponse();
}

function iconButton(){
    removeButtons();
    let firstMessage = "Zaczynamy jeszcze raz, powiedz mi kim jesteś wybierając jedną z poniższych opcji: ";
    let botHtml = '<p class="botText"><span>' + firstMessage + '</span></p>';
    $("#chatbox").append(botHtml);
    let time = getTime();

    $("#chat-timestamp").append(time);
    userSelect(initialArray);
}

$("#textInput").keypress(function(e){
    if(e.which == 13){
        getResponse();
    }
});