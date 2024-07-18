//Rotina - Part pick SCS conveyor synchronous
//Diogo Souza 2024-07-18
//################## Revisoes ##########################
//Criado usando o programa de testes como base, modificado para transportador synchronous e L5X de hardware
//#######################################################################
$(document).ready(function(){ //para executar somente depois que o documento carregar, coisa do jquery
    //################## vars para input/output do L5X ################################
    var partPickSyncCreateL5XBtn = $("<button/>").text("CRIAR L5X").attr({"id":"partPickSyncCreateL5XBtn","class":"downloadBtn"}); //criar arquivo L5X
    var partPickSyncReloadBtn = $("<button/>").text("VOLTAR").attr("class","reloadBtn"); //criar arquivo L5X
    //################ var estrutura ######################################
    var partPickSyncBtn = $("<button/>").text("PART PICK SYNCHRONOUS SCS").attr("id","partPickSyncBtn");//botão para criar estrutura
    var partPickSyncDiv = $("<div/>").attr("id","partPickSyncDiv"); //divisor
    var partPickSyncP = $("<p/>").attr("id","pFooter").text(""); //footer
    // Adicione mais Forms conforme precisar
    //Troque os nome e Ids dos Forms
    var partPickSyncForm1 = $("<form/>").text("--> PART PICK SYNCHRONOUS SCS <--").attr("id","partPickSyncForm1");//Form1
    var partPickSyncForm2 = $("<form/>").text("ANDON").attr("id","partPickSyncForm2");//Form2
    var partPickSyncForm3 = $("<form/>").text("KALARM").attr("id","partPickSyncForm3");//Form3
    var partPickSyncForm4 = $("<form/>").text("MANUAL INPUT").attr("id","partPickSyncForm4");//Form4
    var partPickSyncStuctCreate = false; //verificar criação estrutura do torque tool apenas uma vez
    //################ Lista de Vars ###########################
    //Adicione conforme tags do L5X
    //Faca alteracoes aqui, sempre em trios, replace, elemento de texto e input
    //Depois adicione dentro do Fomr e da function de replace
    //##########################################################
    //Machine Code
    var partPickSyncReplaceMC = '18491'; //ok
    var partPickSyncMCLabel = $("<label/>").text("Machine Code").attr("for","partPickSyncMCode");//Machine Code label
    var partPickSyncMCIn = $("<input/>").attr({"type":"text","id":"partPickSyncMCode","name":"partPickSyncMCode","value":partPickSyncReplaceMC});//Machine Code Input
    //System
    var partPickSyncReplaceSystem = 'Trim2B';//ok
    var partPickSyncSystemLabel = $("<label/>").text("System").attr("for","partPickSyncSystem");//Machine Code label
    var partPickSyncSystemIn = $("<input/>").attr({"type":"text","id":"partPickSyncSystem","name":"partPickSyncSystem","value":partPickSyncReplaceSystem});//System Input
    //IP Address
    var partPickSyncReplaceIP = '192.168.2.73';//ok
    var partPickSyncIPLabel = $("<label/>").text("IP Address").attr("for","partPickSyncIP");// IP label
    var partPickSyncIPIn = $("<input/>").attr({"type":"text","id":"partPickSyncIP","name":"partPickSyncIP","value":partPickSyncReplaceIP});// IP input
    //STATION
    var partPickSyncReplaceStation = '#49';//ok
    var partPickSyncStationLbl = $("<label/>").text("STATION").attr("for","partPickSyncStation");//Station label
    var partPickSyncStationIn = $("<input/>").attr({"type":"text","id":"partPickSyncStation","name":"partPickSyncStation","value":partPickSyncReplaceStation});//station input
    //LEP1 FAULT
    var partPickSyncReplaceLep1Flt = '#20';//ok
    var partPickSyncLep1FltLbl = $("<label/>").text("LEP1 FAULT").attr("for","partPickSyncLep1Flt");//LEP1 FAULT label
    var partPickSyncLep1FltIn = $("<input/>").attr({"type":"text","id":"partPickSyncLep1Flt","name":"partPickSyncLep1Flt","value":partPickSyncReplaceLep1Flt});//LEP1 FAULT input
    //LEP1 WARNING
    var partPickSyncReplaceLep1Wng = '#21';//ok
    var partPickSyncLep1WngLbl = $("<label/>").text("LEP1 WARNING").attr("for","partPickSyncLep1Wng");//LEP1 WARNING label
    var partPickSyncLep1WngIn = $("<input/>").attr({"type":"text","id":"partPickSyncLep1Wng","name":"partPickSyncLep1Wng","value":partPickSyncReplaceLep1Wng});//LEP1 WARNING input
    //LEP2 BYPASS
    var partPickSyncReplaceLep2Byp = '#23';//ok
    var partPickSyncLep2BypLbl = $("<label/>").text("LEP2 BYPASS").attr("for","partPickSyncLep2Byp");//LEP2 BYPASS label
    var partPickSyncLep2BypIn = $("<input/>").attr({"type":"text","id":"partPickSyncLep2Byp","name":"partPickSyncLep2Byp","value":partPickSyncReplaceLep2Byp});//LEP2 BYPASS input
    //LEP2 IO WARNING
    var partPickSyncReplaceLep2IOWng = '#24';//ok
    var partPickSyncLep2IOWngLbl = $("<label/>").text("LEP2 IO WARNING").attr("for","partPickSyncLep2IOWng");//LEP2 IO WARNING label
    var partPickSyncLep2IOWngIn = $("<input/>").attr({"type":"text","id":"partPickSyncLep2IOWng","name":"partPickSyncLep2IOWng","value":partPickSyncReplaceLep2IOWng});//LEP2 IO WARNING input
    //KALARM COMM FAULT
    var partPickSyncReplaceKalrmCommFlt = '#53';//ok
    var partPickSyncKalrmCommFltLbl = $("<label/>").text("KALARM COMM FAULT").attr("for","partPickSyncKalrmCommFlt");//KALARM COMM FAULT label
    var partPickSyncKalrmCommFltIn = $("<input/>").attr({"type":"text","id":"partPickSyncKalrmCommFlt","name":"partPickSyncKalrmCommFlt","value":partPickSyncReplaceKalrmCommFlt});//KALARM COMM FAULT input
    //KALARM COMM PORT
    var partPickSyncReplaceKalrmCommPort = '#54';//ok
    var partPickSyncKalrmCommPortLbl = $("<label/>").text("KALARM COMM PORT").attr("for","partPickSyncKalrmCommPort");//KALARM COMM PORT label
    var partPickSyncKalrmCommPortIn = $("<input/>").attr({"type":"text","id":"partPickSyncKalrmCommPort","name":"partPickSyncKalrmCommPort","value":partPickSyncReplaceKalrmCommPort});//KALARM COMM PORT input
    //KALARM SPEED OR DUPLEX
    var partPickSyncReplaceKalrmSpeed = '#55';//ok
    var partPickSyncKalrmSpeedLbl = $("<label/>").text("KALARM SPEED OR DUPLEX").attr("for","partPickSyncKalrmSpeed");//KALARM SPEED OR DUPLEX label
    var partPickSyncKalrmSpeedIn = $("<input/>").attr({"type":"text","id":"partPickSyncKalrmSpeed","name":"partPickSyncKalrmSpeed","value":partPickSyncReplaceKalrmSpeed});//KALARM SPEED OR DUPLEX input
    //KALARM STOP
    var partPickSyncReplaceKalrmStop = '#56';//ok
    var partPickSyncKalrmStopLbl = $("<label/>").text("KALARM STOP").attr("for","partPickSyncKalrmStop");//KALARM STOP label
    var partPickSyncKalrmStopIn = $("<input/>").attr({"type":"text","id":"partPickSyncKalrmStop","name":"partPickSyncKalrmStop","value":partPickSyncReplaceKalrmStop});//KALARM STOP input
    //KALARM Bypass
    var partPickSyncReplaceKalrmBypass = '#57';//ok
    var partPickSyncKalrmBypassLbl = $("<label/>").text("KALARM BYPASS").attr("for","partPickSyncKalrmBypass");//KALARM Bypass label
    var partPickSyncKalrmBypassIn = $("<input/>").attr({"type":"text","id":"partPickSyncKalrmBypass","name":"partPickSyncKalrmBypass","value":partPickSyncReplaceKalrmBypass});//KALARM Bypass input
    //KALARM Release
    var partPickSyncReplaceKalrmRelease = '#58';//ok
    var partPickSyncKalrmReleaseLbl = $("<label/>").text("KALARM RELEASE").attr("for","partPickSyncKalrmRelease");//KALARM Release label
    var partPickSyncKalrmReleaseIn = $("<input/>").attr({"type":"text","id":"partPickSyncKalrmRelease","name":"partPickSyncKalrmRelease","value":partPickSyncReplaceKalrmRelease});//KALARM Release input
    //KALARM BK Fault
    var partPickSyncReplaceKalrmBKFlt = '#104';//ok
    var partPickSyncKalrmBKFltLbl = $("<label/>").text("KALARM BK FAULT").attr("for","partPickSyncKalrmBKFlt");//KALARM BKFlt label
    var partPickSyncKalrmBKFltIn = $("<input/>").attr({"type":"text","id":"partPickSyncKalrmBKFlt","name":"partPickSyncKalrmBKFlt","value":partPickSyncReplaceKalrmBKFlt});//KALARM BKFlt input
    //KALARM BK Cfg
    var partPickSyncReplaceKalrmBKCfg = '#105';//ok
    var partPickSyncKalrmBKCfgLbl = $("<label/>").text("KALARM BK CONFIGURATION FAULT").attr("for","partPickSyncKalrmBKCfg");//KALARM BKCfg label
    var partPickSyncKalrmBKCfgIn = $("<input/>").attr({"type":"text","id":"partPickSyncKalrmBKCfg","name":"partPickSyncKalrmBKCfg","value":partPickSyncReplaceKalrmBKCfg});//KALARM BKCfg input
    //KALARM BK Input
    var partPickSyncReplaceKalrmBKInput = '#106';//ok
    var partPickSyncKalrmBKInputLbl = $("<label/>").text("KALARM BK INPUT FAULT").attr("for","partPickSyncKalrmBKInput");//KALARM BKInput label
    var partPickSyncKalrmBKInputIn = $("<input/>").attr({"type":"text","id":"partPickSyncKalrmBKInput","name":"partPickSyncKalrmBKInput","value":partPickSyncReplaceKalrmBKInput});//KALARM BKInput input
    //KALARM BK Output
    var partPickSyncReplaceKalrmBKOutput = '#107';//ok
    var partPickSyncKalrmBKOutputLbl = $("<label/>").text("KALARM BK OUTPUT FAULT").attr("for","partPickSyncKalrmBKOutput");//KALARM BKOutput label
    var partPickSyncKalrmBKOutputIn = $("<input/>").attr({"type":"text","id":"partPickSyncKalrmBKOutput","name":"partPickSyncKalrmBKOutput","value":partPickSyncReplaceKalrmBKOutput});//KALARM BKOutput input    
    //STATUS INHIBITED
    var partPickSyncReplaceStatusInhi = 'Trim2B_1StatusInhibited.4';//ok
    var partPickSyncStatusInhiLbl = $("<label/>").text("STATUS INHIBITED").attr("for","partPickSyncStatusInhi");//STATUS INHIBITED label
    var partPickSyncStatusInhiIn = $("<input/>").attr({"type":"text","id":"partPickSyncStatusInhi","name":"partPickSyncStatusInhi","value":partPickSyncReplaceStatusInhi});//STATUS INHIBITED input
    //CONVEYOR
    var partPickSyncReplaceConveyor = 'Conv_Trim2B';//ok
    var partPickSyncConveyorLbl = $("<label/>").text("CONVEYOR").attr("for","partPickSyncConveyor");//CONVEYOR label
    var partPickSyncConveyorIn = $("<input/>").attr({"type":"text","id":"partPickSyncConveyor","name":"partPickSyncConveyor","value":partPickSyncReplaceConveyor});//CONVEYOR input
    //IHM
    var partPickSyncReplaceIHM = 'ToolStsDisp_Trim2B.ToolNumber[125]';//ok
    var partPickSyncIHMLbl = $("<label/>").text("IHM").attr("for","partPickSyncIHM");//IHM label
    var partPickSyncIHMIn = $("<input/>").attr({"type":"text","id":"partPickSyncIHM","name":"partPickSyncIHM","value":partPickSyncReplaceIHM});//IHM input
    //QDI
    var partPickSyncReplaceQDI = 'QDIMerging_Trim2B[16].EPA5';//ok
    var partPickSyncQDILbl = $("<label/>").text("QDI").attr("for","partPickSyncQDI");//QDI label
    var partPickSyncQDIIn = $("<input/>").attr({"type":"text","id":"partPickSyncQDI","name":"partPickSyncQDI","value":partPickSyncReplaceQDI});//QDI input
    //MODEL CODE
    var partPickSyncReplaceModelCode = 'StringTrim2B_Station49_ModelCode';//ok
    var partPickSyncModelCodeLbl = $("<label/>").text("MODEL CODE").attr("for","partPickSyncModelCode");//MODEL CODE label
    var partPickSyncModelCodeIn = $("<input/>").attr({"type":"text","id":"partPickSyncModelCode","name":"partPickSyncModelCode","value":partPickSyncReplaceModelCode});//MODEL CODE input
    //MODEL VARIANT
    var partPickSyncReplaceModelVariant = 'StringTrim2B_Station49_Variant12';//ok
    var partPickSyncModelVariantLbl = $("<label/>").text("MODEL VARIANT").attr("for","partPickSyncModelVariant");//MODEL VARIANT label
    var partPickSyncModelVariantIn = $("<input/>").attr({"type":"text","id":"partPickSyncModelVariant","name":"partPickSyncModelVariant","value":partPickSyncReplaceModelVariant});//MODEL VARIANT input
    //LINE TRACKING
    var partPickSyncReplaceTracking = 'Trim2B_Tracking[16]';//ok
    var partPickSyncTrackingLbl = $("<label/>").text("LINE TRACKING").attr("for","partPickSyncTracking");//LINE TRACKING label
    var partPickSyncTrackingIn = $("<input/>").attr({"type":"text","id":"partPickSyncTracking","name":"partPickSyncTracking","value":partPickSyncReplaceTracking});//LINE TRACKING input
    //##############################################################
    //################## Adiciona no Body ##########################
    //##############################################################
    //Adiciona na tela Principal
    $("body").after(partPickSyncDiv);//adiciona divisão
    $("#partPickSyncDiv").append(partPickSyncBtn);//adiciona o botão 
    $("#partPickSyncBtn").click(partPickSyncFunction);//chama função quando o botão for clicado
   //############## cria estrutura para torque tool #########################
    function partPickSyncFunction(){
        if (partPickSyncStuctCreate == false) { //verificação para criar apenas uma vez
            $("button").hide(); //esconde os outros botoes
            //Adicione mais Forms se precisar
            //$("body").append(partPickSyncXMLIn);//Cria botoes
            $("body").append(partPickSyncForm1);//Form1
            $("body").append("<br/>",partPickSyncForm2);//Form2
            $("body").append("<br/>",partPickSyncForm3);//Form3
            $("body").append("<br/>",partPickSyncForm4);//Form3
            //Cria botoes
            $("body").append(partPickSyncP);//Cria P
            $("body").append(partPickSyncCreateL5XBtn);//Cria botoes
            $("body").append(partPickSyncReloadBtn);//Cria botoes
            //Form1 - Machine Code e IP - Adicione conforme precisar
            $("#partPickSyncForm1").append("<br/>",partPickSyncMCLabel,"<br/>",partPickSyncMCIn);
            $("#partPickSyncForm1").append("<br/>",partPickSyncIPLabel,"<br/>",partPickSyncIPIn);
            $("#partPickSyncForm1").append("<br/>",partPickSyncSystemLabel,"<br/>",partPickSyncSystemIn);
            //Form2 - Andon 
            $("#partPickSyncForm2").append("<br/>",partPickSyncStationLbl,"<br/>",partPickSyncStationIn);
            $("#partPickSyncForm2").append("<br/>",partPickSyncLep1FltLbl,"<br/>",partPickSyncLep1FltIn);
            $("#partPickSyncForm2").append("<br/>",partPickSyncLep1WngLbl,"<br/>",partPickSyncLep1WngIn);
            $("#partPickSyncForm2").append("<br/>",partPickSyncLep2BypLbl,"<br/>",partPickSyncLep2BypIn);
            $("#partPickSyncForm2").append("<br/>",partPickSyncLep2IOWngLbl,"<br/>",partPickSyncLep2IOWngIn);
            //Form 3 - Kalarm
            $("#partPickSyncForm3").append("<br/>",partPickSyncKalrmCommFltLbl,"<br/>",partPickSyncKalrmCommFltIn);
            $("#partPickSyncForm3").append("<br/>",partPickSyncKalrmCommPortLbl,"<br/>",partPickSyncKalrmCommPortIn);
            $("#partPickSyncForm3").append("<br/>",partPickSyncKalrmSpeedLbl,"<br/>",partPickSyncKalrmSpeedIn);
            $("#partPickSyncForm3").append("<br/>",partPickSyncKalrmStopLbl,"<br/>",partPickSyncKalrmStopIn);
            $("#partPickSyncForm3").append("<br/>",partPickSyncKalrmBypassLbl,"<br/>",partPickSyncKalrmBypassIn);
            $("#partPickSyncForm3").append("<br/>",partPickSyncKalrmReleaseLbl,"<br/>",partPickSyncKalrmReleaseIn);
            $("#partPickSyncForm3").append("<br/>",partPickSyncKalrmBKFltLbl,"<br/>",partPickSyncKalrmBKFltIn);
            $("#partPickSyncForm3").append("<br/>",partPickSyncKalrmBKCfgLbl,"<br/>",partPickSyncKalrmBKCfgIn);
            $("#partPickSyncForm3").append("<br/>",partPickSyncKalrmBKInputLbl,"<br/>",partPickSyncKalrmBKInputIn);
            $("#partPickSyncForm3").append("<br/>",partPickSyncKalrmBKOutputLbl,"<br/>",partPickSyncKalrmBKOutputIn);
            //Form 4 - tags manuais
            $("#partPickSyncForm4").append("<br/>",partPickSyncStatusInhiLbl,"<br/>",partPickSyncStatusInhiIn);
            $("#partPickSyncForm4").append("<br/>",partPickSyncConveyorLbl,"<br/>",partPickSyncConveyorIn);
            $("#partPickSyncForm4").append("<br/>",partPickSyncModelCodeLbl,"<br/>",partPickSyncModelCodeIn);
            $("#partPickSyncForm4").append("<br/>",partPickSyncModelVariantLbl,"<br/>",partPickSyncModelVariantIn);
            $("#partPickSyncForm4").append("<br/>",partPickSyncTrackingLbl,"<br/>",partPickSyncTrackingIn);
            $("#partPickSyncForm4").append("<br/>",partPickSyncIHMLbl,"<br/>",partPickSyncIHMIn);
            $("#partPickSyncForm4").append("<br/>",partPickSyncQDILbl,"<br/>",partPickSyncQDIIn);
            //criar apenas uma vez a estrutura
            partPickSyncStuctCreate = true;
        };
    };
    //########### botão para altera arquivos L5X conforme mudanças#######################
    $(document).on('click','#partPickSyncCreateL5XBtn',partPickSyncReplace);
    //############ Function para trocar as tags no L5x##############################
    // modifique conforme tags do L5X
    function partPickSyncReplace (){
        let stringRplc = partPickSyncL5X;//var em outro js
        let stringRplcHw = partPickSyncHardwareL5X;//var em outro js
        //Replace partPickSyncReplaceMC
        stringRplcHw = replaceAll(stringRplcHw, partPickSyncReplaceMC, $('#partPickSyncMCode').val());
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceMC, $('#partPickSyncMCode').val());
        //Replace partPickSyncReplaceIP
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceIP, $('#partPickSyncIP').val());
        stringRplcHw = replaceAll(stringRplcHw, partPickSyncReplaceIP, $('#partPickSyncIP').val());
        //troca . por ,
        let ipVirgula = replaceAll(partPickSyncReplaceIP,'.',',');
        let ipVirgulaReplace = replaceAll($('#partPickSyncIP').val(),'.',',');
        stringRplc = replaceAll(stringRplc, ipVirgula, ipVirgulaReplace);
        //STATION
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceStation, $('#partPickSyncStation').val());
        //LEP1 FAULT
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceLep1Flt, $('#partPickSyncLep1Flt').val());
        //LEP1 WARNING
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceLep1Wng, $('#partPickSyncLep1Wng').val());
        //LEP2 BYPASS
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceLep2Byp, $('#partPickSyncLep2Byp').val());
        //LEP2 IO WARNING
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceLep2IOWng, $('#partPickSyncLep2IOWng').val());
        //KALARM COMM FAULT
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceKalrmCommFlt, $('#partPickSyncKalrmCommFlt').val());
        //KALARM COMM PORT
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceKalrmCommPort, $('#partPickSyncKalrmCommPort').val());
        //KALARM SPEED OR DUPLEX
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceKalrmSpeed, $('#partPickSyncKalrmSpeed').val());
        //KALARM STOP
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceKalrmStop, $('#partPickSyncKalrmStop').val());
        //KALARM Bypass
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceKalrmBypass, $('#partPickSyncKalrmBypass').val());
        //KALARM Release
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceKalrmRelease, $('#partPickSyncKalrmRelease').val());
        //KALARM BK Flt
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceKalrmBKFlt, $('#partPickSyncKalrmBKFlt').val());
        //KALARM BK Cfg
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceKalrmBKCfg, $('#partPickSyncKalrmBKCfg').val());
        //KALARM BK Input
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceKalrmBKInput, $('#partPickSyncKalrmBKInput').val());
        //KALARM BK Output
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceKalrmBKOutput, $('#partPickSyncKalrmBKOutput').val());
        //Replace STATUS INHIBITED
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceStatusInhi, $('#partPickSyncStatusInhi').val());
        //CONVEYOR
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceConveyor, $('#partPickSyncConveyor').val());
        //MODEL CODE
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceModelCode, $('#partPickSyncModelCode').val());
        //Variant
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceModelVariant, $('#partPickSyncModelVariant').val());
        //IHM
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceIHM, $('#partPickSyncIHM').val());
        //QDI
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceQDI, $('#partPickSyncQDI').val());
        //LINE TRACKING
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceTracking, $('#partPickSyncTracking').val());
        //System
        stringRplc = replaceAll(stringRplc, partPickSyncReplaceSystem, $('#partPickSyncSystem').val());
       
        let filename = ('_Sync_PP' + $('#partPickSyncMCode').val() + '.L5X');

        downloadStringToFile(stringRplc,('Routine'+filename));
        downloadStringToFile(stringRplcHw,('Hardware'+filename));
    };
});