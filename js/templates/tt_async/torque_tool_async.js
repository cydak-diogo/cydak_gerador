//Rotina - Apertadeira SCS conveyor Asynchronous
//javascript: Diogo Souza 2024-07-15
//L5X: Anderson das Neves Oliveira 2024-07-11
//################## Revisoes ##########################
//Criado usando o programa de testes como base, modificado para transportador Asynchronous e L5X de hardware
//#######################################################################
$(document).ready(function(){ //para executar somente depois que o documento carregar, coisa do jquery
    //################## vars para input/output do L5X ################################
    var torqueToolAsyncCreateL5XBtn = $("<button/>").text("CRIAR L5X").attr({"id":"torqueToolAsyncCreateL5XBtn","class":"downloadBtn"}); //criar arquivo L5X
    var torqueToolAsyncReloadBtn = $("<button/>").text("VOLTAR").attr("class","reloadBtn"); //criar arquivo L5X
    //################ var estrutura ######################################
    var torqueToolAsyncBtn = $("<button/>").text("APERTADEIRA ASYNCHRONOUS SCS").attr("id","torqueToolAsyncBtn");//botão para criar estrutura
    var torqueToolAsyncDiv = $("<div/>").attr("id","torqueToolAsyncDiv"); //divisor
    var torqueToolAsyncP = $("<p/>").attr("id","TTFooter").text(""); //footer
    // Adicione mais Forms conforme precisar
    //Troque os nome e Ids dos Forms
    var torqueToolAsyncForm1 = $("<form/>").text("--> APERTADEIRA ASYNCHRONOUS SCS <--").attr("id","torqueToolAsyncForm1");//Form1
    var torqueToolAsyncForm2 = $("<form/>").text("ANDON").attr("id","torqueToolAsyncForm2");//Form2
    var torqueToolAsyncForm3 = $("<form/>").text("KALARM").attr("id","torqueToolAsyncForm3");//Form3
    var torqueToolAsyncForm4 = $("<form/>").text("MANUAL INPUT").attr("id","torqueToolAsyncForm4");//Form4
    var torqueToolAsyncStuctCreate = false; //verificar criação estrutura do torque tool apenas uma vez
    //################ Lista de Vars ###########################
    //Adicione conforme tags do L5X
    //Faca alteracoes aqui, sempre em trios, replace, elemento de texto e input
    //Depois adicione dentro do Fomr e da function de replace
    //##########################################################
    //Machine Code
    var torqueToolAsyncReplaceMC = '20137';//ok 
    var torqueToolAsyncMCLabel = $("<label/>").text("Machine Code").attr("for","torqueToolAsyncMCode");//Machine Code label
    var torqueToolAsyncMCIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncMCode","name":"torqueToolAsyncMCode","value":torqueToolAsyncReplaceMC});//Machine Code Input
    //System
    var torqueToolAsyncReplaceSystem = 'CockPit';//ok
    var torqueToolAsyncSystemLabel = $("<label/>").text("System").attr("for","torqueToolAsyncSystem");//Machine Code label
    var torqueToolAsyncSystemIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncSystem","name":"torqueToolAsyncSystem","value":torqueToolAsyncReplaceSystem});//System Input
    //IP Address
    var torqueToolAsyncReplaceIP = '192.168.1.44';//ok
    var torqueToolAsyncIPLabel = $("<label/>").text("IP Address").attr("for","torqueToolAsyncIP");// IP label
    var torqueToolAsyncIPIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncIP","name":"torqueToolAsyncIP","value":torqueToolAsyncReplaceIP});// IP input
    //STATION
    var torqueToolAsyncReplaceStation = '#13';//ok
    var torqueToolAsyncStationLbl = $("<label/>").text("STATION").attr("for","torqueToolAsyncStation");//Station label
    var torqueToolAsyncStationIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncStation","name":"torqueToolAsyncStation","value":torqueToolAsyncReplaceStation});//station input
    //LEP1 FAULT
    var torqueToolAsyncReplaceLep1Flt = '#19';
    var torqueToolAsyncLep1FltLbl = $("<label/>").text("LEP1 FAULT").attr("for","torqueToolAsyncLep1Flt");//LEP1 FAULT label
    var torqueToolAsyncLep1FltIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncLep1Flt","name":"torqueToolAsyncLep1Flt","value":torqueToolAsyncReplaceLep1Flt});//LEP1 FAULT input
    //LEP1 WARNING
    var torqueToolAsyncReplaceLep1Wng = '#18';
    var torqueToolAsyncLep1WngLbl = $("<label/>").text("LEP1 WARNING").attr("for","torqueToolAsyncLep1Wng");//LEP1 WARNING label
    var torqueToolAsyncLep1WngIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncLep1Wng","name":"torqueToolAsyncLep1Wng","value":torqueToolAsyncReplaceLep1Wng});//LEP1 WARNING input
    //LEP1 DELAY
    var torqueToolAsyncReplaceLep1Dly = '#20';
    var torqueToolAsyncLep1DlyLbl = $("<label/>").text("LEP1 DELAY").attr("for","torqueToolAsyncLep1Dly");//LEP1 DELAY label
    var torqueToolAsyncLep1DlyIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncLep1Dly","name":"torqueToolAsyncLep1Dly","value":torqueToolAsyncReplaceLep1Dly});//LEP1 DELAY input
    //LEP2 BYPASS
    var torqueToolAsyncReplaceLep2Byp = '#21';
    var torqueToolAsyncLep2BypLbl = $("<label/>").text("LEP2 BYPASS").attr("for","torqueToolAsyncLep2Byp");//LEP2 BYPASS label
    var torqueToolAsyncLep2BypIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncLep2Byp","name":"torqueToolAsyncLep2Byp","value":torqueToolAsyncReplaceLep2Byp});//LEP2 BYPASS input
    //LEP2 IO WARNING
    var torqueToolAsyncReplaceLep2IOWng = '#22';
    var torqueToolAsyncLep2IOWngLbl = $("<label/>").text("LEP2 IO WARNING").attr("for","torqueToolAsyncLep2IOWng");//LEP2 IO WARNING label
    var torqueToolAsyncLep2IOWngIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncLep2IOWng","name":"torqueToolAsyncLep2IOWng","value":torqueToolAsyncReplaceLep2IOWng});//LEP2 IO WARNING input
    //KALARM COMM FAULT
    var torqueToolAsyncReplaceKalrmCommFlt = '#720';//ok
    var torqueToolAsyncKalrmCommFltLbl = $("<label/>").text("KALARM COMM FAULT").attr("for","torqueToolAsyncKalrmCommFlt");//KALARM COMM FAULT label
    var torqueToolAsyncKalrmCommFltIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncKalrmCommFlt","name":"torqueToolAsyncKalrmCommFlt","value":torqueToolAsyncReplaceKalrmCommFlt});//KALARM COMM FAULT input
    //KALARM COMM PORT
    var torqueToolAsyncReplaceKalrmCommPort = '#721';//ok
    var torqueToolAsyncKalrmCommPortLbl = $("<label/>").text("KALARM COMM PORT").attr("for","torqueToolAsyncKalrmCommPort");//KALARM COMM PORT label
    var torqueToolAsyncKalrmCommPortIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncKalrmCommPort","name":"torqueToolAsyncKalrmCommPort","value":torqueToolAsyncReplaceKalrmCommPort});//KALARM COMM PORT input
    //KALARM SPEED OR DUPLEX
    var torqueToolAsyncReplaceKalrmSpeed = '#722';//ok
    var torqueToolAsyncKalrmSpeedLbl = $("<label/>").text("KALARM SPEED OR DUPLEX").attr("for","torqueToolAsyncKalrmSpeed");//KALARM SPEED OR DUPLEX label
    var torqueToolAsyncKalrmSpeedIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncKalrmSpeed","name":"torqueToolAsyncKalrmSpeed","value":torqueToolAsyncReplaceKalrmSpeed});//KALARM SPEED OR DUPLEX input
    //KALARM STOP
    var torqueToolAsyncReplaceKalrmStop = '#723';//ok
    var torqueToolAsyncKalrmStopLbl = $("<label/>").text("KALARM STOP").attr("for","torqueToolAsyncKalrmStop");//KALARM STOP label
    var torqueToolAsyncKalrmStopIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncKalrmStop","name":"torqueToolAsyncKalrmStop","value":torqueToolAsyncReplaceKalrmStop});//KALARM STOP input
    //KALARM Bypass
    var torqueToolAsyncReplaceKalrmBypass = '#724';//ok
    var torqueToolAsyncKalrmBypassLbl = $("<label/>").text("KALARM BYPASS").attr("for","torqueToolAsyncKalrmBypass");//KALARM Bypass label
    var torqueToolAsyncKalrmBypassIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncKalrmBypass","name":"torqueToolAsyncKalrmBypass","value":torqueToolAsyncReplaceKalrmBypass});//KALARM Bypass input
    //KALARM Release
    var torqueToolAsyncReplaceKalrmRelease = '#725';//ok
    var torqueToolAsyncKalrmReleaseLbl = $("<label/>").text("KALARM RELEASE").attr("for","torqueToolAsyncKalrmRelease");//KALARM Release label
    var torqueToolAsyncKalrmReleaseIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncKalrmRelease","name":"torqueToolAsyncKalrmRelease","value":torqueToolAsyncReplaceKalrmRelease});//KALARM Release input
    //STATUS INHIBITED
    var torqueToolAsyncReplaceStatusInhi = 'CockPitStatusInhibited.21';//ok 
    var torqueToolAsyncStatusInhiLbl = $("<label/>").text("STATUS INHIBITED").attr("for","torqueToolAsyncStatusInhi");//STATUS INHIBITED label
    var torqueToolAsyncStatusInhiIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncStatusInhi","name":"torqueToolAsyncStatusInhi","value":torqueToolAsyncReplaceStatusInhi});//STATUS INHIBITED input
    //IHM
    var torqueToolAsyncReplaceIHM = 'ToolStsDisp_CockPit.ToolNumber[39]';//ok
    var torqueToolAsyncIHMLbl = $("<label/>").text("IHM").attr("for","torqueToolAsyncIHM");//IHM label
    var torqueToolAsyncIHMIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncIHM","name":"torqueToolAsyncIHM","value":torqueToolAsyncReplaceIHM});//IHM input
    //QDI
    var torqueToolAsyncReplaceQDI = 'QDIMerging_CockPit[9].EPA7';//ok
    var torqueToolAsyncQDILbl = $("<label/>").text("QDI").attr("for","torqueToolAsyncQDI");//QDI label
    var torqueToolAsyncQDIIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncQDI","name":"torqueToolAsyncQDI","value":torqueToolAsyncReplaceQDI});//QDI input
    //CONVEYOR
    var torqueToolAsyncReplaceConveyor = 'AsyncConv_CockPit.Stations[13]';//ok
    var torqueToolAsyncConveyorLbl = $("<label/>").text("CONVEYOR").attr("for","torqueToolAsyncConveyor");//CONVEYOR label
    var torqueToolAsyncConveyorIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncConveyor","name":"torqueToolAsyncConveyor","value":torqueToolAsyncReplaceConveyor});//CONVEYOR input
    //MODEL CODE
    var torqueToolAsyncReplaceModelCode = 'CockPit_Tracking[13].ModelCode';//ok
    var torqueToolAsyncModelCodeLbl = $("<label/>").text("MODEL CODE").attr("for","torqueToolAsyncModelCode");//MODEL CODE label
    var torqueToolAsyncModelCodeIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncModelCode","name":"torqueToolAsyncModelCode","value":torqueToolAsyncReplaceModelCode});//MODEL CODE input
    //LINE TRACKING
    var torqueToolAsyncReplaceTracking = 'CockPit_Tracking[13]';//ok
    var torqueToolAsyncTrackingLbl = $("<label/>").text("LINE TRACKING").attr("for","torqueToolAsyncTracking");//LINE TRACKING label
    var torqueToolAsyncTrackingIn = $("<input/>").attr({"type":"text","id":"torqueToolAsyncTracking","name":"torqueToolAsyncTracking","value":torqueToolAsyncReplaceTracking});//LINE TRACKING input
    //##############################################################
    //################## Adiciona no Body ##########################
    //##############################################################
    //Adiciona na tela Principal
    $("body").after(torqueToolAsyncDiv);//adiciona divisão
    $("#torqueToolAsyncDiv").append(torqueToolAsyncBtn);//adiciona o botão 
    $("#torqueToolAsyncBtn").click(torqueToolAsyncFunction);//chama função quando o botão for clicado
   //############## cria estrutura para torque tool #########################
    function torqueToolAsyncFunction(){
        if (torqueToolAsyncStuctCreate == false) { //verificação para criar apenas uma vez
            $("button").hide(); //esconde os outros botoes
            //Adicione mais Forms se precisar
            //$("body").append(torqueToolAsyncXMLIn);//Cria botoes
            $("body").append(torqueToolAsyncForm1);//Form1
            $("body").append("<br/>",torqueToolAsyncForm2);//Form2
            $("body").append("<br/>",torqueToolAsyncForm3);//Form3
            $("body").append("<br/>",torqueToolAsyncForm4);//Form3
            //Cria botoes
            $("body").append(torqueToolAsyncP);//Cria P
            $("body").append(torqueToolAsyncCreateL5XBtn);//Cria botoes
            $("body").append(torqueToolAsyncReloadBtn);//Cria botoes
            //Form1 - Machine Code e IP - Adicione conforme precisar
            $("#torqueToolAsyncForm1").append("<br/>",torqueToolAsyncMCLabel,"<br/>",torqueToolAsyncMCIn);
            $("#torqueToolAsyncForm1").append("<br/>",torqueToolAsyncIPLabel,"<br/>",torqueToolAsyncIPIn);
            $("#torqueToolAsyncForm1").append("<br/>",torqueToolAsyncSystemLabel,"<br/>",torqueToolAsyncSystemIn);
            //Form2 - Andon 
            $("#torqueToolAsyncForm2").append("<br/>",torqueToolAsyncStationLbl,"<br/>",torqueToolAsyncStationIn);
            $("#torqueToolAsyncForm2").append("<br/>",torqueToolAsyncLep1FltLbl,"<br/>",torqueToolAsyncLep1FltIn);
            $("#torqueToolAsyncForm2").append("<br/>",torqueToolAsyncLep1WngLbl,"<br/>",torqueToolAsyncLep1WngIn);
            $("#torqueToolAsyncForm2").append("<br/>",torqueToolAsyncLep1DlyLbl,"<br/>",torqueToolAsyncLep1DlyIn);
            $("#torqueToolAsyncForm2").append("<br/>",torqueToolAsyncLep2BypLbl,"<br/>",torqueToolAsyncLep2BypIn);
            $("#torqueToolAsyncForm2").append("<br/>",torqueToolAsyncLep2IOWngLbl,"<br/>",torqueToolAsyncLep2IOWngIn);
            //Form 3 - Kalarm
            $("#torqueToolAsyncForm3").append("<br/>",torqueToolAsyncKalrmCommFltLbl,"<br/>",torqueToolAsyncKalrmCommFltIn);
            $("#torqueToolAsyncForm3").append("<br/>",torqueToolAsyncKalrmCommPortLbl,"<br/>",torqueToolAsyncKalrmCommPortIn);
            $("#torqueToolAsyncForm3").append("<br/>",torqueToolAsyncKalrmSpeedLbl,"<br/>",torqueToolAsyncKalrmSpeedIn);
            $("#torqueToolAsyncForm3").append("<br/>",torqueToolAsyncKalrmStopLbl,"<br/>",torqueToolAsyncKalrmStopIn);
            $("#torqueToolAsyncForm3").append("<br/>",torqueToolAsyncKalrmBypassLbl,"<br/>",torqueToolAsyncKalrmBypassIn);
            $("#torqueToolAsyncForm3").append("<br/>",torqueToolAsyncKalrmReleaseLbl,"<br/>",torqueToolAsyncKalrmReleaseIn);
            //Form 4 - tags manuais
            $("#torqueToolAsyncForm4").append("<br/>",torqueToolAsyncStatusInhiLbl,"<br/>",torqueToolAsyncStatusInhiIn);
            $("#torqueToolAsyncForm4").append("<br/>",torqueToolAsyncConveyorLbl,"<br/>",torqueToolAsyncConveyorIn);
            $("#torqueToolAsyncForm4").append("<br/>",torqueToolAsyncModelCodeLbl,"<br/>",torqueToolAsyncModelCodeIn);
            $("#torqueToolAsyncForm4").append("<br/>",torqueToolAsyncTrackingLbl,"<br/>",torqueToolAsyncTrackingIn);
            $("#torqueToolAsyncForm4").append("<br/>",torqueToolAsyncIHMLbl,"<br/>",torqueToolAsyncIHMIn);
            $("#torqueToolAsyncForm4").append("<br/>",torqueToolAsyncQDILbl,"<br/>",torqueToolAsyncQDIIn);
            //criar apenas uma vez a estrutura
            torqueToolAsyncStuctCreate = true;
        };
    };
    //########### botão para altera arquivos L5X conforme mudanças#######################
    $(document).on('click','#torqueToolAsyncCreateL5XBtn',torqueToolAsyncReplace);
    //############ Function para trocar as tags no L5x##############################
    // modifique conforme tags do L5X
    function torqueToolAsyncReplace (){
        let stringRplc = torqueToolAsyncL5X;//var em outro js
        let stringRplcHw = torqueToolAsyncHardwareL5X;//var em outro js
        //Replace torqueToolAsyncReplaceMC
        stringRplcHw = replaceAll(stringRplcHw, torqueToolAsyncReplaceMC, $('#torqueToolAsyncMCode').val());
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceMC, $('#torqueToolAsyncMCode').val());
        //Replace torqueToolAsyncReplaceIP
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceIP, $('#torqueToolAsyncIP').val());
        stringRplcHw = replaceAll(stringRplcHw, torqueToolAsyncReplaceIP, $('#torqueToolAsyncIP').val());
        //troca . por ,
        let ipVirgula = replaceAll(torqueToolAsyncReplaceIP,'.',',');
        let ipVirgulaReplace = replaceAll($('#torqueToolAsyncIP').val(),'.',',');
        stringRplc = replaceAll(stringRplc, ipVirgula, ipVirgulaReplace);
        //LEP1 FAULT
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceLep1Flt, $('#torqueToolAsyncLep1Flt').val());
        //LEP1 WARNING
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceLep1Wng, $('#torqueToolAsyncLep1Wng').val());
        //LEP1 DELAY
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceLep1Dly, $('#torqueToolAsyncLep1Dly').val());
        //LEP2 BYPASS
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceLep2Byp, $('#torqueToolAsyncLep2Byp').val());
        //LEP2 IO WARNING
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceLep2IOWng, $('#torqueToolAsyncLep2IOWng').val());
        //KALARM COMM FAULT
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceKalrmCommFlt, $('#torqueToolAsyncKalrmCommFlt').val());
        //KALARM COMM PORT
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceKalrmCommPort, $('#torqueToolAsyncKalrmCommPort').val());
        //KALARM SPEED OR DUPLEX
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceKalrmSpeed, $('#torqueToolAsyncKalrmSpeed').val());
        //KALARM STOP
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceKalrmStop, $('#torqueToolAsyncKalrmStop').val());
        //KALARM Bypass
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceKalrmBypass, $('#torqueToolAsyncKalrmBypass').val());
        //KALARM Release
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceKalrmRelease, $('#torqueToolAsyncKalrmRelease').val());
        //Replace STATUS INHIBITED
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceStatusInhi, $('#torqueToolAsyncStatusInhi').val());
        //IHM
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceIHM, $('#torqueToolAsyncIHM').val());
        //QDI
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceQDI, $('#torqueToolAsyncQDI').val());        
        //CONVEYOR
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceConveyor, $('#torqueToolAsyncConveyor').val());
        //MODEL CODE
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceModelCode, $('#torqueToolAsyncModelCode').val());
        //LINE TRACKING
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceTracking, $('#torqueToolAsyncTracking').val());
        //System
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceSystem, $('#torqueToolAsyncSystem').val());
        //STATION
        stringRplc = replaceAll(stringRplc, torqueToolAsyncReplaceStation, $('#torqueToolAsyncStation').val());
    
        let filename = ('_Async_TT' + $('#torqueToolAsyncMCode').val() + '.L5X');

        downloadStringToFile(stringRplc,('Routine'+filename));
        downloadStringToFile(stringRplcHw,('Hardware'+filename));
    };
});


