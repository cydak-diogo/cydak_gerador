// Eai, isso aqui foi feito com muito odio e tristeza
// sei que alguem da Durr fez algo parecido no excel, mas era pra pintura
// valeu pela ideia, usei de base pra fazer esse
// esse aqui foi feito pro LEP, mas deve dar pra usar em outras areas
// está bem comentado, da pra entender tranquilo
// Valeu pela atenção
//
// Criado por Diogo Souza
// Precisar de ajuda é só me chamar
// 
//########### VARiaveis ##############
var alarmChangeBtn = $("<button/>").text("CORREÇÃO DE ALARMES").attr("id","alarmChangeBtn");//botão para criar estrutura
var alarmChangeDiv = $("<div/>").attr("id","alarmChangeDiv"); //divisor
var fileL5XIn = $("<input/>").attr({"id":"filelL5K","name":"filelL5K","type":"file","accept":".L5K"}); //inserir arquivo L5X
var stringL5K = 'stringL5K'; //transferir arquivo para string
var fileL5KName = 'name.L5K' //nome do arquivo L5K
var positionStatus = 0; //definir em que lugar na string está
var initialAlarm = 50;
var finalAlarm = 899;
var alarmChangeReloadBtn = $("<button/>").text("VOLTAR").attr("class","reloadBtn"); //criar arquivo L5X
   
