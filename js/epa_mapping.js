//Atualização do EPA mapping para versão online
//Eu to fazendo mais coisa enquanto estou ocioso do que quando estou trabalhando 
var epaMappingBtn = $("<button/>").text("EPA MAPPING").attr("id","epaMappingBtn");//botão para criar estrutura
var epaMappingDiv = $("<div/>").attr("id","epaMappingDiv"); //divisor
var epaMappingFileL5KIn = $("<input/>").attr({"id":"epaMappingFilelL5K","name":"epaMappingFilelL5K","type":"file","accept":".L5K"}); //inserir arquivo L5K
var epaMappingReloadBtn = $("<button/>").text("VOLTAR").attr("class","reloadBtn"); //criar arquivo L5X
var epaMappingStringL5K = 'epaMappingStringL5K'; //transferir arquivo para string
var stringPosition = 0; //definir em que lugar na string está, começando pelo 0
var epaMappingArray = [
    ["Machine Code","Station","SubSystem","GSIP","Programs","Option Family","Family Address","IPs","Comments"]]

$(document).ready(function(){
    $("body").after(epaMappingDiv);//adiciona o botão e divisão
    $('#epaMappingDiv').append(epaMappingBtn);
    $("#epaMappingBtn").click(epaMappingFunction);//chama função quando o botão for clicado
    function epaMappingFunction(){
        $("button").hide(); //esconde os outros botoes
        createNewP('EPA MAPPING');
        $("body").append(epaMappingFileL5KIn);//Cria botoes
        $("body").append(epaMappingReloadBtn);//Cria botoes
    }
    $(document).on('change','#epaMappingFilelL5K', function(){
        fileLoadToString(this);
    });
    //############ Funcao que faz upload um arquivo e converte pra string ################
    function fileLoadToString(idXMLFile){
        let file = idXMLFile.files[0];
        fileL5KName = idXMLFile.files[0].name; //pega nome do arquivo
        let reader = new FileReader();
        reader.onload = function() {
            epaMappingStringL5K = reader.result; //copia arquivo pra string depois que carregou tudo
            //alert('Aguarde alguns segundos')
            callSequence(); //chama funcao main
        };
        reader.onerror = function(){
            console.log(reader.error);
        };
        reader.readAsText(file);
    };
    function callSequence (){
        let replaceString = epaMappingStringL5K;
        //contagem de rotinas
        let countRoutines = countOccurrences(replaceString,"ROUTINE S029_EPA_Mapping");// procura pelos carateres dentro de "", se mudar não funciona
        while (countRoutines > 0 ){
            //define onde começa
            let routineInit = 0;
            routineInit = findPosition(replaceString,"ROUTINE S029_EPA_Mapping",stringPosition);
            //define onde termina
            let routineEnd = 0;
            routineEnd = findPosition(replaceString,"END_ROUTINE",routineInit);
            let countModules = countOccurrences(replaceString,"#Machine Code:",routineInit,routineEnd);
            let modulePosition = routineInit;
            stringPosition = routineEnd;
            while (countModules>0){
                //Machine Code
                let moduleName = searchThis(replaceString,"#Machine Code:","$N",modulePosition)
                //set new position
                modulePosition = findPosition(replaceString,"#Machine Code:",modulePosition)+14;
                //Station
                let stationName = searchThis(replaceString,"#Station:","$N",modulePosition)
                //subSystem
                let subSystemName = searchThis(replaceString,"#SubSystem:","$N",modulePosition)
                //GSIP
                let gsipName = searchThis(replaceString,"#GSIP:","$N",modulePosition)
                //program
                let progName = searchThis(replaceString,"#Programs:","#Option",modulePosition)
                //Option Family:
                let optionName = searchThis(replaceString,"#Option Family:","$N",modulePosition)
                //Family Address
                let familyName = searchThis(replaceString,"#Family Address:","$N",modulePosition)
                //IPs
                let ipName = searchThis(replaceString,"#IPs:","$N",modulePosition)
                //
                let commeName = searchThis(replaceString,"#Comments:","$N",modulePosition)
                //createNewP(moduleName+stationName+subSystemName+gsipName+optionName+familyName+ipName+commeName);

                epaMappingArray.push([
                    moduleName,
                    stationName,
                    subSystemName,
                    gsipName,
                    progName,
                    optionName,
                    familyName,
                    ipName,
                    commeName]);
                countModules--
            }
            countRoutines--
        }
    // Create a new workbook
    let wb = XLSX.utils.book_new();
    // Convert the array to a worksheet
    let ws = XLSX.utils.aoa_to_sheet(epaMappingArray);
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "EPA_Mapping");
    // Write the workbook to a file
    XLSX.writeFile(wb, ('EPA_Mapping_'+fileL5KName+".xlsx"));
    };
    //Funcao para procurar na estrutura do EPA
    function searchThis(stringSearch,stringInit,stringEnd,position){
        let posInit = findPosition(stringSearch,stringInit,position)+stringInit.length;
        let posEnd = findPosition(stringSearch,stringEnd,posInit);
        let searchName = getSubstring(stringSearch,posInit,posEnd);
        let removeName = removeSubstring(searchName);
        return removeName;
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
    //############# funcao para testar nome
    function nameValid(string){
        //console.log(string.length)
        if (string == ''){
            return false;
        }else if ((string.length)<4){
            return false;
        }else if (string == '$Reserva'){
            return false;
        }else if (string.startsWith('z')){
            return false;
        }else{
            return true
        }
    };
    //Remove caracter indesejado
    function removeSubstring(mainString) {
        let result = mainString
        let subStrings = ['\\$N','    ','\t','#N','#','"'/*,'\\n','\\r\\n','\\r'*/]
        for (let i = 0; i < subStrings.length; i++) {
            let regex = new RegExp(subStrings[i], 'g');
            result = result.replace(regex, '');
        }
        return result
    }
});