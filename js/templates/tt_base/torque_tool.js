//Rotina de teste - Apertadeira SCS
//Criador: Diogo Souza 2024-07-04
//##################################################
//Se for copiar, pelo menos deixa meu nome no criador, ja deixei tudo comentado pra voce entender
//Se apagar a CPU entra em STOP na hora
//Pode me achar aqui: https://www.linkedin.com/in/diogo-souza-clp
//Se ja tiver meu contato, pode chamar que eu ajudo no que precisar
//Coloca seu nome, porque teve que modificar e contato aqui em baixo, lembra de comentar no programa
//################## Revisoes ##########################
//Nada ainda porque o programa foi feito muito bem feito
//#######################################################################
$(document).ready(function(){ //para executar somente depois que o documento carregar, coisa do jquery
    //################## vars para input/output do L5X ################################
    var torqueToolCreateL5XBtn = $("<button/>").text("Criar L5X").attr({"id":"torqueToolCreateL5XBtn","class":"downloadBtn"}); //criar arquivo L5X
    var torqueToolXMLIn = $("<input/>").attr({"id":"torqueToolXMLFile","name":"torqueToolXMLFile","type":"file","accept":".L5X"}); //inserir arquivo L5X
    var torqueToolXMLString ='torqueToolXMLString'; //transferir arquivo para string
    var torqueToolLoadL5XBtn = $("<button/>").text("DOWNLOAD L5X base").attr("id","torqueToolLoadL5XBtn"); //carrega arquivo L5X
    //################ var estrutura ######################################
    var torqueToolBtn = $("<button/>").text("APERTADEIRA SCS - ROTINA TESTE").attr("id","torqueToolBtn");//botão para criar estrutura
    var torqueToolDiv = $("<div/>").attr("id","torqueToolDiv"); //divisor
    var torqueToolP = $("<p/>").attr("id","pFooter").text(""); //footer
    // Adicione mais Forms conforme precisar
    //Troque os nome e Ids dos Forms
    var torqueToolForm1 = $("<form/>").text("APERTADEIRA SCS - ROTINA TESTE").attr("id","torqueToolForm1");//Form1
    var torqueToolForm2 = $("<form/>").text("ANDON").attr("id","torqueToolForm2");//Form2
    var torqueToolForm3 = $("<form/>").text("KALARM").attr("id","torqueToolForm3");//Form3
    var torqueToolForm4 = $("<form/>").text("MANUAL INPUT").attr("id","torqueToolForm4");//Form4
    var torqueToolStuctCreate = false; //verificar criação estrutura do torque tool apenas uma vez
    //################ Lista de Vars ###########################
    //Adicione conforme tags do L5X
    //Faca alteracoes aqui, sempre em trios, replace, elemento de texto e input
    //Depois adicione dentro do Fomr e da function de replace
    //##########################################################
    //Machine Code
    var torqueToolReplaceMC = '12345';
    var torqueToolMCLabel = $("<label/>").text("Machine Code").attr("for","torqueToolMCode");//Machine Code label
    var torqueToolMCIn = $("<input/>").attr({"type":"text","id":"torqueToolMCode","name":"torqueToolMCode","value":torqueToolReplaceMC});//Machine Code Input
    //IP Address
    var torqueToolReplaceIP = '192,168,1,10';
    var torqueToolIPLabel = $("<label/>").text("IP Address").attr("for","torqueToolIP");// IP label
    var torqueToolIPIn = $("<input/>").attr({"type":"text","id":"torqueToolIP","name":"torqueToolIP","value":torqueToolReplaceIP});// IP input
    //STATION
    var torqueToolReplaceStation = '@001@';
    var torqueToolStationLbl = $("<label/>").text("STATION").attr("for","torqueToolStation");//Station label
    var torqueToolStationIn = $("<input/>").attr({"type":"text","id":"torqueToolStation","name":"torqueToolStation","value":torqueToolReplaceStation});//station input
    //LEP1 FAULT
    var torqueToolReplaceLep1Flt = '@002@';
    var torqueToolLep1FltLbl = $("<label/>").text("LEP1 FAULT").attr("for","torqueToolLep1Flt");//LEP1 FAULT label
    var torqueToolLep1FltIn = $("<input/>").attr({"type":"text","id":"torqueToolLep1Flt","name":"torqueToolLep1Flt","value":torqueToolReplaceLep1Flt});//LEP1 FAULT input
    //LEP1 WARNING
    var torqueToolReplaceLep1Wng = '@003@';
    var torqueToolLep1WngLbl = $("<label/>").text("LEP1 WARNING").attr("for","torqueToolLep1Wng");//LEP1 WARNING label
    var torqueToolLep1WngIn = $("<input/>").attr({"type":"text","id":"torqueToolLep1Wng","name":"torqueToolLep1Wng","value":torqueToolReplaceLep1Wng});//LEP1 WARNING input
    //LEP1 DELAY
    var torqueToolReplaceLep1Dly = '@004@';
    var torqueToolLep1DlyLbl = $("<label/>").text("LEP1 DELAY").attr("for","torqueToolLep1Dly");//LEP1 DELAY label
    var torqueToolLep1DlyIn = $("<input/>").attr({"type":"text","id":"torqueToolLep1Dly","name":"torqueToolLep1Dly","value":torqueToolReplaceLep1Dly});//LEP1 DELAY input
    //LEP2 BYPASS
    var torqueToolReplaceLep2Byp = '@005@';
    var torqueToolLep2BypLbl = $("<label/>").text("LEP2 BYPASS").attr("for","torqueToolLep2Byp");//LEP2 BYPASS label
    var torqueToolLep2BypIn = $("<input/>").attr({"type":"text","id":"torqueToolLep2Byp","name":"torqueToolLep2Byp","value":torqueToolReplaceLep2Byp});//LEP2 BYPASS input
    //LEP2 IO WARNING
    var torqueToolReplaceLep2IOWng = '@006@';
    var torqueToolLep2IOWngLbl = $("<label/>").text("LEP2 IO WARNING").attr("for","torqueToolLep2IOWng");//LEP2 IO WARNING label
    var torqueToolLep2IOWngIn = $("<input/>").attr({"type":"text","id":"torqueToolLep2IOWng","name":"torqueToolLep2IOWng","value":torqueToolReplaceLep2IOWng});//LEP2 IO WARNING input
    //KALARM COMM FAULT
    var torqueToolReplaceKalrmCommFlt = '@007@';
    var torqueToolKalrmCommFltLbl = $("<label/>").text("KALARM COMM FAULT").attr("for","torqueToolKalrmCommFlt");//KALARM COMM FAULT label
    var torqueToolKalrmCommFltIn = $("<input/>").attr({"type":"text","id":"torqueToolKalrmCommFlt","name":"torqueToolKalrmCommFlt","value":torqueToolReplaceKalrmCommFlt});//KALARM COMM FAULT input
    //KALARM COMM PORT
    var torqueToolReplaceKalrmCommPort = '@008@';
    var torqueToolKalrmCommPortLbl = $("<label/>").text("KALARM COMM PORT").attr("for","torqueToolKalrmCommPort");//KALARM COMM PORT label
    var torqueToolKalrmCommPortIn = $("<input/>").attr({"type":"text","id":"torqueToolKalrmCommPort","name":"torqueToolKalrmCommPort","value":torqueToolReplaceKalrmCommPort});//KALARM COMM PORT input
    //KALARM SPEED OR DUPLEX
    var torqueToolReplaceKalrmSpeed = '@009@';
    var torqueToolKalrmSpeedLbl = $("<label/>").text("KALARM SPEED OR DUPLEX").attr("for","torqueToolKalrmSpeed");//KALARM SPEED OR DUPLEX label
    var torqueToolKalrmSpeedIn = $("<input/>").attr({"type":"text","id":"torqueToolKalrmSpeed","name":"torqueToolKalrmSpeed","value":torqueToolReplaceKalrmSpeed});//KALARM SPEED OR DUPLEX input
    //KALARM STOP
    var torqueToolReplaceKalrmStop = '@010@';
    var torqueToolKalrmStopLbl = $("<label/>").text("KALARM STOP").attr("for","torqueToolKalrmStop");//KALARM STOP label
    var torqueToolKalrmStopIn = $("<input/>").attr({"type":"text","id":"torqueToolKalrmStop","name":"torqueToolKalrmStop","value":torqueToolReplaceKalrmStop});//KALARM STOP input
    //KALARM Bypass
    var torqueToolReplaceKalrmBypass = '@011@';
    var torqueToolKalrmBypassLbl = $("<label/>").text("KALARM BYPASS").attr("for","torqueToolKalrmBypass");//KALARM Bypass label
    var torqueToolKalrmBypassIn = $("<input/>").attr({"type":"text","id":"torqueToolKalrmBypass","name":"torqueToolKalrmBypass","value":torqueToolReplaceKalrmBypass});//KALARM Bypass input
    //KALARM Release
    var torqueToolReplaceKalrmRelease = '@012@';
    var torqueToolKalrmReleaseLbl = $("<label/>").text("KALARM RELEASE").attr("for","torqueToolKalrmRelease");//KALARM Release label
    var torqueToolKalrmReleaseIn = $("<input/>").attr({"type":"text","id":"torqueToolKalrmRelease","name":"torqueToolKalrmRelease","value":torqueToolReplaceKalrmRelease});//KALARM Release input
    //STATUS INHIBITED
    var torqueToolReplaceStatusInhi = 'Tracking_StatusInhibited.N';
    var torqueToolStatusInhiLbl = $("<label/>").text("STATUS INHIBITED").attr("for","torqueToolStatusInhi");//STATUS INHIBITED label
    var torqueToolStatusInhiIn = $("<input/>").attr({"type":"text","id":"torqueToolStatusInhi","name":"torqueToolStatusInhi","value":torqueToolReplaceStatusInhi});//STATUS INHIBITED input
    //CONVEYOR
    var torqueToolReplaceConveyor = 'Conveyor_TrackingName';
    var torqueToolConveyorLbl = $("<label/>").text("CONVEYOR").attr("for","torqueToolConveyor");//CONVEYOR label
    var torqueToolConveyorIn = $("<input/>").attr({"type":"text","id":"torqueToolConveyor","name":"torqueToolConveyor","value":torqueToolReplaceConveyor});//CONVEYOR input
    //MODEL CODE
    var torqueToolReplaceModelCode = 'StringTracking_Station_ModelCode';
    var torqueToolModelCodeLbl = $("<label/>").text("MODEL CODE").attr("for","torqueToolModelCode");//MODEL CODE label
    var torqueToolModelCodeIn = $("<input/>").attr({"type":"text","id":"torqueToolModelCode","name":"torqueToolModelCode","value":torqueToolReplaceModelCode});//MODEL CODE input
    //MODEL VARIANT
    var torqueToolReplaceModelVariant = 'StringTracking_Station_Variant';
    var torqueToolModelVariantLbl = $("<label/>").text("MODEL VARIANT").attr("for","torqueToolModelVariant");//MODEL VARIANT label
    var torqueToolModelVariantIn = $("<input/>").attr({"type":"text","id":"torqueToolModelVariant","name":"torqueToolModelVariant","value":torqueToolReplaceModelVariant});//MODEL VARIANT input
    //LINE TRACKING
    var torqueToolReplaceTracking = 'Line1_Tracking[0]';
    var torqueToolTrackingLbl = $("<label/>").text("LINE TRACKING").attr("for","torqueToolTracking");//LINE TRACKING label
    var torqueToolTrackingIn = $("<input/>").attr({"type":"text","id":"torqueToolTracking","name":"torqueToolTracking","value":torqueToolReplaceTracking});//LINE TRACKING input
    //##############################################################
    //################## Adiciona no Body ##########################
    //##############################################################
    //Adiciona na tela Principal
    $("body").after(torqueToolDiv);//adiciona o botão e divisão
    $("#torqueToolDiv").append(torqueToolBtn,torqueToolLoadL5XBtn);//adiciona o botão e divisão
    $("#torqueToolBtn").click(torqueToolFunction);//chama função quando o botão for clicado
   //############## cria estrutura para torque tool #########################
    function torqueToolFunction(){
        if (torqueToolStuctCreate == false) { //verificação para criar apenas uma vez
            $("button").hide(); //esconde os outros botoes
            //Adicione mais Forms se precisar
            $("body").append(torqueToolXMLIn);//Cria botoes
            $("body").append(torqueToolForm1);//Form1
            $("body").append("<br/>",torqueToolForm2);//Form2
            $("body").append("<br/>",torqueToolForm3);//Form3
            $("body").append("<br/>",torqueToolForm4);//Form3
            //Cria botoes
            $("body").append(torqueToolP);//Cria P
            $("body").append(torqueToolCreateL5XBtn);//Cria botoes

            //Form1 - Machine Code e IP - Adicione conforme precisar
            $("#torqueToolForm1").append("<br/>",torqueToolMCLabel,"<br/>",torqueToolMCIn);
            $("#torqueToolForm1").append("<br/>",torqueToolIPLabel,"<br/>",torqueToolIPIn);
            //Form2 - Andon 
            $("#torqueToolForm2").append("<br/>",torqueToolStationLbl,"<br/>",torqueToolStationIn);
            $("#torqueToolForm2").append("<br/>",torqueToolLep1FltLbl,"<br/>",torqueToolLep1FltIn);
            $("#torqueToolForm2").append("<br/>",torqueToolLep1WngLbl,"<br/>",torqueToolLep1WngIn);
            $("#torqueToolForm2").append("<br/>",torqueToolLep1DlyLbl,"<br/>",torqueToolLep1DlyIn);
            $("#torqueToolForm2").append("<br/>",torqueToolLep2BypLbl,"<br/>",torqueToolLep2BypIn);
            $("#torqueToolForm2").append("<br/>",torqueToolLep2IOWngLbl,"<br/>",torqueToolLep2IOWngIn);
            //Form 3 - Kalarm
            $("#torqueToolForm3").append("<br/>",torqueToolKalrmCommFltLbl,"<br/>",torqueToolKalrmCommFltIn);
            $("#torqueToolForm3").append("<br/>",torqueToolKalrmCommPortLbl,"<br/>",torqueToolKalrmCommPortIn);
            $("#torqueToolForm3").append("<br/>",torqueToolKalrmSpeedLbl,"<br/>",torqueToolKalrmSpeedIn);
            $("#torqueToolForm3").append("<br/>",torqueToolKalrmStopLbl,"<br/>",torqueToolKalrmStopIn);
            $("#torqueToolForm3").append("<br/>",torqueToolKalrmBypassLbl,"<br/>",torqueToolKalrmBypassIn);
            $("#torqueToolForm3").append("<br/>",torqueToolKalrmReleaseLbl,"<br/>",torqueToolKalrmReleaseIn);
            //Form 4 - tags manuais
            $("#torqueToolForm4").append("<br/>",torqueToolStatusInhiLbl,"<br/>",torqueToolStatusInhiIn);
            $("#torqueToolForm4").append("<br/>",torqueToolConveyorLbl,"<br/>",torqueToolConveyorIn);
            $("#torqueToolForm4").append("<br/>",torqueToolModelCodeLbl,"<br/>",torqueToolModelCodeIn);
            $("#torqueToolForm4").append("<br/>",torqueToolModelVariantLbl,"<br/>",torqueToolModelVariantIn);
            $("#torqueToolForm4").append("<br/>",torqueToolTrackingLbl,"<br/>",torqueToolTrackingIn);
            //criar apenas uma vez a estrutura
            torqueToolStuctCreate = true;
        };
    };
    //############# Carrega arquivo L5X  #####################################
    $(document).on('change','#torqueToolXMLFile', function() {
        torqueToolLoadString(this);
        });
    //############ Funcao que faz upload um arquivo e converte pra string ################
    function torqueToolLoadString(idXMLFile) {
        let file = idXMLFile.files[0];
        let reader = new FileReader();
        reader.onload = function() {
            torqueToolXMLString = reader.result;
        };
        reader.onerror = function() {
            console.log(reader.error);
        };
        reader.readAsText(file);
    };
    //############ Funcao que seleciona um arquivo e converte pra string ################
    $(document).on('click','#torqueToolLoadL5XBtn',torqueToolLoadL5X);
    //#########
    async function torqueToolLoadL5X(){
        downloadStringToFile(torquetoolL5XBase,'torqueToolBase.L5X');
    };
    //########### botão para altera arquivos L5X conforme mudanças#######################
    $(document).on('click','#torqueToolCreateL5XBtn',torqueToolReplace);
    //############ Function para trocar as tags no L5x##############################
    // modifique conforme tags do L5X
    function torqueToolReplace (){
        let stringRplc = torqueToolXMLString;
        //Replace torqueToolReplaceMC
        stringRplc = replaceAll(stringRplc, torqueToolReplaceMC, $('#torqueToolMCode').val());
        //Replace torqueToolReplaceIP
        stringRplc = replaceAll(stringRplc, torqueToolReplaceIP, $('#torqueToolIP').val());
        //STATION
        stringRplc = replaceAll(stringRplc, torqueToolReplaceStation, $('#torqueToolStation').val());
        //LEP1 FAULT
        stringRplc = replaceAll(stringRplc, torqueToolReplaceLep1Flt, $('#torqueToolLep1Flt').val());
        //LEP1 WARNING
        stringRplc = replaceAll(stringRplc, torqueToolReplaceLep1Wng, $('#torqueToolLep1Wng').val());
        //LEP1 DELAY
        stringRplc = replaceAll(stringRplc, torqueToolReplaceLep1Dly, $('#torqueToolLep1Dly').val());
        //LEP2 BYPASS
        stringRplc = replaceAll(stringRplc, torqueToolReplaceLep2Byp, $('#torqueToolLep2Byp').val());
        //LEP2 IO WARNING
        stringRplc = replaceAll(stringRplc, torqueToolReplaceLep2IOWng, $('#torqueToolLep2IOWng').val());
        //KALARM COMM FAULT
        stringRplc = replaceAll(stringRplc, torqueToolReplaceKalrmCommFlt, $('#torqueToolKalrmCommFlt').val());
        //KALARM COMM PORT
        stringRplc = replaceAll(stringRplc, torqueToolReplaceKalrmCommPort, $('#torqueToolKalrmCommPort').val());
        //KALARM SPEED OR DUPLEX
        stringRplc = replaceAll(stringRplc, torqueToolReplaceKalrmSpeed, $('#torqueToolKalrmSpeed').val());
        //KALARM STOP
        stringRplc = replaceAll(stringRplc, torqueToolReplaceKalrmStop, $('#torqueToolKalrmStop').val());
        //KALARM Bypass
        stringRplc = replaceAll(stringRplc, torqueToolReplaceKalrmBypass, $('#torqueToolKalrmBypass').val());
        //KALARM Release
        stringRplc = replaceAll(stringRplc, torqueToolReplaceKalrmRelease, $('#torqueToolKalrmRelease').val());
        //Replace STATUS INHIBITED
        stringRplc = replaceAll(stringRplc, torqueToolReplaceStatusInhi, $('#torqueToolStatusInhi').val());
        //CONVEYOR
        stringRplc = replaceAll(stringRplc, torqueToolReplaceConveyor, $('#torqueToolConveyor').val());
        //MODEL CODE
        stringRplc = replaceAll(stringRplc, torqueToolReplaceModelCode, $('#torqueToolModelCode').val());
        //MODEL VARIANT
        stringRplc = replaceAll(stringRplc, torqueToolReplaceModelVariant, $('#torqueToolModelVariant').val());
        //LINE TRACKING
        stringRplc = replaceAll(stringRplc, torqueToolReplaceTracking, $('#torqueToolTracking').val());

        let filename = ('torque_tool_' + $('#torqueToolMCode').val() + '_routine.L5X');
        downloadStringToFile(stringRplc,filename);
    };
});