//############ para executar somente depois que o documento carregar, coisa do jquery
$(document).ready(function(){
    //############ adiciona o botão e divisão

    $("body").after(alarmChangeDiv);//adiciona o botão e divisão
    $('#alarmChangeDiv').append(alarmChangeBtn);
    $("#alarmChangeBtn").click(alarmChangeFunction);//chama função quando o botão for clicado

    function alarmChangeFunction(){
        $("button").hide(); //esconde os outros botoes
        createNewP('Valor inicial dos Alarms: '+ initialAlarm);
        createNewP('Valor maximo dos Alarms: '+ finalAlarm);
        $("body").append(fileL5XIn);//Cria botoes
        $("body").append(alarmChangeReloadBtn);//Cria botoes
    }
    //############ Carregar arquivo L5K
    $(document).on('change','#filelL5K', function(){
        fileLoadToString(this);
    });
    //############ Funcao que faz upload um arquivo e converte pra string ################
    function fileLoadToString(idXMLFile){
        let file = idXMLFile.files[0];
        fileL5KName = idXMLFile.files[0].name; //pega nome do arquivo
        let reader = new FileReader();
        reader.onload = function() {
            stringL5K = reader.result; //copia arquivo pra string depois que carregou tudo
            alert('Aguarde alguns segundos')
            callSequence(); //chama funcao main
        };
        reader.onerror = function(){
            console.log(reader.error);
        };
        reader.readAsText(file);
    };
    //--------------------------------------------------------------------------------
    //############ Chamada das functions em sequencia
    function callSequence (){
        var replaceString = stringL5K;
        //contagem de programas
        let countPrograms = countOccurrences(replaceString,"	PROGRAM ");// procura pelos carateres dentro de "", se mudar não funciona
        positionStatus = findPosition(replaceString,"	PROGRAM ",0);
        //Executa para todos os programas
        while (countPrograms > 0 ){
            //define onde começa o programa
            let progInit = 0; 
            progInit = findPosition(replaceString,"	PROGRAM ",positionStatus) + 9;
            //define onde termina o nome do programa
            let progNameEnd = 0;
            progNameEnd = findPosition(replaceString," (",progInit);
            //pegar nome do programa
            let progName = getSubstring(replaceString,progInit,progNameEnd);
            createNewP(progName);
            //definir posição para começar apos o nome do programa
            positionStatus = progNameEnd +1;
            //definir até onde vai todo a estrutura do programa - limitar as rotinas
            let progEnd = findPosition(replaceString,"	END_PROGRAM",positionStatus);
            //contar quantas rotinas dentro do porgrama
            let countRoutine = countOccurrences(replaceString,"	ROUTINE ",positionStatus,progEnd);
            let positionRoutine = positionStatus;
            //reset valor inicial
            let alarmNum = initialAlarm;
            while (countRoutine > 0 ) {
                //define onde começa o nome da rotina
                let routineInit = findPosition(replaceString,"	ROUTINE ",positionRoutine) + 9;
                //define onde termina o nome do programa
                let routineNameEnd = findPosition(replaceString," ",routineInit);
                positionRoutine = routineNameEnd;
                //define onde termina a estrutura da rotina
                let routineEnd = findPosition(replaceString,"	END_ROUTINE",positionRoutine);
                //pegar nome da rotina
                let routineName = getSubstring(replaceString,routineInit,routineNameEnd);
                //Verifica se o nome da rotina é valido
                let routineNameValid = nameValid(routineName);
                //Finaliza se tiver muito alarm
                if (alarmNum > finalAlarm){
                    break
                };
                if (routineNameValid== true){
                    //contagem de Alarms nos comentarios
                    let countCommAlarms = countOccurrences(replaceString,"<Alarm[",positionRoutine,routineEnd);
                    //contagem de kalarms nalogica
                    let countKalarms = countOccurrences(replaceString,",kAlarm[",positionRoutine,routineEnd);
                    //escreve rotinas onde foram encontrados alarms
                    if ((countCommAlarms > 0) || (countKalarms > 0)){
                        createNewP('--' + routineName + ' Alarms: ' + countCommAlarms + ' Kalarms: ' + countKalarms);
                        //correção
                        let positionAlarm = positionRoutine;
                        let positionKAlarm = positionRoutine;
                        while ((countCommAlarms > 0 ) || (countKalarms > 0 )){
                            //define onde começa o numero do alarm
                            let commAlarmInit = findPosition(replaceString,"<Alarm[",positionAlarm) + 7;
                            //define onde termina o numero do alarm
                            let commAlarmEnd = findPosition(replaceString,"]",commAlarmInit);
                            positionAlarm = commAlarmEnd;
                            //pega numero do alarme
                            let alarmNumber = getSubstring(replaceString,commAlarmInit,commAlarmEnd);
                            //sobreescreve
                            replaceString = replaceSubstring(replaceString,commAlarmInit,commAlarmEnd,alarmNum);
                            //Kalarm
                            let kAlarmInit = findPosition(replaceString,",kAlarm[",positionKAlarm) + 8;
                            //define onde termina o numero do alarm
                            let kAlarmEnd = findPosition(replaceString,"]",kAlarmInit);
                            positionKAlarm = kAlarmEnd;
                            let kalarmNumber = getSubstring(replaceString,kAlarmInit,kAlarmEnd);
                            //Troca kalarm
                            replaceString = replaceSubstring(replaceString,kAlarmInit,kAlarmEnd,alarmNum);
                            
                            if ((kAlarmInit - commAlarmInit) < 50) {
                                //alert('Problema no kalarm ' + kalarmNumber+' da rotina ' + routineName+' no programa '+ progName);
                                createNewP('######################################## ERRO')
                            };
                            //Verifica diferença entre comentario e programa
                            if (alarmNumber == kalarmNumber){
                                //createNewP('Alarm: '+alarmNumber+' -kalarm: '+ kalarmNumber +'- Novo: '+alarmNum);
                                
                            }else{
                                createNewP('## Diferença Alarm: '+alarmNumber+' -kalarm: '+ kalarmNumber +'- Novo: '+alarmNum);
                            }
                            alarmNum++;
                            countCommAlarms--;
                            countKalarms--;
                            //Finaliza se tiver muito alarm
                            if (alarmNum > finalAlarm){
                                createNewP('Numero de Alarms muito grande');
                                break
                            };
                        };
                    };
                };
                //diminui contagem das rotinas
                countRoutine--;
            };
            createNewP('-----------------------------------------');
            //diminui contagem dos programas
            countPrograms--;
        }
        var userResponse = confirm('Fazer download do arquivo ?');
        if (userResponse == true) {
            downloadL5K(replaceString,('New_'+fileL5KName));
        };
    };
    //--------------------------------------------------------------------------------
    //Create a <p> e coloca no body
    function createNewP(textP){    
        var p = $('<p>').text(textP);
        $('body').append(p);
    };
    //############ Funcao para contar quantas vezes encontra determinada string
    function countOccurrences(str, subStr, startPos, endPos){
        let count = 0;
        startPos = startPos !== undefined ? startPos : 0;
        endPos = endPos !== undefined ? endPos : str.length - 1;
        let pos = str.indexOf(subStr, startPos);
        while (pos !== -1 && pos <= endPos) {
            count++;
            pos = str.indexOf(subStr, pos + 1);
        }
        return count;
    };
    //########## Funcao para encontrar a posicao de uma string dentro da outra
    function findPosition(str, subStr, startPos) {
        let position = str.indexOf(subStr, startPos);
        if (position !== -1) {
            return position;
        } else {
            return 0;
        }
    };
    //######### Retorna uma string inserindo o inicio e final dela 
    function getSubstring(str, startPos, endPos){
        return str.substring(startPos, endPos);
    };
    //######### replace a string knowing where it position
    function replaceSubstring(str, startPos, endPos, newString){
        let slice01 = str.slice(0, startPos);
        let slice02 = str.slice(endPos);
        return slice01 + newString + slice02;
    };
    //############# funcao para testar nome do programa
    function nameValid(string){
        if (string == ''){
            return false;
        }else if (string == 'CallRoutines'){
            return false;
        }else if (string == '$Reserva'){
            return false;
        }else if (string.startsWith('z')){
            return false;
        }else{
            return true
        }
    };
    //########## Função para fazer download do arquivo L5X #############################
    function downloadL5K(stringXMLDown,filename){
        let bb = new Blob([stringXMLDown], {type: 'text/plain'});
        let pom = document.createElement('a');
        pom.setAttribute('href', window.URL.createObjectURL(bb));
        pom.setAttribute('download', filename);
        pom.click();
    };
}); 
