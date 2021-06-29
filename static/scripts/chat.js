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
    document.getElementById("userInput").hidden = true;
}

firstBotMessage();

/*************** TABLICE OPCJI UŻYTKOWNIKA *********************/
const initialArray = ["student", "pracownik"];
const student1 =["opcja1","opcja2","opcja3"];
const student2 =["opcja1","opcja2","opcja3"];
const student3 =["opcja1","opcja2","opcja3"];




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
    btnResponse(innerText);

    setTimeout(()=>{
       userSelect(getResponseText());
    }, 500)
    
}

function getResponseText() {
    let coll = document.getElementsByClassName("botText");
    let text = toArray(coll);
    let last = text.length-1;
    let resp = text[last].innerText;
    return resp;
}

function toArray(x) {
    for(var i = 0, a = []; i < x.length; i++)
        a.push(x[i]);

    return a
}

function removeButtons() {
    let elements = document.getElementsByClassName("btnOption");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function btnResponse(btnText) {
    setTimeout(()=>{
        getHardResponse(btnText);
    }, 500)
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