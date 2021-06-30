class responseTree {
    constructor(response, responseArray, endOfTree = false, link){
        this.response = response;
        this.responseArray = responseArray;
        this.endOfTree = endOfTree;
        this.link = link;
    }
}

const student1 =["Mam problem z logowaniem","Mam problem z siecią eduroam","Chcę przeczytać FAQ (najczęściej zadawane pytania) studentów"];
const student11 = ["Zaczynamy od nowa"];
const student12 = ["Chcę się skontaktować z pracownikiem HelpDesk","Zaczynamy od nowa"];
const worker1 = ["Mam problem z zalogowaniem/dostępem do usług", "Chcę zmienić dane dostępne w wyszukiwarce pracowników", "Chcę przeczytać FAQ (najczęściej zadawane pytania) pracowników"];
const worker11 = ["Zaczynamy od nowa"];
const worker12 = ["Chcę skontaktować się z pracownikiem HelpDesk", "Zaczynamy od nowa"];
const candidate1 = ["Nie mogę się zalogować do SIR (system internetowej rekrutacji)","Chcę przeczytać FAQ (najczęściej zadawane pytania) kandydatów", "Zaczynamy od nowa"];
const candidate11 = ["Zaczynamy od nowa"];
const libr1 = ["FAQ (najczęściej zadawane pytania) biblioteczne", "Potrzebuję się skontaktować z pracownikiem","Zaczynamy od nowa"];
const libr11 = ["Zaczynamy od nowa"];
const libr12 = ["Potrzebuję się sokontaktować z pracownikiem", "Zaczynamy od nowa"];


function getBotResponse(input){
    switch(input) {
        case "studentem":
            response = new responseTree("Kliknij problem, który dotyczy Ciebie: ", student1);
            return response;
            break;
        case "Mam problem z logowaniem":
            response = new responseTree('Oto link do strony HelpDesk z dokładnymi instrukcjami krok po kroku radzenia sobie z tym problemem:', student11, 1, '<a href=https://helpdesk.prz.edu.pl/faq/studenci/nie-moge-sie-zalogowac-co-robic target=_blank>Strona HelpDesk - logowanie student</a>');
            return response;
            break;
        case "Mam problem z siecią eduroam":
            response = new responseTree('Oto link do strony HelpDesk z dokładnymi instrukcjami krok po kroku radzenia sobie z tym problemem:', student12, 1, '<a href=https://helpdesk.prz.edu.pl/faq/studenci/siec-bezprzewodowa-eduroam target=_blank>Strona HelpDesk - student WiFi</a>')
            return response;
            break;
        case "Chcę się skontaktować z pracownikiem HelpDesk":
            response = new responseTree("Poniższy link przekieruje Cię do formularza kontaktowego, wymagane będzie zalogowanie kontem w domenie @prz", student11, 1, '<a href=https://helpdesk.prz.edu.pl/faq/studenci/formularz target=_blank>Formularz zgłoszeniowy</a>');
            return response;
            break;
        case "Chcę przeczytać FAQ (najczęściej zadawane pytania) studentów":
            response = new responseTree("Proszę, to link do studenckiego FAQ:", student11, 1, '<a href=https://helpdesk.prz.edu.pl/faq/studenci target=_blank>FAQ studenta</a>');
            return response;
            break;

        case "pracownikiem":
            response = new responseTree("Kliknij problem, który dotyczy Ciebie:", worker1);
            return response;
            break;
        case "Mam problem z zalogowaniem/dostępem do usług":
            response = new responseTree('Oto link do strony HelpDesk z dokładnymi instrukcjami krok po kroku radzenia sobie z tym problemem:', worker11, 1, '<a href=https://helpdesk.prz.edu.pl/faq/pracownicy/problem-z-logowaniem-co-robic target=_blank>Strona HelpDesk - logowanie pracownik</a>');
            return response;
            break;
        case "Chcę zmienić dane dostępne w wyszukiwarce pracowników":
            response = new responseTree('Oto link do strony HelpDesk z dokładnymi instrukcjami krok po kroku radzenia sobie z tym problemem:', worker12, 1, '<a href=https://w.prz.edu.pl/wyszukiwarka/informacje.html#wyszukiwarka-dane target=_blank>Edycja danych dostępnych w wyszukiwarce pracowników</a>');
            return response;
            break;
        case "Chcę skontaktować się z pracownikiem HelpDesk":
            response = new responseTree("Poniższy link przekieruje Cię do formularza kontaktowego, wymagane będzie zalogowanie kontem w domenie @prz", worker11, 1, '<a href=https://helpdesk.prz.edu.pl/faq/pracownicy/formularz target=_blank>Formularz zgłoszeniowy</a>');
            return response;
            break;
        case "Chcę przeczytać FAQ (najczęściej zadawane pytania) pracowników":
            response = new responseTree("Proszę, to link do FAQ pracownika:", worker11, 1, '<a href=https://helpdesk.prz.edu.pl/faq/pracownicy target=_blank>FAQ pracownika</a>');
            return response;
            break;    

        case "kandydatem":
            response = new responseTree('Uwaga! Osoby przyjęte na I rok studiów powinny szukać informacji w kategorii Studenci</span></p><p class="botText"><span>Wybierz jedną z dostępnych opcji:',candidate1);
            return response;
            break;
        case "Nie mogę się zalogować do SIR (system internetowej rekrutacji)":
            response = new responseTree("Link do strony pomocy:", candidate11, 1, '<a href=https://helpdesk.prz.edu.pl/faq/kandydaci/nie-moge-zalogowac-sie-do-sir-co-robic target=_blank>Pomoc SIR</a>');
            return response;
            break;
        case "Chcę przeczytać FAQ (najczęściej zadawane pytania) kandydatów":
            response = new responseTree("Link do strony pomocy:", candidate11, 1, '<a href=https://helpdesk.prz.edu.pl/faq/kandydaci target=_blank>FAQ kandydata</a>');
            return response;
            break;

        case "użytkownikiem biblioteki":
            response = new responseTree("Jak Ci mogę pomóc?",libr1);
            return response;
            break;
        case "FAQ (najczęściej zadawane pytania) biblioteczne":
            response = new responseTree("Oto strona FAQ:",libr12,1,'<a href=https://helpdesk.prz.edu.pl/faq/biblioteka target=_blank>FAQ biblioteka</a>');
            return response;
            break;
        case "Potrzebuję się skontaktować z pracownikiem":
            response = new responseTree("Odnośnik do formularza:",libr11,1,'<a href=https://helpdesk.prz.edu.pl/faq/biblioteka/formularz target=_blank>Formularz zgłoszeniowy</a>');
            return response;
            break;






        case "Zaczynamy od nowa":
            response = new responseTree("Zaczynamy jeszcze raz, powiedz mi kim jesteś wybierając jedną z poniższych opcji:",initialArray);
            return response;
            break;

        default:
            return "Nie rozumiem";
    }
}