//Rotina - Traceability SCS conveyor synchronous
//Diogo Souza 2024-07-18
//################## Revisoes ##########################
//Criado usando o programa de testes como base, modificado para transportador synchronous e L5X de hardware
//#######################################################################
$(document).ready(function(){ //para executar somente depois que o documento carregar, coisa do jquery
    //################## vars para input/output do L5X ################################
    var traceSyncCreateL5XBtn = $("<button/>").text("CRIAR L5X").attr({"id":"traceSyncCreateL5XBtn","class":"downloadBtn"}); //criar arquivo L5X
    var traceSyncReloadBtn = $("<button/>").text("VOLTAR").attr("class","reloadBtn"); //criar arquivo L5X
    //################ var estrutura ######################################
    var traceSyncBtn = $("<button/>").text("TRACEABILITY SYNCHRONOUS SCS").attr("id","traceSyncBtn");//botão para criar estrutura
    var traceSyncDiv = $("<div/>").attr("id","traceSyncDiv"); //divisor
    var traceSyncP = $("<p/>").attr("id","pFooter").text(""); //footer
    // Adicione mais Forms conforme precisar
    //Troque os nome e Ids dos Forms
    var traceSyncForm1 = $("<form/>").text("--> TRACEABILITY SYNCHRONOUS SCS <--").attr("id","traceSyncForm1");//Form1
    var traceSyncForm2 = $("<form/>").text("ANDON").attr("id","traceSyncForm2");//Form2
    var traceSyncForm3 = $("<form/>").text("KALARM").attr("id","traceSyncForm3");//Form3
    var traceSyncForm4 = $("<form/>").text("MANUAL INPUT").attr("id","traceSyncForm4");//Form4
    var traceSyncStuctCreate = false; //verificar criação estrutura do torque tool apenas uma vez
    //################ Lista de Vars ###########################
    //Adicione conforme tags do L5X
    //Faca alteracoes aqui, sempre em trios, replace, elemento de texto e input
    //Depois adicione dentro do Fomr e da function de replace
    //##########################################################
    //Machine Code
    var traceSyncReplaceMC = '17129';//ok
    var traceSyncMCLabel = $("<label/>").text("Machine Code").attr("for","traceSyncMCode");//Machine Code label
    var traceSyncMCIn = $("<input/>").attr({"type":"text","id":"traceSyncMCode","name":"traceSyncMCode","value":traceSyncReplaceMC});//Machine Code Input
    //System
    var traceSyncReplaceSystem = 'Trim1';//ok
    var traceSyncSystemLabel = $("<label/>").text("System").attr("for","traceSyncSystem");//Machine Code label
    var traceSyncSystemIn = $("<input/>").attr({"type":"text","id":"traceSyncSystem","name":"traceSyncSystem","value":traceSyncReplaceSystem});//System Input
    //IP Address
    var traceSyncReplaceIP = '192.168.1.194';//ok
    var traceSyncIPLabel = $("<label/>").text("IP Address").attr("for","traceSyncIP");// IP label
    var traceSyncIPIn = $("<input/>").attr({"type":"text","id":"traceSyncIP","name":"traceSyncIP","value":traceSyncReplaceIP});// IP input
    //STATION
    var traceSyncReplaceStation = '#12';//ok
    var traceSyncStationLbl = $("<label/>").text("STATION").attr("for","traceSyncStation");//Station label
    var traceSyncStationIn = $("<input/>").attr({"type":"text","id":"traceSyncStation","name":"traceSyncStation","value":traceSyncReplaceStation});//station input
    //LEP1 FAULT
    var traceSyncReplaceLep1Flt = '#20';//ok
    var traceSyncLep1FltLbl = $("<label/>").text("LEP1 FAULT").attr("for","traceSyncLep1Flt");//LEP1 FAULT label
    var traceSyncLep1FltIn = $("<input/>").attr({"type":"text","id":"traceSyncLep1Flt","name":"traceSyncLep1Flt","value":traceSyncReplaceLep1Flt});//LEP1 FAULT input
    //LEP1 WARNING
    var traceSyncReplaceLep1Wng = '#21';//ok
    var traceSyncLep1WngLbl = $("<label/>").text("LEP1 WARNING").attr("for","traceSyncLep1Wng");//LEP1 WARNING label
    var traceSyncLep1WngIn = $("<input/>").attr({"type":"text","id":"traceSyncLep1Wng","name":"traceSyncLep1Wng","value":traceSyncReplaceLep1Wng});//LEP1 WARNING input
    //LEP2 BYPASS
    var traceSyncReplaceLep2Byp = '#23';//ok
    var traceSyncLep2BypLbl = $("<label/>").text("LEP2 BYPASS").attr("for","traceSyncLep2Byp");//LEP2 BYPASS label
    var traceSyncLep2BypIn = $("<input/>").attr({"type":"text","id":"traceSyncLep2Byp","name":"traceSyncLep2Byp","value":traceSyncReplaceLep2Byp});//LEP2 BYPASS input
    //LEP2 IO WARNING
    var traceSyncReplaceLep2IOWng = '#24';//ok
    var traceSyncLep2IOWngLbl = $("<label/>").text("LEP2 IO WARNING").attr("for","traceSyncLep2IOWng");//LEP2 IO WARNING label
    var traceSyncLep2IOWngIn = $("<input/>").attr({"type":"text","id":"traceSyncLep2IOWng","name":"traceSyncLep2IOWng","value":traceSyncReplaceLep2IOWng});//LEP2 IO WARNING input
    //KALARM COMM FAULT
    var traceSyncReplaceKalrmCommFlt = '#101';//ok
    var traceSyncKalrmCommFltLbl = $("<label/>").text("KALARM COMM FAULT").attr("for","traceSyncKalrmCommFlt");//KALARM COMM FAULT label
    var traceSyncKalrmCommFltIn = $("<input/>").attr({"type":"text","id":"traceSyncKalrmCommFlt","name":"traceSyncKalrmCommFlt","value":traceSyncReplaceKalrmCommFlt});//KALARM COMM FAULT input
    //KALARM COMM PORT
    var traceSyncReplaceKalrmCommPort = '#102';//ok
    var traceSyncKalrmCommPortLbl = $("<label/>").text("KALARM COMM PORT").attr("for","traceSyncKalrmCommPort");//KALARM COMM PORT label
    var traceSyncKalrmCommPortIn = $("<input/>").attr({"type":"text","id":"traceSyncKalrmCommPort","name":"traceSyncKalrmCommPort","value":traceSyncReplaceKalrmCommPort});//KALARM COMM PORT input
    //KALARM SPEED OR DUPLEX
    var traceSyncReplaceKalrmSpeed = '#103';//ok
    var traceSyncKalrmSpeedLbl = $("<label/>").text("KALARM SPEED OR DUPLEX").attr("for","traceSyncKalrmSpeed");//KALARM SPEED OR DUPLEX label
    var traceSyncKalrmSpeedIn = $("<input/>").attr({"type":"text","id":"traceSyncKalrmSpeed","name":"traceSyncKalrmSpeed","value":traceSyncReplaceKalrmSpeed});//KALARM SPEED OR DUPLEX input
    //KALARM STOP
    var traceSyncReplaceKalrmStop = '#108';//ok
    var traceSyncKalrmStopLbl = $("<label/>").text("KALARM STOP").attr("for","traceSyncKalrmStop");//KALARM STOP label
    var traceSyncKalrmStopIn = $("<input/>").attr({"type":"text","id":"traceSyncKalrmStop","name":"traceSyncKalrmStop","value":traceSyncReplaceKalrmStop});//KALARM STOP input
    //KALARM Bypass
    var traceSyncReplaceKalrmBypass = '#109';//ok
    var traceSyncKalrmBypassLbl = $("<label/>").text("KALARM BYPASS").attr("for","traceSyncKalrmBypass");//KALARM Bypass label
    var traceSyncKalrmBypassIn = $("<input/>").attr({"type":"text","id":"traceSyncKalrmBypass","name":"traceSyncKalrmBypass","value":traceSyncReplaceKalrmBypass});//KALARM Bypass input
    //KALARM Release
    var traceSyncReplaceKalrmRelease = '#110';//ok
    var traceSyncKalrmReleaseLbl = $("<label/>").text("KALARM RELEASE").attr("for","traceSyncKalrmRelease");//KALARM Release label
    var traceSyncKalrmReleaseIn = $("<input/>").attr({"type":"text","id":"traceSyncKalrmRelease","name":"traceSyncKalrmRelease","value":traceSyncReplaceKalrmRelease});//KALARM Release input
    //KALARM BK Fault
    var traceSyncReplaceKalrmBKFlt = '#104';//ok
    var traceSyncKalrmBKFltLbl = $("<label/>").text("KALARM BK FAULT").attr("for","traceSyncKalrmBKFlt");//KALARM BKFlt label
    var traceSyncKalrmBKFltIn = $("<input/>").attr({"type":"text","id":"traceSyncKalrmBKFlt","name":"traceSyncKalrmBKFlt","value":traceSyncReplaceKalrmBKFlt});//KALARM BKFlt input
    //KALARM BK Cfg
    var traceSyncReplaceKalrmBKCfg = '#107';//ok
    var traceSyncKalrmBKCfgLbl = $("<label/>").text("KALARM BK CONFIGURATION FAULT").attr("for","traceSyncKalrmBKCfg");//KALARM BKCfg label
    var traceSyncKalrmBKCfgIn = $("<input/>").attr({"type":"text","id":"traceSyncKalrmBKCfg","name":"traceSyncKalrmBKCfg","value":traceSyncReplaceKalrmBKCfg});//KALARM BKCfg input
    //KALARM BK Input
    var traceSyncReplaceKalrmBKInput = '#105';//ok
    var traceSyncKalrmBKInputLbl = $("<label/>").text("KALARM BK INPUT FAULT").attr("for","traceSyncKalrmBKInput");//KALARM BKInput label
    var traceSyncKalrmBKInputIn = $("<input/>").attr({"type":"text","id":"traceSyncKalrmBKInput","name":"traceSyncKalrmBKInput","value":traceSyncReplaceKalrmBKInput});//KALARM BKInput input
    //KALARM BK Output
    var traceSyncReplaceKalrmBKOutput = '#106';//ok
    var traceSyncKalrmBKOutputLbl = $("<label/>").text("KALARM BK OUTPUT FAULT").attr("for","traceSyncKalrmBKOutput");//KALARM BKOutput label
    var traceSyncKalrmBKOutputIn = $("<input/>").attr({"type":"text","id":"traceSyncKalrmBKOutput","name":"traceSyncKalrmBKOutput","value":traceSyncReplaceKalrmBKOutput});//KALARM BKOutput input    
    //STATUS INHIBITED
    var traceSyncReplaceStatusInhi = 'Trim1ATraceStatusInhibited.4';//ok
    var traceSyncStatusInhiLbl = $("<label/>").text("STATUS INHIBITED").attr("for","traceSyncStatusInhi");//STATUS INHIBITED label
    var traceSyncStatusInhiIn = $("<input/>").attr({"type":"text","id":"traceSyncStatusInhi","name":"traceSyncStatusInhi","value":traceSyncReplaceStatusInhi});//STATUS INHIBITED input
    //CONVEYOR
    var traceSyncReplaceConveyor = 'Conv_Trim1';//ok
    var traceSyncConveyorLbl = $("<label/>").text("CONVEYOR").attr("for","traceSyncConveyor");//CONVEYOR label
    var traceSyncConveyorIn = $("<input/>").attr({"type":"text","id":"traceSyncConveyor","name":"traceSyncConveyor","value":traceSyncReplaceConveyor});//CONVEYOR input
    //IHM
    var traceSyncReplaceIHM = 'ToolStsDisp_Trim1.ToolNumber[66]';//ok
    var traceSyncIHMLbl = $("<label/>").text("IHM").attr("for","traceSyncIHM");//IHM label
    var traceSyncIHMIn = $("<input/>").attr({"type":"text","id":"traceSyncIHM","name":"traceSyncIHM","value":traceSyncReplaceIHM});//IHM input
    //QDI
    var traceSyncReplaceQDI = 'QDIMerging_Trim1[12].EPA3';
    var traceSyncQDILbl = $("<label/>").text("QDI").attr("for","traceSyncQDI");//QDI label
    var traceSyncQDIIn = $("<input/>").attr({"type":"text","id":"traceSyncQDI","name":"traceSyncQDI","value":traceSyncReplaceQDI});//QDI input
    //GepicsTraceRcvData
    var traceSyncReplaceRcvData = 'GepicsTraceRcv_TAP11';
    var traceSyncRcvDataLbl = $("<label/>").text("GEPICS TRACE RECIVE DATA").attr("for","traceSyncRcvData");//GepicsTraceRcvData label
    var traceSyncRcvDataIn = $("<input/>").attr({"type":"text","id":"traceSyncRcvData","name":"traceSyncRcvData","value":traceSyncReplaceRcvData});//GepicsTraceRcvData input
     //LINE TRACKING
    var traceSyncReplaceTracking = 'Trim1_Tracking[12]';//ok
    var traceSyncTrackingLbl = $("<label/>").text("LINE TRACKING").attr("for","traceSyncTracking");//LINE TRACKING label
    var traceSyncTrackingIn = $("<input/>").attr({"type":"text","id":"traceSyncTracking","name":"traceSyncTracking","value":traceSyncReplaceTracking});//LINE TRACKING input
    //##############################################################
    //################## Adiciona no Body ##########################
    //##############################################################
    //Adiciona na tela Principal
    $("body").after(traceSyncDiv);//adiciona divisão
    $("#traceSyncDiv").append(traceSyncBtn);//adiciona o botão 
    $("#traceSyncBtn").click(traceSyncFunction);//chama função quando o botão for clicado
   //############## cria estrutura para torque tool #########################
    function traceSyncFunction(){
        if (traceSyncStuctCreate == false) { //verificação para criar apenas uma vez
            $("button").hide(); //esconde os outros botoes
            //Adicione mais Forms se precisar
            //$("body").append(traceSyncXMLIn);//Cria botoes
            $("body").append(traceSyncForm1);//Form1
            $("body").append("<br/>",traceSyncForm2);//Form2
            $("body").append("<br/>",traceSyncForm3);//Form3
            $("body").append("<br/>",traceSyncForm4);//Form3
            //Cria botoes
            $("body").append(traceSyncP);//Cria P
            $("body").append(traceSyncCreateL5XBtn);//Cria botoes
            $("body").append(traceSyncReloadBtn);//Cria botoes
            //Form1 - Machine Code e IP - Adicione conforme precisar
            $("#traceSyncForm1").append("<br/>",traceSyncMCLabel,"<br/>",traceSyncMCIn);
            $("#traceSyncForm1").append("<br/>",traceSyncIPLabel,"<br/>",traceSyncIPIn);
            $("#traceSyncForm1").append("<br/>",traceSyncSystemLabel,"<br/>",traceSyncSystemIn);
            //Form2 - Andon 
            $("#traceSyncForm2").append("<br/>",traceSyncStationLbl,"<br/>",traceSyncStationIn);
            $("#traceSyncForm2").append("<br/>",traceSyncLep1FltLbl,"<br/>",traceSyncLep1FltIn);
            $("#traceSyncForm2").append("<br/>",traceSyncLep1WngLbl,"<br/>",traceSyncLep1WngIn);
            $("#traceSyncForm2").append("<br/>",traceSyncLep2BypLbl,"<br/>",traceSyncLep2BypIn);
            $("#traceSyncForm2").append("<br/>",traceSyncLep2IOWngLbl,"<br/>",traceSyncLep2IOWngIn);
            //Form 3 - Kalarm
            $("#traceSyncForm3").append("<br/>",traceSyncKalrmCommFltLbl,"<br/>",traceSyncKalrmCommFltIn);
            $("#traceSyncForm3").append("<br/>",traceSyncKalrmCommPortLbl,"<br/>",traceSyncKalrmCommPortIn);
            $("#traceSyncForm3").append("<br/>",traceSyncKalrmSpeedLbl,"<br/>",traceSyncKalrmSpeedIn);
            $("#traceSyncForm3").append("<br/>",traceSyncKalrmStopLbl,"<br/>",traceSyncKalrmStopIn);
            $("#traceSyncForm3").append("<br/>",traceSyncKalrmBypassLbl,"<br/>",traceSyncKalrmBypassIn);
            $("#traceSyncForm3").append("<br/>",traceSyncKalrmReleaseLbl,"<br/>",traceSyncKalrmReleaseIn);
            $("#traceSyncForm3").append("<br/>",traceSyncKalrmBKFltLbl,"<br/>",traceSyncKalrmBKFltIn);
            $("#traceSyncForm3").append("<br/>",traceSyncKalrmBKCfgLbl,"<br/>",traceSyncKalrmBKCfgIn);
            $("#traceSyncForm3").append("<br/>",traceSyncKalrmBKInputLbl,"<br/>",traceSyncKalrmBKInputIn);
            $("#traceSyncForm3").append("<br/>",traceSyncKalrmBKOutputLbl,"<br/>",traceSyncKalrmBKOutputIn);
            //Form 4 - tags manuais
            $("#traceSyncForm4").append("<br/>",traceSyncStatusInhiLbl,"<br/>",traceSyncStatusInhiIn);
            $("#traceSyncForm4").append("<br/>",traceSyncConveyorLbl,"<br/>",traceSyncConveyorIn);
            $("#traceSyncForm4").append("<br/>",traceSyncRcvDataLbl,"<br/>",traceSyncRcvDataIn);
            $("#traceSyncForm4").append("<br/>",traceSyncTrackingLbl,"<br/>",traceSyncTrackingIn);
            $("#traceSyncForm4").append("<br/>",traceSyncIHMLbl,"<br/>",traceSyncIHMIn);
            $("#traceSyncForm4").append("<br/>",traceSyncQDILbl,"<br/>",traceSyncQDIIn);
            //criar apenas uma vez a estrutura
            traceSyncStuctCreate = true;
        };
    };
    //########### botão para altera arquivos L5X conforme mudanças#######################
    $(document).on('click','#traceSyncCreateL5XBtn',traceSyncReplace);
    //############ Function para trocar as tags no L5x##############################
    // modifique conforme tags do L5X
    function traceSyncReplace (){
        let stringRplc = traceSyncL5X;//var em outro js
        let stringRplcHw = traceSyncHardwareL5X;//var em outro js
        //Replace traceSyncReplaceMC
        stringRplcHw = replaceAll(stringRplcHw, traceSyncReplaceMC, $('#traceSyncMCode').val());
        stringRplc = replaceAll(stringRplc, traceSyncReplaceMC, $('#traceSyncMCode').val());
        //Replace traceSyncReplaceIP
        stringRplc = replaceAll(stringRplc, traceSyncReplaceIP, $('#traceSyncIP').val());
        stringRplcHw = replaceAll(stringRplcHw, traceSyncReplaceIP, $('#traceSyncIP').val());
        //troca . por ,
        let ipVirgula = replaceAll(traceSyncReplaceIP,'.',',');
        let ipVirgulaReplace = replaceAll($('#traceSyncIP').val(),'.',',');
        stringRplc = replaceAll(stringRplc, ipVirgula, ipVirgulaReplace);
        //STATION
        stringRplc = replaceAll(stringRplc, traceSyncReplaceStation, $('#traceSyncStation').val());
        //LEP1 FAULT
        stringRplc = replaceAll(stringRplc, traceSyncReplaceLep1Flt, $('#traceSyncLep1Flt').val());
        //LEP1 WARNING
        stringRplc = replaceAll(stringRplc, traceSyncReplaceLep1Wng, $('#traceSyncLep1Wng').val());
        //LEP2 BYPASS
        stringRplc = replaceAll(stringRplc, traceSyncReplaceLep2Byp, $('#traceSyncLep2Byp').val());
        //LEP2 IO WARNING
        stringRplc = replaceAll(stringRplc, traceSyncReplaceLep2IOWng, $('#traceSyncLep2IOWng').val());
        //KALARM COMM FAULT
        stringRplc = replaceAll(stringRplc, traceSyncReplaceKalrmCommFlt, $('#traceSyncKalrmCommFlt').val());
        //KALARM COMM PORT
        stringRplc = replaceAll(stringRplc, traceSyncReplaceKalrmCommPort, $('#traceSyncKalrmCommPort').val());
        //KALARM SPEED OR DUPLEX
        stringRplc = replaceAll(stringRplc, traceSyncReplaceKalrmSpeed, $('#traceSyncKalrmSpeed').val());
        //KALARM STOP
        stringRplc = replaceAll(stringRplc, traceSyncReplaceKalrmStop, $('#traceSyncKalrmStop').val());
        //KALARM Bypass
        stringRplc = replaceAll(stringRplc, traceSyncReplaceKalrmBypass, $('#traceSyncKalrmBypass').val());
        //KALARM Release
        stringRplc = replaceAll(stringRplc, traceSyncReplaceKalrmRelease, $('#traceSyncKalrmRelease').val());
        //KALARM BK Flt
        stringRplc = replaceAll(stringRplc, traceSyncReplaceKalrmBKFlt, $('#traceSyncKalrmBKFlt').val());
        //KALARM BK Cfg
        stringRplc = replaceAll(stringRplc, traceSyncReplaceKalrmBKCfg, $('#traceSyncKalrmBKCfg').val());
        //KALARM BK Input
        stringRplc = replaceAll(stringRplc, traceSyncReplaceKalrmBKInput, $('#traceSyncKalrmBKInput').val());
        //KALARM BK Output
        stringRplc = replaceAll(stringRplc, traceSyncReplaceKalrmBKOutput, $('#traceSyncKalrmBKOutput').val());
        //Replace STATUS INHIBITED
        stringRplc = replaceAll(stringRplc, traceSyncReplaceStatusInhi, $('#traceSyncStatusInhi').val());
        //CONVEYOR
        stringRplc = replaceAll(stringRplc, traceSyncReplaceConveyor, $('#traceSyncConveyor').val());
        //MODEL CODE
        stringRplc = replaceAll(stringRplc, traceSyncReplaceRcvData, $('#traceSyncRcvData').val());
        //IHM
        stringRplc = replaceAll(stringRplc, traceSyncReplaceIHM, $('#traceSyncIHM').val());
        //QDI
        stringRplc = replaceAll(stringRplc, traceSyncReplaceQDI, $('#traceSyncQDI').val());
        //LINE TRACKING
        stringRplc = replaceAll(stringRplc, traceSyncReplaceTracking, $('#traceSyncTracking').val());
        //System
        stringRplc = replaceAll(stringRplc, traceSyncReplaceSystem, $('#traceSyncSystem').val());
       
        let filename = ('_Sync_TS' + $('#traceSyncMCode').val() + '.L5X');

        downloadStringToFile(stringRplc,('Routine'+filename));
        downloadStringToFile(stringRplcHw,('Hardware'+filename));
    };
});