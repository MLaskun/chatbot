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
    let firstMessage = "W czym mogę Ci pomóc?";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
    // document.getElementById("userInput").hidden = true;
}

firstBotMessage();

/*************** TABLICE OPCJI UŻYTKOWNIKA *********************/
const pierwsza = ["student", "pracownik"];

function userSelect(options) {
    options.forEach(selectionButton)
}

function selectionButton(option) {
    let userHtml = '<p class="userText"><button>' + option + '</button></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

userSelect(pierwsza);

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse(){
    let userText = $("#textInput").val();

    if(userText=="") userText = "Klikłem se entera";
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

function sendButton(){
    getResponse();
}

function iconButton(){
    buttonSendText("Lubię to!");
}

$("#textInput").keypress(function(e){
    if(e.which == 13){
        getResponse();
    }
});