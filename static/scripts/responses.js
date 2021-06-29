
function getBotResponse(input){
    switch(input) {
        case "student":
            return "jesteś studentem";
            break;
        case "pracownik":
            return "jesteś pracownikiem";
            break;
        default:
            return "Nie rozumiem";
    }
}