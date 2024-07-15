//Rotina - Apertadeira SCS conveyor synchronous
//javascript: Diogo Souza 2024-07-15
//L5X: Anderson das Neves Oliveira 2024-07-11
//################## Revisoes ##########################
//Criado usando o programa de testes como base, modificado para transportador synchronous e L5X de hardware
//#######################################################################
$(document).ready(function(){ //para executar somente depois que o documento carregar, coisa do jquery
    //################## vars para input/output do L5X ################################
    var torqueToolSyncCreateL5XBtn = $("<button/>").text("Criar L5X").attr({"id":"torqueToolSyncCreateL5XBtn","class":"downloadBtn"}); //criar arquivo L5X
    //var torqueToolSyncXMLIn = $("<input/>").attr({"id":"torqueToolSyncXMLFile","name":"torqueToolSyncXMLFile","type":"file","accept":".L5X"}); //inserir arquivo L5X
    var torqueToolSyncXMLString ='torqueToolSyncXMLString'; //transferir arquivo para string
    //var torqueToolSyncLoadL5XBtn = $("<button/>").text("DOWNLOAD L5X base").attr("id","torqueToolSyncLoadL5XBtn"); //carrega arquivo L5X
    //################ var estrutura ######################################
    var torqueToolSyncBtn = $("<button/>").text("APERTADEIRA SYNCHRONOUS SCS").attr("id","torqueToolSyncBtn");//botão para criar estrutura
    var torqueToolSyncDiv = $("<div/>").attr("id","torqueToolSyncDiv"); //divisor
    var torqueToolSyncP = $("<p/>").attr("id","TTFooter").text(""); //footer
    // Adicione mais Forms conforme precisar
    //Troque os nome e Ids dos Forms
    var torqueToolSyncForm1 = $("<form/>").text("APERTADEIRA SYNCHRONOUS SCS").attr("id","torqueToolSyncForm1");//Form1
    var torqueToolSyncForm2 = $("<form/>").text("ANDON").attr("id","torqueToolSyncForm2");//Form2
    var torqueToolSyncForm3 = $("<form/>").text("KALARM").attr("id","torqueToolSyncForm3");//Form3
    var torqueToolSyncForm4 = $("<form/>").text("MANUAL INPUT").attr("id","torqueToolSyncForm4");//Form4
    var torqueToolSyncStuctCreate = false; //verificar criação estrutura do torque tool apenas uma vez
    //################ Lista de Vars ###########################
    //Adicione conforme tags do L5X
    //Faca alteracoes aqui, sempre em trios, replace, elemento de texto e input
    //Depois adicione dentro do Fomr e da function de replace
    //##########################################################
    //Machine Code
    var torqueToolSyncReplaceMC = '18524'; //ok
    var torqueToolSyncMCLabel = $("<label/>").text("Machine Code").attr("for","torqueToolSyncMCode");//Machine Code label
    var torqueToolSyncMCIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncMCode","name":"torqueToolSyncMCode","value":torqueToolSyncReplaceMC});//Machine Code Input
    //IP Address
    var torqueToolSyncReplaceIP = '192.168.2.110'; //ok
    var torqueToolSyncIPLabel = $("<label/>").text("IP Address").attr("for","torqueToolSyncIP");// IP label
    var torqueToolSyncIPIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncIP","name":"torqueToolSyncIP","value":torqueToolSyncReplaceIP});// IP input
    //STATION
    var torqueToolSyncReplaceStation = '#52';//ok
    var torqueToolSyncStationLbl = $("<label/>").text("STATION").attr("for","torqueToolSyncStation");//Station label
    var torqueToolSyncStationIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncStation","name":"torqueToolSyncStation","value":torqueToolSyncReplaceStation});//station input
    //LEP1 FAULT
    var torqueToolSyncReplaceLep1Flt = '#11';
    var torqueToolSyncLep1FltLbl = $("<label/>").text("LEP1 FAULT").attr("for","torqueToolSyncLep1Flt");//LEP1 FAULT label
    var torqueToolSyncLep1FltIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncLep1Flt","name":"torqueToolSyncLep1Flt","value":torqueToolSyncReplaceLep1Flt});//LEP1 FAULT input
    //LEP1 WARNING
    var torqueToolSyncReplaceLep1Wng = '#19';//ok
    var torqueToolSyncLep1WngLbl = $("<label/>").text("LEP1 WARNING").attr("for","torqueToolSyncLep1Wng");//LEP1 WARNING label
    var torqueToolSyncLep1WngIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncLep1Wng","name":"torqueToolSyncLep1Wng","value":torqueToolSyncReplaceLep1Wng});//LEP1 WARNING input
    //LEP1 DELAY
    var torqueToolSyncReplaceLep1Dly = '#7';
    var torqueToolSyncLep1DlyLbl = $("<label/>").text("LEP1 DELAY").attr("for","torqueToolSyncLep1Dly");//LEP1 DELAY label
    var torqueToolSyncLep1DlyIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncLep1Dly","name":"torqueToolSyncLep1Dly","value":torqueToolSyncReplaceLep1Dly});//LEP1 DELAY input
    //LEP2 BYPASS
    var torqueToolSyncReplaceLep2Byp = '#10';//ok
    var torqueToolSyncLep2BypLbl = $("<label/>").text("LEP2 BYPASS").attr("for","torqueToolSyncLep2Byp");//LEP2 BYPASS label
    var torqueToolSyncLep2BypIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncLep2Byp","name":"torqueToolSyncLep2Byp","value":torqueToolSyncReplaceLep2Byp});//LEP2 BYPASS input
    //LEP2 IO WARNING
    var torqueToolSyncReplaceLep2IOWng = '#9';//ok
    var torqueToolSyncLep2IOWngLbl = $("<label/>").text("LEP2 IO WARNING").attr("for","torqueToolSyncLep2IOWng");//LEP2 IO WARNING label
    var torqueToolSyncLep2IOWngIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncLep2IOWng","name":"torqueToolSyncLep2IOWng","value":torqueToolSyncReplaceLep2IOWng});//LEP2 IO WARNING input
    //KALARM COMM FAULT
    var torqueToolSyncReplaceKalrmCommFlt = '#244';//ok
    var torqueToolSyncKalrmCommFltLbl = $("<label/>").text("KALARM COMM FAULT").attr("for","torqueToolSyncKalrmCommFlt");//KALARM COMM FAULT label
    var torqueToolSyncKalrmCommFltIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncKalrmCommFlt","name":"torqueToolSyncKalrmCommFlt","value":torqueToolSyncReplaceKalrmCommFlt});//KALARM COMM FAULT input
    //KALARM COMM PORT
    var torqueToolSyncReplaceKalrmCommPort = '#245';//ok
    var torqueToolSyncKalrmCommPortLbl = $("<label/>").text("KALARM COMM PORT").attr("for","torqueToolSyncKalrmCommPort");//KALARM COMM PORT label
    var torqueToolSyncKalrmCommPortIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncKalrmCommPort","name":"torqueToolSyncKalrmCommPort","value":torqueToolSyncReplaceKalrmCommPort});//KALARM COMM PORT input
    //KALARM SPEED OR DUPLEX
    var torqueToolSyncReplaceKalrmSpeed = '#246';//ok
    var torqueToolSyncKalrmSpeedLbl = $("<label/>").text("KALARM SPEED OR DUPLEX").attr("for","torqueToolSyncKalrmSpeed");//KALARM SPEED OR DUPLEX label
    var torqueToolSyncKalrmSpeedIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncKalrmSpeed","name":"torqueToolSyncKalrmSpeed","value":torqueToolSyncReplaceKalrmSpeed});//KALARM SPEED OR DUPLEX input
    //KALARM STOP
    var torqueToolSyncReplaceKalrmStop = '#247';//ok
    var torqueToolSyncKalrmStopLbl = $("<label/>").text("KALARM STOP").attr("for","torqueToolSyncKalrmStop");//KALARM STOP label
    var torqueToolSyncKalrmStopIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncKalrmStop","name":"torqueToolSyncKalrmStop","value":torqueToolSyncReplaceKalrmStop});//KALARM STOP input
    //KALARM Bypass
    var torqueToolSyncReplaceKalrmBypass = '#248';//ok
    var torqueToolSyncKalrmBypassLbl = $("<label/>").text("KALARM BYPASS").attr("for","torqueToolSyncKalrmBypass");//KALARM Bypass label
    var torqueToolSyncKalrmBypassIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncKalrmBypass","name":"torqueToolSyncKalrmBypass","value":torqueToolSyncReplaceKalrmBypass});//KALARM Bypass input
    //KALARM Release
    var torqueToolSyncReplaceKalrmRelease = '#249';//ok
    var torqueToolSyncKalrmReleaseLbl = $("<label/>").text("KALARM RELEASE").attr("for","torqueToolSyncKalrmRelease");//KALARM Release label
    var torqueToolSyncKalrmReleaseIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncKalrmRelease","name":"torqueToolSyncKalrmRelease","value":torqueToolSyncReplaceKalrmRelease});//KALARM Release input
    //STATUS INHIBITED
    var torqueToolSyncReplaceStatusInhi = 'Trim2B_1StatusInhibited.2'; //ok
    var torqueToolSyncStatusInhiLbl = $("<label/>").text("STATUS INHIBITED").attr("for","torqueToolSyncStatusInhi");//STATUS INHIBITED label
    var torqueToolSyncStatusInhiIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncStatusInhi","name":"torqueToolSyncStatusInhi","value":torqueToolSyncReplaceStatusInhi});//STATUS INHIBITED input
    //CONVEYOR
    var torqueToolSyncReplaceConveyor = 'Conv_Trim2B';//ok
    var torqueToolSyncConveyorLbl = $("<label/>").text("CONVEYOR").attr("for","torqueToolSyncConveyor");//CONVEYOR label
    var torqueToolSyncConveyorIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncConveyor","name":"torqueToolSyncConveyor","value":torqueToolSyncReplaceConveyor});//CONVEYOR input
    //MODEL CODE
    var torqueToolSyncReplaceModelCode = 'StringTrim2B_Station53_ModelCode';//ok
    var torqueToolSyncModelCodeLbl = $("<label/>").text("MODEL CODE").attr("for","torqueToolSyncModelCode");//MODEL CODE label
    var torqueToolSyncModelCodeIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncModelCode","name":"torqueToolSyncModelCode","value":torqueToolSyncReplaceModelCode});//MODEL CODE input
    //MODEL VARIANT
    var torqueToolSyncReplaceModelVariant = 'StringTracking_Station_Variant'; //nao usado
    var torqueToolSyncModelVariantLbl = $("<label/>").text("MODEL VARIANT").attr("for","torqueToolSyncModelVariant");//MODEL VARIANT label
    var torqueToolSyncModelVariantIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncModelVariant","name":"torqueToolSyncModelVariant","value":torqueToolSyncReplaceModelVariant});//MODEL VARIANT input
    //LINE TRACKING
    var torqueToolSyncReplaceTracking = 'Trim2B_Tracking[20]';//ok
    var torqueToolSyncTrackingLbl = $("<label/>").text("LINE TRACKING").attr("for","torqueToolSyncTracking");//LINE TRACKING label
    var torqueToolSyncTrackingIn = $("<input/>").attr({"type":"text","id":"torqueToolSyncTracking","name":"torqueToolSyncTracking","value":torqueToolSyncReplaceTracking});//LINE TRACKING input
    //##############################################################
    //################## Adiciona no Body ##########################
    //##############################################################
    //Adiciona na tela Principal
    $("body").after(torqueToolSyncDiv);//adiciona divisão
    $("#torqueToolSyncDiv").append(torqueToolSyncBtn);//adiciona o botão 
    //$("#torqueToolSyncDiv").append(torqueToolSyncLoadL5XBtn);//adiciona o botão
    $("#torqueToolSyncBtn").click(torqueToolSyncFunction);//chama função quando o botão for clicado
   //############## cria estrutura para torque tool #########################
    function torqueToolSyncFunction(){
        if (torqueToolSyncStuctCreate == false) { //verificação para criar apenas uma vez
            $("button").hide(); //esconde os outros botoes
            //Adicione mais Forms se precisar
            //$("body").append(torqueToolSyncXMLIn);//Cria botoes
            $("body").append(torqueToolSyncForm1);//Form1
            $("body").append("<br/>",torqueToolSyncForm2);//Form2
            $("body").append("<br/>",torqueToolSyncForm3);//Form3
            $("body").append("<br/>",torqueToolSyncForm4);//Form3
            //Cria botoes
            $("body").append(torqueToolSyncP);//Cria P
            $("body").append(torqueToolSyncCreateL5XBtn);//Cria botoes

            //Form1 - Machine Code e IP - Adicione conforme precisar
            $("#torqueToolSyncForm1").append("<br/>",torqueToolSyncMCLabel,"<br/>",torqueToolSyncMCIn);
            $("#torqueToolSyncForm1").append("<br/>",torqueToolSyncIPLabel,"<br/>",torqueToolSyncIPIn);
            //Form2 - Andon 
            $("#torqueToolSyncForm2").append("<br/>",torqueToolSyncStationLbl,"<br/>",torqueToolSyncStationIn);
            $("#torqueToolSyncForm2").append("<br/>",torqueToolSyncLep1FltLbl,"<br/>",torqueToolSyncLep1FltIn);
            $("#torqueToolSyncForm2").append("<br/>",torqueToolSyncLep1WngLbl,"<br/>",torqueToolSyncLep1WngIn);
            $("#torqueToolSyncForm2").append("<br/>",torqueToolSyncLep1DlyLbl,"<br/>",torqueToolSyncLep1DlyIn);
            $("#torqueToolSyncForm2").append("<br/>",torqueToolSyncLep2BypLbl,"<br/>",torqueToolSyncLep2BypIn);
            $("#torqueToolSyncForm2").append("<br/>",torqueToolSyncLep2IOWngLbl,"<br/>",torqueToolSyncLep2IOWngIn);
            //Form 3 - Kalarm
            $("#torqueToolSyncForm3").append("<br/>",torqueToolSyncKalrmCommFltLbl,"<br/>",torqueToolSyncKalrmCommFltIn);
            $("#torqueToolSyncForm3").append("<br/>",torqueToolSyncKalrmCommPortLbl,"<br/>",torqueToolSyncKalrmCommPortIn);
            $("#torqueToolSyncForm3").append("<br/>",torqueToolSyncKalrmSpeedLbl,"<br/>",torqueToolSyncKalrmSpeedIn);
            $("#torqueToolSyncForm3").append("<br/>",torqueToolSyncKalrmStopLbl,"<br/>",torqueToolSyncKalrmStopIn);
            $("#torqueToolSyncForm3").append("<br/>",torqueToolSyncKalrmBypassLbl,"<br/>",torqueToolSyncKalrmBypassIn);
            $("#torqueToolSyncForm3").append("<br/>",torqueToolSyncKalrmReleaseLbl,"<br/>",torqueToolSyncKalrmReleaseIn);
            //Form 4 - tags manuais
            $("#torqueToolSyncForm4").append("<br/>",torqueToolSyncStatusInhiLbl,"<br/>",torqueToolSyncStatusInhiIn);
            $("#torqueToolSyncForm4").append("<br/>",torqueToolSyncConveyorLbl,"<br/>",torqueToolSyncConveyorIn);
            $("#torqueToolSyncForm4").append("<br/>",torqueToolSyncModelCodeLbl,"<br/>",torqueToolSyncModelCodeIn);
            //$("#torqueToolSyncForm4").append("<br/>",torqueToolSyncModelVariantLbl,"<br/>",torqueToolSyncModelVariantIn);
            $("#torqueToolSyncForm4").append("<br/>",torqueToolSyncTrackingLbl,"<br/>",torqueToolSyncTrackingIn);
            //criar apenas uma vez a estrutura
            torqueToolSyncStuctCreate = true;
        };
    };
    //############# Carrega arquivo L5X  #####################################
    $(document).on('change','#torqueToolSyncXMLFile', function() {
        torqueToolSyncLoadString(this);
        });
    //############ Funcao que faz upload um arquivo e converte pra string ################
    function torqueToolSyncLoadString(idXMLFile) {
        let file = idXMLFile.files[0];
        let reader = new FileReader();
        reader.onload = function() {
            torqueToolSyncXMLString = reader.result;
        };
        reader.onerror = function() {
            console.log(reader.error);
        };
        reader.readAsText(file);
    };
    //############ Funcao que seleciona uma string e converte para arquivo ################
    $(document).on('click','#torqueToolSyncLoadL5XBtn',torqueToolSyncLoadL5X);
    //#########
    async function torqueToolSyncLoadL5X(){
        downloadL5X(torqueToolSyncL5X,'torqueToolSync.L5X');
        downloadL5X(torqueToolSyncHardwareL5X,'torqueToolSyncHardware.L5X');
    };
    //########### botão para altera arquivos L5X conforme mudanças#######################
    $(document).on('click','#torqueToolSyncCreateL5XBtn',torqueToolSyncReplace);
    //############ Function para trocar as tags no L5x##############################
    // modifique conforme tags do L5X
    function torqueToolSyncReplace (){
        let stringRplc = torqueToolSyncL5X;
        let stringRplcHw = torqueToolSyncHardwareL5X;
        //Replace torqueToolSyncReplaceMC
        stringRplcHw = replaceAll(stringRplcHw, torqueToolSyncReplaceMC, $('#torqueToolSyncMCode').val());
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceMC, $('#torqueToolSyncMCode').val());
        //Replace torqueToolSyncReplaceIP
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceIP, $('#torqueToolSyncIP').val());
        stringRplcHw = replaceAll(stringRplcHw, torqueToolSyncReplaceIP, $('#torqueToolSyncIP').val());
        //troca . por ,
        let ipVirgula = replaceAll(torqueToolSyncReplaceIP,'.',',');
        let ipVirgulaReplace = replaceAll($('#torqueToolSyncIP').val(),'.',',');
        stringRplc = replaceAll(stringRplc, ipVirgula, ipVirgulaReplace);
        //STATION
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceStation, $('#torqueToolSyncStation').val());
        //LEP1 FAULT
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceLep1Flt, $('#torqueToolSyncLep1Flt').val());
        //LEP1 WARNING
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceLep1Wng, $('#torqueToolSyncLep1Wng').val());
        //LEP1 DELAY
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceLep1Dly, $('#torqueToolSyncLep1Dly').val());
        //LEP2 BYPASS
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceLep2Byp, $('#torqueToolSyncLep2Byp').val());
        //LEP2 IO WARNING
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceLep2IOWng, $('#torqueToolSyncLep2IOWng').val());
        //KALARM COMM FAULT
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceKalrmCommFlt, $('#torqueToolSyncKalrmCommFlt').val());
        //KALARM COMM PORT
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceKalrmCommPort, $('#torqueToolSyncKalrmCommPort').val());
        //KALARM SPEED OR DUPLEX
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceKalrmSpeed, $('#torqueToolSyncKalrmSpeed').val());
        //KALARM STOP
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceKalrmStop, $('#torqueToolSyncKalrmStop').val());
        //KALARM Bypass
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceKalrmBypass, $('#torqueToolSyncKalrmBypass').val());
        //KALARM Release
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceKalrmRelease, $('#torqueToolSyncKalrmRelease').val());
        //Replace STATUS INHIBITED
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceStatusInhi, $('#torqueToolSyncStatusInhi').val());
        //CONVEYOR
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceConveyor, $('#torqueToolSyncConveyor').val());
        //MODEL CODE
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceModelCode, $('#torqueToolSyncModelCode').val());
        //MODEL VARIANT
        //stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceModelVariant, $('#torqueToolSyncModelVariant').val());
        //LINE TRACKING
        stringRplc = replaceAll(stringRplc, torqueToolSyncReplaceTracking, $('#torqueToolSyncTracking').val());

        let filename = ('torque_tool_' + $('#torqueToolSyncMCode').val() + '_routine.L5X');

        downloadL5X(stringRplc,filename);
        downloadL5X(stringRplcHw,('Hardware_'+filename));
    };
});