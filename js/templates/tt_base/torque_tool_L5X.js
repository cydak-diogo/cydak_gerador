var torquetoolL5XBase = 

`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<RSLogix5000Content SchemaRevision="1.0" SoftwareRevision="32.04" TargetName="TT12345" TargetType="Routine" TargetSubType="RLL" TargetClass="Standard" ContainsContext="true" Owner="Automation, Amantrini Automação" ExportDate="Wed Jul 03 17:04:09 2024" ExportOptions="References NoRawData L5KData DecoratedData Context Dependencies ForceProtectedEncoding AllProjDocTrans">
<Controller Use="Context" Name="LEP_FINAL">
<DataTypes Use="Context">
<DataType Name="String18" Family="StringFamily" Class="User">
<Members>
<Member Name="LEN" DataType="DINT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="DATA" DataType="SINT" Dimension="18" Radix="ASCII" Hidden="false" ExternalAccess="Read/Write"/>
</Members>
</DataType>
<DataType Name="u_GepicsBuildDataStructure" Family="NoFamily" Class="User">
<Members>
<Member Name="PVI" DataType="STRING" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="PONO" DataType="STRING" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="SVI" DataType="STRING" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="CSN" DataType="STRING" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="CSNPrefix" DataType="STRING" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="VIN" DataType="STRING" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="ModelCode" DataType="STRING" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="WorkSeq" DataType="STRING" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="Variant" DataType="STRING" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="Part" DataType="u_String4" Dimension="200" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="PDC" DataType="INT" Dimension="50" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write"/>
</Members>
<Dependencies>
<Dependency Type="DataType" Name="u_String4"/>
</Dependencies>
</DataType>
<DataType Name="u_LEP_to_Tool" Family="NoFamily" Class="User">
<Members>
<Member Name="ZZZZZZZZZZu_LEPtoToo0" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="true" ExternalAccess="Read/Write"/>
<Member Name="LEP_HB" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_LEPtoToo0" BitNumber="0" ExternalAccess="Read/Write">
<Description>
<![CDATA[LEP Communication Heartbeat (Fieldbus handshake)]]>
</Description>
</Member>
<Member Name="Tool_Disable" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_LEPtoToo0" BitNumber="1" ExternalAccess="Read/Write">
<Description>
<![CDATA[Tool Disable]]>
</Description>
</Member>
<Member Name="LEP_CommOK" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_LEPtoToo0" BitNumber="2" ExternalAccess="Read/Write">
<Description>
<![CDATA[Always high Communication bit]]>
</Description>
</Member>
<Member Name="LEP_PWP" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_LEPtoToo0" BitNumber="3" ExternalAccess="Read/Write">
<Description>
<![CDATA[Programmable warning point (> 70% footprint travel)]]>
</Description>
</Member>
<Member Name="LEP_FPS" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_LEPtoToo0" BitNumber="4" ExternalAccess="Read/Write">
<Description>
<![CDATA[Conveyor at FPS]]>
</Description>
</Member>
<Member Name="LEP_NoBLD" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_LEPtoToo0" BitNumber="5" ExternalAccess="Read/Write">
<Description>
<![CDATA[No Build (GAP) / No processing]]>
</Description>
</Member>
<Member Name="LEP_VIN" DataType="String18" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[VIN no to Atlas controller]]>
</Description>
</Member>
</Members>
<Dependencies>
<Dependency Type="DataType" Name="String18"/>
</Dependencies>
</DataType>
<DataType Name="u_String30" Family="StringFamily" Class="User">
<Members>
<Member Name="LEN" DataType="DINT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="DATA" DataType="SINT" Dimension="30" Radix="ASCII" Hidden="false" ExternalAccess="Read/Write"/>
</Members>
</DataType>
<DataType Name="u_String4" Family="StringFamily" Class="User">
<Members>
<Member Name="LEN" DataType="DINT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="DATA" DataType="SINT" Dimension="4" Radix="ASCII" Hidden="false" ExternalAccess="Read/Write"/>
</Members>
</DataType>
<DataType Name="u_Tool_to_LEP" Family="NoFamily" Class="User">
<Members>
<Member Name="ToolStatusBit" DataType="u_ToolStatusBits" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Tool StatusBits]]>
</Description>
</Member>
<Member Name="VinEcho" DataType="SINT" Dimension="30" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="PSETID" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="ErrorCode" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="HeartBeat" DataType="TIMER" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
</Members>
<Dependencies>
<Dependency Type="DataType" Name="u_ToolStatusBits"/>
</Dependencies>
</DataType>
<DataType Name="u_ToolStatusBits" Family="NoFamily" Class="User">
<Description>
<![CDATA[Torque Tool Status Bits]]>
</Description>
<Members>
<Member Name="ZZZZZZZZZZu_ToolStat0" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="true" ExternalAccess="Read/Write"/>
<Member Name="PF_Ready" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat0" BitNumber="0" ExternalAccess="Read/Write">
<Description>
<![CDATA[PoweFocus started healthily.
1 - PF ready
0 - Error occured]]>
</Description>
</Member>
<Member Name="VID_Rcvd" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat0" BitNumber="1" ExternalAccess="Read/Write">
<Description>
<![CDATA[VID Received Acknowledge (Identifier received )]]>
</Description>
</Member>
<Member Name="LEP_HB" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat0" BitNumber="2" ExternalAccess="Read/Write">
<Description>
<![CDATA[Heatbeat echo (Fieldbus Handshake Ack)]]>
</Description>
</Member>
<Member Name="SSW_Release" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat0" BitNumber="3" ExternalAccess="Read/Write">
<Description>
<![CDATA[Selector Switch - Release Job from these Error-Proofing Operation  (Single Job Release)]]>
</Description>
</Member>
<Member Name="SSW_Bypass" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat0" BitNumber="4" ExternalAccess="Read/Write">
<Description>
<![CDATA[Selector Switch - Bypass Error-Proofing for these OperationSelector   (Continuos Job Release)]]>
</Description>
</Member>
<Member Name="Spare1" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat0" BitNumber="5" ExternalAccess="Read/Write">
<Description>
<![CDATA[Spare]]>
</Description>
</Member>
<Member Name="Spare2" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat0" BitNumber="6" ExternalAccess="Read/Write">
<Description>
<![CDATA[Spare]]>
</Description>
</Member>
<Member Name="Spare3" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat0" BitNumber="7" ExternalAccess="Read/Write">
<Description>
<![CDATA[Spare]]>
</Description>
</Member>
<Member Name="ZZZZZZZZZZu_ToolStat9" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="true" ExternalAccess="Read/Write"/>
<Member Name="TightOK" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat9" BitNumber="0" ExternalAccess="Read/Write">
<Description>
<![CDATA[Tightening status OK ( P set OK)]]>
</Description>
</Member>
<Member Name="TightNOK" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat9" BitNumber="1" ExternalAccess="Read/Write">
<Description>
<![CDATA[Tightening status NOK (P Set Not OK )]]>
</Description>
</Member>
<Member Name="ToolRun" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat9" BitNumber="2" ExternalAccess="Read/Write">
<Description>
<![CDATA[Torque Tool in Operation signal. (Tool Running)]]>
</Description>
</Member>
<Member Name="JobOK" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat9" BitNumber="3" ExternalAccess="Read/Write">
<Description>
<![CDATA[Job status OK  ( All Pset Ok)]]>
</Description>
</Member>
<Member Name="JobNOK" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat9" BitNumber="4" ExternalAccess="Read/Write">
<Description>
<![CDATA[Job status Not OK]]>
</Description>
</Member>
<Member Name="JobRun" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat9" BitNumber="5" ExternalAccess="Read/Write">
<Description>
<![CDATA[Torque Tool Controller 'In Cycle' signal. (Job Running)]]>
</Description>
</Member>
<Member Name="Spare4" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat9" BitNumber="6" ExternalAccess="Read/Write">
<Description>
<![CDATA[Spare]]>
</Description>
</Member>
<Member Name="Spare5" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_ToolStat9" BitNumber="7" ExternalAccess="Read/Write">
<Description>
<![CDATA[Spare]]>
</Description>
</Member>
</Members>
</DataType>
<DataType Name="u_TTStatusBits" Family="NoFamily" Class="User">
<Members>
<Member Name="ZZZZZZZZZZu_TTStatus0" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="true" ExternalAccess="Read/Write"/>
<Member Name="JobOK" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_TTStatus0" BitNumber="0" ExternalAccess="Read/Write"/>
<Member Name="JobNOK" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_TTStatus0" BitNumber="1" ExternalAccess="Read/Write"/>
<Member Name="Bypass" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_TTStatus0" BitNumber="2" ExternalAccess="Read/Write"/>
<Member Name="Release" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_TTStatus0" BitNumber="3" ExternalAccess="Read/Write"/>
<Member Name="Pono" DataType="STRING" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="ZZZZZZZZZZu_TTStatus6" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="true" ExternalAccess="Read/Write"/>
<Member Name="ToolBypass" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_TTStatus6" BitNumber="0" ExternalAccess="Read/Write"/>
<Member Name="CommOk" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZu_TTStatus6" BitNumber="1" ExternalAccess="Read/Write"/>
<Member Name="StationName" DataType="STRING" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
</Members>
</DataType>
<DataType Name="zc_EnetNetwork" Family="NoFamily" Class="User">
<Description>
<![CDATA[Ethernet
Network
Data
<@VER 1.312>
<@NO EDITS>]]>
</Description>
<Members>
<Member Name="ZZZZZZZZZZzc_EnetNet0" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="true" ExternalAccess="Read/Write"/>
<Member Name="FromHMIRefresh" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzc_EnetNet0" BitNumber="0" ExternalAccess="Read/Write">
<Description>
<![CDATA[HMI Request
Refresh
Network]]>
</Description>
</Member>
<Member Name="RefreshAll" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzc_EnetNet0" BitNumber="1" ExternalAccess="Read/Write">
<Description>
<![CDATA[Clears Entire Tag, Then Calls For A Rescan Of The Entire Network]]>
</Description>
</Member>
<Member Name="NetworkNumber" DataType="DINT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Number Of Network (ie 1,2,3,4,5...)]]>
</Description>
</Member>
<Member Name="LoadErrorAddress" DataType="DINT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Fourth Octet
Of Device
Configuration
Error]]>
</Description>
</Member>
<Member Name="DeviceData" DataType="zz_EnetDeviceData" Dimension="26" Radix="NullType" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[List Of Data For All Devices Programmed On This Network]]>
</Description>
</Member>
<Member Name="Comm" DataType="zz_EthernetModuleData" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write"/>
</Members>
<Dependencies>
<Dependency Type="DataType" Name="zz_EnetDeviceData"/>
<Dependency Type="DataType" Name="zz_EthernetModuleData"/>
</Dependencies>
</DataType>
<DataType Name="zc_Flasher" Family="NoFamily" Class="User">
<Description>
<![CDATA[Controller Flasher
<@VER 1.000>
<@NO EDITS>]]>
</Description>
<Members>
<Member Name="ZZZZZZZZZZzc_Flasher0" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="true" ExternalAccess="Read/Write"/>
<Member Name="Norm" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzc_Flasher0" BitNumber="0" ExternalAccess="Read/Write">
<Description>
<![CDATA[Normal flash rate]]>
</Description>
</Member>
<Member Name="Fast" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzc_Flasher0" BitNumber="1" ExternalAccess="Read/Write">
<Description>
<![CDATA[Fast flash rate]]>
</Description>
</Member>
<Member Name="Slow" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzc_Flasher0" BitNumber="2" ExternalAccess="Read/Write">
<Description>
<![CDATA[Slow flash rate]]>
</Description>
</Member>
<Member Name="Timer" DataType="TIMER" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Flash timer]]>
</Description>
</Member>
</Members>
</DataType>
<DataType Name="zd_TorqueTool_AtlasCopco" Family="NoFamily" Class="User">
<Description>
<![CDATA[Specific to LEP-Torque Tool]]>
</Description>
<Members>
<Member Name="Comm" DataType="zz_EthernetModuleData" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Ethernet Communication Data]]>
</Description>
</Member>
<Member Name="FaultDelay" DataType="TIMER" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Input/Output Fault Delay Timer]]>
</Description>
</Member>
<Member Name="AuxPwrNotOnTmr" DataType="TIMER" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Aux Power Not On Delay Timer]]>
</Description>
</Member>
<Member Name="AuxPwrNotOffTmr" DataType="TIMER" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Aux Power Not Off Delay Timer]]>
</Description>
</Member>
<Member Name="In" DataType="SINT" Dimension="128" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write"/>
<Member Name="Out" DataType="SINT" Dimension="128" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write"/>
</Members>
<Dependencies>
<Dependency Type="DataType" Name="zz_EthernetModuleData"/>
</Dependencies>
</DataType>
<DataType Name="zz_EnetDeviceData" Family="NoFamily" Class="User">
<Description>
<![CDATA[Enet Node
Common Data
<@VER 1.322>
<@NO EDITS>]]>
</Description>
<Members>
<Member Name="ZZZZZZZZZZzz_EnetDev0" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="true" ExternalAccess="Read/Write"/>
<Member Name="CommOk" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="0" ExternalAccess="Read/Write">
<Description>
<![CDATA[CommOK For This Device]]>
</Description>
</Member>
<Member Name="WebPageAvail" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="1" ExternalAccess="Read/Write">
<Description>
<![CDATA[This Device Has A Web Browser Available]]>
</Description>
</Member>
<Member Name="TwoPortsConnected" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="2" ExternalAccess="Read/Write">
<Description>
<![CDATA[Both Enet Ports Should Have Connections]]>
</Description>
</Member>
<Member Name="LinkStatusAvail" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="3" ExternalAccess="Read/Write">
<Description>
<![CDATA[Device Has Link Status Available]]>
</Description>
</Member>
<Member Name="PLCEnetPort" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="4" ExternalAccess="Read/Write">
<Description>
<![CDATA[Device Is PLC Network Interface]]>
</Description>
</Member>
<Member Name="EnetSwitch" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="5" ExternalAccess="Read/Write">
<Description>
<![CDATA[Device Is An Ethernet Swtich]]>
</Description>
</Member>
<Member Name="Connected" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="6" ExternalAccess="Read/Write">
<Description>
<![CDATA[Device Has An I/O Connection To the PLC]]>
</Description>
</Member>
<Member Name="CommOkLastScan" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="7" ExternalAccess="Read/Write">
<Description>
<![CDATA[Comm Ok Status From Previous Scan]]>
</Description>
</Member>
<Member Name="RackPath1" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[1st Param In Path Statement Typically = 1]]>
</Description>
</Member>
<Member Name="RackPath2" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[2nd Param In Path Statement = Slot #]]>
</Description>
</Member>
<Member Name="EntryStatus" DataType="INT" Dimension="0" Radix="Hex" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Entry Status Of Device If Available]]>
</Description>
</Member>
<Member Name="FaultCode" DataType="INT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Fault Code Of Device If Available]]>
</Description>
</Member>
<Member Name="FaultInfo" DataType="DINT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Fault Info Of Device If Available]]>
</Description>
</Member>
<Member Name="LastFaultCode" DataType="INT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Fault Code Storage]]>
</Description>
</Member>
<Member Name="FirstIPOctet" DataType="INT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[1st / Highest IP Address Octet]]>
</Description>
</Member>
<Member Name="SecondIPOctet" DataType="INT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[2nd IP Address Octet]]>
</Description>
</Member>
<Member Name="ThirdIPOctet" DataType="INT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[3rd IP Address Octet]]>
</Description>
</Member>
<Member Name="FourthIPOctet" DataType="INT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[4th / Lowest IP Address Octet]]>
</Description>
</Member>
<Member Name="DeviceNameID" DataType="DINT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Look Up Table For Device Name Textlist]]>
</Description>
</Member>
<Member Name="DeviceType" DataType="DINT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Device ID Number]]>
</Description>
</Member>
<Member Name="Ports" DataType="DINT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Number Of Ports On Device]]>
</Description>
</Member>
<Member Name="Link" DataType="zz_EnetDeviceLinkStatus" Dimension="0" Radix="NullType" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Ethernet Device Link Status]]>
</Description>
</Member>
</Members>
<Dependencies>
<Dependency Type="DataType" Name="zz_EnetDeviceLinkStatus"/>
</Dependencies>
</DataType>
<DataType Name="zz_EnetDeviceLinkStatus" Family="NoFamily" Class="User">
<Description>
<![CDATA[Enet Node
Link Status Data
<@VER 1.312>
<@NO EDITS>]]>
</Description>
<Members>
<Member Name="ZZZZZZZZZZzz_EnetDev0" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="true" ExternalAccess="Read/Write"/>
<Member Name="LinkStatus1" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="0" ExternalAccess="Read/Write">
<Description>
<![CDATA[Port Active]]>
</Description>
</Member>
<Member Name="LinkStatus2" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="1" ExternalAccess="Read/Write">
<Description>
<![CDATA[Port Active]]>
</Description>
</Member>
<Member Name="AutoNegotiate1" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="2" ExternalAccess="Read/Write">
<Description>
<![CDATA[1 = Auto Negotiate 0 = Fixed Speed/Duplex]]>
</Description>
</Member>
<Member Name="AutoNegotiate2" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="3" ExternalAccess="Read/Write">
<Description>
<![CDATA[1 = Auto Negotiate 0 = Fixed Speed/Duplex]]>
</Description>
</Member>
<Member Name="Duplex1" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="4" ExternalAccess="Read/Write">
<Description>
<![CDATA[1 = Full Duplex 0 = Half Duplex]]>
</Description>
</Member>
<Member Name="Duplex2" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="5" ExternalAccess="Read/Write">
<Description>
<![CDATA[1 = Full Duplex 0 = Half Duplex]]>
</Description>
</Member>
<Member Name="Scanned" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="6" ExternalAccess="Read/Write">
<Description>
<![CDATA[Device Status Current]]>
</Description>
</Member>
<Member Name="Port1Ok" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev0" BitNumber="7" ExternalAccess="Read/Write">
<Description>
<![CDATA[All Comm Ok for Port]]>
</Description>
</Member>
<Member Name="ZZZZZZZZZZzz_EnetDev9" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="true" ExternalAccess="Read/Write"/>
<Member Name="Port2Ok" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev9" BitNumber="0" ExternalAccess="Read/Write">
<Description>
<![CDATA[All Comm Ok for Port]]>
</Description>
</Member>
<Member Name="Port1Speed100" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev9" BitNumber="1" ExternalAccess="Read/Write">
<Description>
<![CDATA[Value contains the port speed for the node.]]>
</Description>
</Member>
<Member Name="Port2Speed100" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_EnetDev9" BitNumber="2" ExternalAccess="Read/Write">
<Description>
<![CDATA[Value contains the port speed for the node.]]>
</Description>
</Member>
<Member Name="PortWarning" DataType="INT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Port # With Warning]]>
</Description>
</Member>
</Members>
</DataType>
<DataType Name="zz_EthernetModuleData" Family="NoFamily" Class="User">
<Description>
<![CDATA[Ethernet
Communication
Data
<@VER 1.312>
<@NO EDITS>]]>
</Description>
<Members>
<Member Name="ZZZZZZZZZZzz_Etherne0" DataType="SINT" Dimension="0" Radix="Decimal" Hidden="true" ExternalAccess="Read/Write"/>
<Member Name="OK" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_Etherne0" BitNumber="0" ExternalAccess="Read/Write">
<Description>
<![CDATA[Communication Ok]]>
</Description>
</Member>
<Member Name="FltMem" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_Etherne0" BitNumber="1" ExternalAccess="Read/Write">
<Description>
<![CDATA[Enet Comm To I/O Fault Memory]]>
</Description>
</Member>
<Member Name="PortStatus" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_Etherne0" BitNumber="2" ExternalAccess="Read/Write">
<Description>
<![CDATA[Port Link Not Active Fault Memory]]>
</Description>
</Member>
<Member Name="PortCommWarning" DataType="BIT" Dimension="0" Radix="Decimal" Hidden="false" Target="ZZZZZZZZZZzz_Etherne0" BitNumber="3" ExternalAccess="Read/Write">
<Description>
<![CDATA[Port Speed Or Duplex Fault Memory]]>
</Description>
</Member>
<Member Name="EntryStatus" DataType="INT" Dimension="0" Radix="Decimal" Hidden="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Module
Entry Status]]>
</Description>
</Member>
</Members>
</DataType>
</DataTypes>
<AddOnInstructionDefinitions Use="Context">
<AddOnInstructionDefinition Name="AOI_TorqueTool_SCS" Class="Standard" Revision="1.0" RevisionExtension="3FEB2015" ExecutePrescan="false" ExecutePostscan="false" ExecuteEnableInFalse="false" CreatedDate="2015-02-03T06:20:16.909Z" CreatedBy="NAM\czbygh" EditedDate="2018-01-20T13:22:19.520Z" EditedBy="VMSRV2K8R2SP1\Administrator"
 SoftwareRevision="v20.04">
<Description>
<![CDATA[LEP- Torque Tool
]]>
</Description>
<RevisionNote>
<![CDATA[3FEB2015]]>
</RevisionNote>
<Parameters>
<Parameter Name="EnableIn" TagType="Base" DataType="BOOL" Usage="Input" Radix="Decimal" Required="false" Visible="false" ExternalAccess="Read Only">
<Description>
<![CDATA[Torque Tool to LEP]]>
</Description>
</Parameter>
<Parameter Name="EnableOut" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="false" ExternalAccess="Read Only"/>
<Parameter Name="LEP_Input" TagType="Base" DataType="SINT" Dimensions="128" Usage="InOut" Radix="Decimal" Required="true" Visible="true" Constant="false"/>
<Parameter Name="LEP_Output" TagType="Base" DataType="SINT" Dimensions="128" Usage="InOut" Radix="Decimal" Required="true" Visible="true" Constant="false"/>
<Parameter Name="HeartBeat" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="true" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="CommOk" TagType="Base" DataType="BOOL" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[Tightening status OK]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="ConvFPS" TagType="Base" DataType="BOOL" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[Tightening status Not OK]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="TorqueOK" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="true" ExternalAccess="Read Only">
<Description>
<![CDATA[Tool Running]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="TorqueNOK" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="true" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="ToolRunning" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="true" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="JobRunning" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="true" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="JobOK" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="true" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="JobNOK" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="true" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="JobBypass" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="true" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="JobRelease" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="true" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="ConvRunning" TagType="Base" DataType="BOOL" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="FootPrintPercent" TagType="Base" DataType="DINT" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="DINT" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="StnJobOk" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="true" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="StnBypass" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="false" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="StnRelease" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="false" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="ConveyorStop" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="true" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="VehicleTracking" TagType="Base" DataType="u_GepicsBuildDataStructure" Usage="InOut" Required="true" Visible="true" Constant="false"/>
<Parameter Name="Flash" TagType="Base" DataType="zc_Flasher" Usage="InOut" Required="true" Visible="true" Constant="false"/>
<Parameter Name="StnAndonON" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="false" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="IHM" TagType="Base" DataType="u_TTStatusBits" Usage="InOut" Required="true" Visible="true" Constant="false"/>
<Parameter Name="TT_ProgNum" TagType="Base" DataType="SINT" Usage="Input" Radix="ASCII" Required="false" Visible="true" ExternalAccess="Read/Write">
<DefaultData Format="L5K">
<![CDATA[48]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="SINT" Radix="ASCII" Value="'0'"/>
</DefaultData>
</Parameter>
<Parameter Name="StnSemJob" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="false" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="JobFault" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="true" ExternalAccess="Read Only">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
</Parameters>
<LocalTags>
<LocalTag Name="RungComment" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="LEP_TorqueTool" DataType="u_LEP_to_Tool" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[[0,[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00']]]]>
</DefaultData>
<DefaultData Format="Decorated">
<Structure DataType="u_LEP_to_Tool">
<DataValueMember Name="LEP_HB" DataType="BOOL" Value="0"/>
<DataValueMember Name="Tool_Disable" DataType="BOOL" Value="0"/>
<DataValueMember Name="LEP_CommOK" DataType="BOOL" Value="0"/>
<DataValueMember Name="LEP_PWP" DataType="BOOL" Value="0"/>
<DataValueMember Name="LEP_FPS" DataType="BOOL" Value="0"/>
<DataValueMember Name="LEP_NoBLD" DataType="BOOL" Value="0"/>
<StructureMember Name="LEP_VIN" DataType="String18">
<DataValueMember Name="LEN" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="DATA" DataType="String18" Radix="ASCII">
<![CDATA[]]>
</DataValueMember>
</StructureMember>
</Structure>
</DefaultData>
</LocalTag>
<LocalTag Name="TorqueTool_LEP" DataType="u_Tool_to_LEP" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[[[0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],0,0,[0,0,0]]]]>
</DefaultData>
<DefaultData Format="Decorated">
<Structure DataType="u_Tool_to_LEP">
<StructureMember Name="ToolStatusBit" DataType="u_ToolStatusBits">
<DataValueMember Name="PF_Ready" DataType="BOOL" Value="0"/>
<DataValueMember Name="VID_Rcvd" DataType="BOOL" Value="0"/>
<DataValueMember Name="LEP_HB" DataType="BOOL" Value="0"/>
<DataValueMember Name="SSW_Release" DataType="BOOL" Value="0"/>
<DataValueMember Name="SSW_Bypass" DataType="BOOL" Value="0"/>
<DataValueMember Name="Spare1" DataType="BOOL" Value="0"/>
<DataValueMember Name="Spare2" DataType="BOOL" Value="0"/>
<DataValueMember Name="Spare3" DataType="BOOL" Value="0"/>
<DataValueMember Name="TightOK" DataType="BOOL" Value="0"/>
<DataValueMember Name="TightNOK" DataType="BOOL" Value="0"/>
<DataValueMember Name="ToolRun" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobOK" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobNOK" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobRun" DataType="BOOL" Value="0"/>
<DataValueMember Name="Spare4" DataType="BOOL" Value="0"/>
<DataValueMember Name="Spare5" DataType="BOOL" Value="0"/>
</StructureMember>
<ArrayMember Name="VinEcho" DataType="SINT" Dimensions="30" Radix="Decimal">
<Element Index="[0]" Value="0"/>
<Element Index="[1]" Value="0"/>
<Element Index="[2]" Value="0"/>
<Element Index="[3]" Value="0"/>
<Element Index="[4]" Value="0"/>
<Element Index="[5]" Value="0"/>
<Element Index="[6]" Value="0"/>
<Element Index="[7]" Value="0"/>
<Element Index="[8]" Value="0"/>
<Element Index="[9]" Value="0"/>
<Element Index="[10]" Value="0"/>
<Element Index="[11]" Value="0"/>
<Element Index="[12]" Value="0"/>
<Element Index="[13]" Value="0"/>
<Element Index="[14]" Value="0"/>
<Element Index="[15]" Value="0"/>
<Element Index="[16]" Value="0"/>
<Element Index="[17]" Value="0"/>
<Element Index="[18]" Value="0"/>
<Element Index="[19]" Value="0"/>
<Element Index="[20]" Value="0"/>
<Element Index="[21]" Value="0"/>
<Element Index="[22]" Value="0"/>
<Element Index="[23]" Value="0"/>
<Element Index="[24]" Value="0"/>
<Element Index="[25]" Value="0"/>
<Element Index="[26]" Value="0"/>
<Element Index="[27]" Value="0"/>
<Element Index="[28]" Value="0"/>
<Element Index="[29]" Value="0"/>
</ArrayMember>
<DataValueMember Name="PSETID" DataType="SINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="ErrorCode" DataType="SINT" Radix="Decimal" Value="0"/>
<StructureMember Name="HeartBeat" DataType="TIMER">
<DataValueMember Name="PRE" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="ACC" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="EN" DataType="BOOL" Value="0"/>
<DataValueMember Name="TT" DataType="BOOL" Value="0"/>
<DataValueMember Name="DN" DataType="BOOL" Value="0"/>
</StructureMember>
</Structure>
</DefaultData>
</LocalTag>
<LocalTag Name="HBTimer" DataType="TIMER" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[[0,1500,0]]]>
</DefaultData>
<DefaultData Format="Decorated">
<Structure DataType="TIMER">
<DataValueMember Name="PRE" DataType="DINT" Radix="Decimal" Value="1500"/>
<DataValueMember Name="ACC" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="EN" DataType="BOOL" Value="0"/>
<DataValueMember Name="TT" DataType="BOOL" Value="0"/>
<DataValueMember Name="DN" DataType="BOOL" Value="0"/>
</Structure>
</DefaultData>
</LocalTag>
<LocalTag Name="ipart" DataType="DINT" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="DINT" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="TempOptionCode" DataType="u_String4" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[[0,'$00$00$00$00']]]>
</DefaultData>
<DefaultData Format="String" Length="0">
<![CDATA['']]>
</DefaultData>
</LocalTag>
<LocalTag Name="TempVIINdata" DataType="u_String30" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00']]]>
</DefaultData>
<DefaultData Format="String" Length="0">
<![CDATA['']]>
</DefaultData>
</LocalTag>
<LocalTag Name="FPS_OB" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="FPS_SB" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="ReleaseKeySwitch_SB" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="ReleaseKeySwitch_OB" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="RelaseKeySwPulse" DataType="TIMER" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[[0,500,0]]]>
</DefaultData>
<DefaultData Format="Decorated">
<Structure DataType="TIMER">
<DataValueMember Name="PRE" DataType="DINT" Radix="Decimal" Value="500"/>
<DataValueMember Name="ACC" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="EN" DataType="BOOL" Value="0"/>
<DataValueMember Name="TT" DataType="BOOL" Value="0"/>
<DataValueMember Name="DN" DataType="BOOL" Value="0"/>
</Structure>
</DefaultData>
</LocalTag>
<LocalTag Name="RedLamp" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="GreenLamp" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="YellowLamp" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="VINEchoString" DataType="STRING" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00']]]>
</DefaultData>
<DefaultData Format="String" Length="0">
<![CDATA['']]>
</DefaultData>
</LocalTag>
<LocalTag Name="NULL" DataType="STRING" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00']]]>
</DefaultData>
<DefaultData Format="String" Length="0">
<![CDATA['']]>
</DefaultData>
</LocalTag>
<LocalTag Name="ModelVariant" DataType="STRING" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00']]]>
</DefaultData>
<DefaultData Format="String" Length="0">
<![CDATA['']]>
</DefaultData>
</LocalTag>
<LocalTag Name="JobReset" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<Description>
<![CDATA[Bypass/Release
Delay Timer]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="Buzzar" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="BlueLamp" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="DelayTimer" DataType="TIMER" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[[0,0,0]]]>
</DefaultData>
<DefaultData Format="Decorated">
<Structure DataType="TIMER">
<DataValueMember Name="PRE" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="ACC" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="EN" DataType="BOOL" Value="0"/>
<DataValueMember Name="TT" DataType="BOOL" Value="0"/>
<DataValueMember Name="DN" DataType="BOOL" Value="0"/>
</Structure>
</DefaultData>
</LocalTag>
<LocalTag Name="StnStatusReset" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<Description>
<![CDATA[Replace This Instruction
With Application Specific
Instruction(s)]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="DataTransferLimt" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="FPSFallingEdge" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="TBD" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="VIN_Echo" DataType="STRING" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00']]]>
</DefaultData>
<DefaultData Format="String" Length="0">
<![CDATA['']]>
</DefaultData>
</LocalTag>
<LocalTag Name="VIN_Out" DataType="STRING" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00']]]>
</DefaultData>
<DefaultData Format="String" Length="0">
<![CDATA['']]>
</DefaultData>
</LocalTag>
<LocalTag Name="DataValidate" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="Reset_bypass" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="ons" DataType="INT" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="INT" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="GAP" DataType="STRING" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[[3,'GAP$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00']]]>
</DefaultData>
<DefaultData Format="String" Length="3">
<![CDATA['GAP']]>
</DefaultData>
</LocalTag>
<LocalTag Name="ONS_SemJob" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
<LocalTag Name="Aux_SemJob" DataType="BOOL" Radix="Decimal" ExternalAccess="None">
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</LocalTag>
</LocalTags>
<Routines>
<Routine Name="Logic" Type="RLL">
<RLLContent>
<Rung Number="0" Type="N">
<Text>
<![CDATA[OTE(RungComment);]]>
</Text>
</Rung>
<Rung Number="1" Type="N">
<Text>
<![CDATA[XIC(LEP_Input[0].0)OTE(TorqueTool_LEP.ToolStatusBit.PF_Ready);]]>
</Text>
</Rung>
<Rung Number="2" Type="N">
<Text>
<![CDATA[XIC(LEP_Input[0].1)[OTE(TorqueTool_LEP.ToolStatusBit.VID_Rcvd) ,OTE(LEP_Output[0].2) ];]]>
</Text>
</Rung>
<Rung Number="3" Type="N">
<Text>
<![CDATA[XIC(LEP_Input[0].2)OTE(TorqueTool_LEP.ToolStatusBit.LEP_HB);]]>
</Text>
</Rung>
<Rung Number="4" Type="N">
<Text>
<![CDATA[XIO(TorqueTool_LEP.ToolStatusBit.LEP_HB)[MOV(2000,TorqueTool_LEP.HeartBeat.PRE) TON(TorqueTool_LEP.HeartBeat,?,?) ,XIC(TorqueTool_LEP.HeartBeat.DN) OTE(LEP_Output[0].0) ];]]>
</Text>
</Rung>
<Rung Number="5" Type="N">
<Text>
<![CDATA[XIC(TorqueTool_LEP.ToolStatusBit.LEP_HB)OTE(HeartBeat);]]>
</Text>
</Rung>
<Rung Number="6" Type="N">
<Text>
<![CDATA[XIC(LEP_Input[0].4)OTE(TorqueTool_LEP.ToolStatusBit.SSW_Release);]]>
</Text>
</Rung>
<Rung Number="7" Type="N">
<Text>
<![CDATA[[XIC(LEP_Input[0].5) ,XIC(IHM.ToolBypass) ]OTE(TorqueTool_LEP.ToolStatusBit.SSW_Bypass);]]>
</Text>
</Rung>
<Rung Number="8" Type="N">
<Text>
<![CDATA[XIC(ConvFPS)OSF(FPS_SB,FPS_OB);]]>
</Text>
</Rung>
<Rung Number="9" Type="N">
<Text>
<![CDATA[XIC(FPS_OB)OTL(FPSFallingEdge);]]>
</Text>
</Rung>
<Rung Number="10" Type="N">
<Text>
<![CDATA[XIC(FPSFallingEdge)GRT(FootPrintPercent,4)OTU(FPSFallingEdge);]]>
</Text>
</Rung>
<Rung Number="11" Type="N">
<Text>
<![CDATA[LEQ(FootPrintPercent,4)[OTE(LEP_Output[1].7) ,OTE(LEP_Output[1].6) ,OTE(LEP_Output[1].5) ]OTE(JobReset);]]>
</Text>
</Rung>
<Rung Number="12" Type="N">
<Text>
<![CDATA[LIM(4,FootPrintPercent,100)COP(VehicleTracking.VIN.DATA[0],LEP_Output[2],17)COP(TT_ProgNum,LEP_Output[22],1);]]>
</Text>
</Rung>
<Rung Number="13" Type="N">
<Text>
<![CDATA[MOV(25,VIN_Echo.LEN)MOV(25,VIN_Out.LEN);]]>
</Text>
</Rung>
<Rung Number="14" Type="N">
<Text>
<![CDATA[COP(LEP_Input[3],VIN_Echo.DATA[0],25)COP(LEP_Output[2],VIN_Out.DATA[0],25)EQU(VIN_Echo,VIN_Out)OTE(DataValidate);]]>
</Text>
</Rung>
<Rung Number="15" Type="N">
<Text>
<![CDATA[XIC(DataValidate)OTE(LEP_Output[1].1);]]>
</Text>
</Rung>
<Rung Number="16" Type="N">
<Text>
<![CDATA[XIC(TorqueTool_LEP.ToolStatusBit.VID_Rcvd)COP(LEP_Input[2],TorqueTool_LEP.VinEcho[0],22);]]>
</Text>
</Rung>
<Rung Number="17" Type="N">
<Text>
<![CDATA[XIC(LEP_Input[1].1)[OTE(TorqueTool_LEP.ToolStatusBit.TightOK) ,OTE(TorqueOK) ];]]>
</Text>
</Rung>
<Rung Number="18" Type="N">
<Text>
<![CDATA[XIC(LEP_Input[1].0)[OTE(TorqueTool_LEP.ToolStatusBit.TightNOK) ,OTE(TorqueNOK) ];]]>
</Text>
</Rung>
<Rung Number="19" Type="N">
<Text>
<![CDATA[XIC(LEP_Input[1].2)[OTE(TorqueTool_LEP.ToolStatusBit.ToolRun) ,OTE(ToolRunning) ];]]>
</Text>
</Rung>
<Rung Number="20" Type="N">
<Text>
<![CDATA[XIC(LEP_Input[1].4)XIO(StnRelease)XIO(StnBypass)[OTE(TorqueTool_LEP.ToolStatusBit.JobOK) ,OTE(JobOK) ];]]>
</Text>
</Rung>
<Rung Number="21" Type="N">
<Text>
<![CDATA[XIC(LEP_Input[1].5)[OTE(TorqueTool_LEP.ToolStatusBit.JobNOK) ,OTE(JobNOK) ];]]>
</Text>
</Rung>
<Rung Number="22" Type="N">
<Text>
<![CDATA[XIC(LEP_Input[1].3)XIO(JobOK)[OTE(TorqueTool_LEP.ToolStatusBit.JobRun) ,OTE(JobRunning) ];]]>
</Text>
</Rung>
<Rung Number="23" Type="N">
<Text>
<![CDATA[XIC(TorqueTool_LEP.ToolStatusBit.SSW_Release)OTL(JobRelease);]]>
</Text>
</Rung>
<Rung Number="24" Type="N">
<Text>
<![CDATA[[XIC(JobReset) ,XIC(JobBypass) ]OTU(JobRelease);]]>
</Text>
</Rung>
<Rung Number="25" Type="N">
<Text>
<![CDATA[XIC(TorqueTool_LEP.ToolStatusBit.SSW_Bypass)OTL(JobBypass);]]>
</Text>
</Rung>
<Rung Number="26" Type="N">
<Text>
<![CDATA[[XIC(JobReset) ,XIC(JobRelease) ]OTU(JobBypass);]]>
</Text>
</Rung>
<Rung Number="27" Type="N">
<Text>
<![CDATA[[XIC(JobBypass) ,XIC(JobRelease) ][OTE(LEP_Output[1].3) ,OTE(LEP_Output[0].1) ];]]>
</Text>
</Rung>
<Rung Number="28" Type="N">
<Text>
<![CDATA[[XIC(LEP_Output[0].6) ,XIC(ConveyorStop) XIO(ConvRunning) ,XIO(CommOk) ,XIC(TorqueTool_LEP.ToolStatusBit.JobRun) GRT(FootPrintPercent,70) ]XIC(Flash.Norm)OTE(Buzzar)OTE(LEP_Output[0].6);]]>
</Text>
</Rung>
<Rung Number="29" Type="N">
<Text>
<![CDATA[[XIC(TorqueTool_LEP.ToolStatusBit.JobRun) XIO(TorqueTool_LEP.ToolStatusBit.JobOK) XIO(TorqueTool_LEP.ToolStatusBit.JobNOK) LES(FootPrintPercent,70) XIC(Flash.Norm) ,[XIC(TorqueTool_LEP.ToolStatusBit.JobOK) ,XIC(StnJobOk) ] ,LEQ(TT_ProgNum,0) XIC(CommOk) ,XIO(CommOk) XIC(Flash.Fast) ]OTE(GreenLamp)OTE(LEP_Output[0].3);]]>
</Text>
</Rung>
<Rung Number="30" Type="N">
<Text>
<![CDATA[[NEQ(TT_ProgNum,0) XIO(TorqueTool_LEP.ToolStatusBit.JobOK) XIO(TorqueTool_LEP.ToolStatusBit.JobNOK) GEQ(FootPrintPercent,70) XIO(ConvFPS) XIC(Flash.Norm) ,XIO(CommOk) XIC(Flash.Fast) ,XIC(LEP_Output[1].3) ]OTE(YellowLamp)OTE(LEP_Output[0].4);]]>
</Text>
</Rung>
<Rung Number="31" Type="N">
<Text>
<![CDATA[[XIO(CommOk) ,XIC(ConveyorStop) XIO(ConvRunning) ]OTE(RedLamp)OTE(LEP_Output[0].5);]]>
</Text>
</Rung>
<Rung Number="32" Type="N">
<Text>
<![CDATA[[GEQ(FootPrintPercent,5) ,XIC(ConvFPS) ]OTE(DataTransferLimt);]]>
</Text>
</Rung>
<Rung Number="33" Type="N">
<Text>
<![CDATA[[[XIC(JobOK) ,GRT(FootPrintPercent,10) EQU(TT_ProgNum,0) XIO(JobOK) ] ONS(ons.1) ,GRT(FootPrintPercent,10) EQU(VehicleTracking.CSN,GAP) ]XIC(DataTransferLimt)OTL(StnJobOk);]]>
</Text>
</Rung>
<Rung Number="34" Type="N">
<Text>
<![CDATA[GRT(FootPrintPercent,10)ONS(ONS_SemJob)OTE(Aux_SemJob);]]>
</Text>
</Rung>
<Rung Number="35" Type="N">
<Text>
<![CDATA[XIC(StnJobOk)XIO(JobOK)XIC(Aux_SemJob)OTL(StnSemJob);]]>
</Text>
</Rung>
<Rung Number="36" Type="N">
<Text>
<![CDATA[[XIC(StnStatusReset) ,XIC(StnRelease) ,XIC(StnBypass) ]OTU(StnJobOk)OTU(JobFault);]]>
</Text>
</Rung>
<Rung Number="37" Type="N">
<Text>
<![CDATA[XIC(Reset_bypass)OTU(StnSemJob);]]>
</Text>
</Rung>
<Rung Number="38" Type="N">
<Text>
<![CDATA[[XIC(JobRelease) XIC(DataTransferLimt) ,XIO(Reset_bypass) XIO(StnJobOk) XIO(StnBypass) XIC(StnRelease) ]OTE(StnRelease);]]>
</Text>
</Rung>
<Rung Number="39" Type="N">
<Text>
<![CDATA[[XIC(JobBypass) XIC(DataTransferLimt) ,XIO(Reset_bypass) XIO(StnJobOk) XIO(StnRelease) XIC(StnBypass) ]OTE(StnBypass);]]>
</Text>
</Rung>
<Rung Number="40" Type="N">
<Text>
<![CDATA[GRT(FootPrintPercent,4)ONS(ons.0)OTE(Reset_bypass);]]>
</Text>
</Rung>
<Rung Number="41" Type="N">
<Text>
<![CDATA[XIC(FPSFallingEdge)[XIO(StnJobOk) ,XIO(StnBypass) ,XIO(StnRelease) ]OTE(StnStatusReset);]]>
</Text>
</Rung>
<Rung Number="42" Type="N">
<Text>
<![CDATA[XIC(ConvFPS)XIO(StnJobOk)XIO(StnBypass)XIO(StnRelease)OTE(ConveyorStop);]]>
</Text>
</Rung>
<Rung Number="43" Type="N">
<Text>
<![CDATA[GRT(FootPrintPercent,5)XIC(TorqueNOK)OTL(JobFault);]]>
</Text>
</Rung>
<Rung Number="44" Type="N">
<Text>
<![CDATA[XIO(StnJobOk)XIO(StnBypass)XIO(StnRelease)XIC(ConvFPS)OTE(StnAndonON);]]>
</Text>
</Rung>
<Rung Number="45" Type="N">
<Text>
<![CDATA[XIC(JobBypass)OTE(IHM.Bypass);]]>
</Text>
</Rung>
<Rung Number="46" Type="N">
<Text>
<![CDATA[XIC(JobRelease)OTE(IHM.Release);]]>
</Text>
</Rung>
<Rung Number="47" Type="N">
<Text>
<![CDATA[XIC(CommOk)OTE(IHM.CommOk);]]>
</Text>
</Rung>
<Rung Number="48" Type="N">
<Text>
<![CDATA[XIC(StnJobOk)OTE(IHM.JobOK);]]>
</Text>
</Rung>
<Rung Number="49" Type="N">
<Text>
<![CDATA[XIC(ConveyorStop)OTE(IHM.JobNOK);]]>
</Text>
</Rung>
<Rung Number="50" Type="N">
<Text>
<![CDATA[MOV(10,IHM.Pono.LEN)COP(VehicleTracking.CSN.DATA[0],IHM.Pono.DATA[0],10);]]>
</Text>
</Rung>
<Rung Number="51" Type="N">
<Text>
<![CDATA[MOV(3,GAP.LEN)MOV(71,GAP.DATA[0])MOV(65,GAP.DATA[1])MOV(80,GAP.DATA[2]);]]>
</Text>
</Rung>
</RLLContent>
</Routine>
</Routines>
<Dependencies>
<Dependency Type="DataType" Name="zc_Flasher"/>
<Dependency Type="DataType" Name="u_TTStatusBits"/>
<Dependency Type="DataType" Name="u_LEP_to_Tool"/>
<Dependency Type="DataType" Name="u_String4"/>
<Dependency Type="DataType" Name="u_String30"/>
<Dependency Type="DataType" Name="u_Tool_to_LEP"/>
<Dependency Type="DataType" Name="u_GepicsBuildDataStructure"/>
</Dependencies>
</AddOnInstructionDefinition>
<AddOnInstructionDefinition Name="za_EnetMapping" Class="Standard" Revision="1.322" RevisionExtension="&lt;@NO EDITS>" Vendor="GM-ME-VS-Automation" ExecutePrescan="false" ExecutePostscan="false" ExecuteEnableInFalse="false" CreatedDate="2014-06-11T10:07:35.904Z" CreatedBy="ESYS1\chris.jones" EditedDate="2020-11-09T17:18:30.058Z"
 EditedBy="BRSCDWDPS1MN004\manutencao" SoftwareRevision="v20.04">
<Description>
<![CDATA[<@VER 1.322> Load Device To IP Table]]>
</Description>
<RevisionNote>
<![CDATA[1.313  Initial release 
1.322  Added full IP address, rack path and # of ports.]]>
</RevisionNote>
<AdditionalHelpText>
<![CDATA[LOAD DEVICE IP TABLE AOI

This AOI loads user configured device data to Ethernet IP Table.

Requires unique backing tag - No 

Input Parameters
EntryStatus                         Module entry status read by GSV
FaultCode                           Module fault code read by GSV
FaultInfo                             Module fault info read by GSV
cfgDeviceArrayPosition      Location for device in IP Table
cfg1stIPAddressOctet        1st octet of IP address
cfg2ndIPAddressOctet       2nd octet of IP address
cfg3rdIPAddressOctet        3rd octet of IP address
cfg4thIPAddressOctet        4th octet of IP address
cfgLinkStatusAvail              Device supports CIP message link status
cfgPLCConnected              Device is in PLC I/O Configuration
cfgNumberOfPorts              Number of ethernet ports on device
cfgAre2PortsConnected     Device has 2 enet ports are both have connections
cfgIsAWebPageAvail        Device has web page interface
cfgDeviceType                  Device number code
cfgRackPath1                   1st part of CIP path to device
cfgRackPath2                    2nd part of CIP path to device

InOut Parameters
in_Comm                              Device Ethernet IP Comm Status
in_ENetNetwork                  Ethernet network IP Table

Output Parameters
ConfigError                       A device has a configuration error

The following values are used for device types:
1000 - 1999     HMIs, use 1000 for generic HMI
2000 - 2999     Ethernet switches, use 2000 for generic Enet switch
3000 - 3999     PLC Ethernet cards (ENxT), use 3000 for generic Enet card
5000 - 5999     Robots, use 5000 for generic robot
10000 - x         I/O modules, use 10000 for generic Enet/IP I/O]]>
</AdditionalHelpText>
<Parameters>
<Parameter Name="EnableIn" TagType="Base" DataType="BOOL" Usage="Input" Radix="Decimal" Required="false" Visible="false" ExternalAccess="Read Only">
<Description>
<![CDATA[Enable Input - System Defined Parameter]]>
</Description>
</Parameter>
<Parameter Name="EnableOut" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="false" ExternalAccess="Read Only">
<Description>
<![CDATA[Enable Output - System Defined Parameter]]>
</Description>
</Parameter>
<Parameter Name="EntryStatus" TagType="Base" DataType="INT" Usage="Input" Radix="Hex" Required="false" Visible="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Communication
Status
From PLC]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="INT" Radix="Hex" Value="16#0000"/>
</DefaultData>
</Parameter>
<Parameter Name="FaultCode" TagType="Base" DataType="INT" Usage="Input" Radix="Hex" Required="false" Visible="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Communication
Fault Code
From PLC]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="INT" Radix="Hex" Value="16#0000"/>
</DefaultData>
</Parameter>
<Parameter Name="FaultInfo" TagType="Base" DataType="DINT" Usage="Input" Radix="Hex" Required="false" Visible="false" ExternalAccess="Read/Write">
<Description>
<![CDATA[Communication
Fault Info
From PLC]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="DINT" Radix="Hex" Value="16#0000_0000"/>
</DefaultData>
</Parameter>
<Parameter Name="in_Comm" TagType="Base" DataType="zz_EthernetModuleData" Usage="InOut" Required="true" Visible="true" Constant="false">
<Description>
<![CDATA[Device Ethernet
Comm Data]]>
</Description>
</Parameter>
<Parameter Name="cfgDeviceArrayPosition" TagType="Base" DataType="DINT" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[Device
Array Member
Location]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="DINT" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="cfg1stIPAddressOctet" TagType="Base" DataType="INT" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[1st / Highest
Octet Of
IP Address]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="INT" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="cfg2ndIPAddressOctet" TagType="Base" DataType="INT" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[2nd Octet Of
IP Address]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="INT" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="cfg3rdIPAddressOctet" TagType="Base" DataType="INT" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[3rd Octet Of
IP Address]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="INT" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="cfg4thIPAddressOctet" TagType="Base" DataType="INT" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[4th / Lowest
Octet Of
IP Address]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="INT" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="cfgLinkStatusAvail" TagType="Base" DataType="BOOL" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[Link Status
Available
For Device]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="cfgPLCConnected" TagType="Base" DataType="BOOL" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[Device Is
In PLC
I/O Configuration]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="cfgNumberOfPorts" TagType="Base" DataType="DINT" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[Number Of
Ports On
Device]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="DINT" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="cfgAre2PortsConnected" TagType="Base" DataType="BOOL" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[Port 1 & Port 2
Used?]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="cfgIsAWebPageAvail" TagType="Base" DataType="BOOL" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[Device
Supports
Web Browsing]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="cfgDeviceType" TagType="Base" DataType="DINT" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[Device
Identification
Number]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="DINT" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="cfgRackPath1" TagType="Base" DataType="DINT" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[1st Param
In Path
Statement
Typically = 1]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="DINT" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="cfgRackPath2" TagType="Base" DataType="DINT" Usage="Input" Radix="Decimal" Required="true" Visible="true" ExternalAccess="Read/Write">
<Description>
<![CDATA[2nd Param
In Path
Statement
= Enet Slot]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="DINT" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
<Parameter Name="in_ENetNetwork" TagType="Base" DataType="zc_EnetNetwork" Usage="InOut" Required="true" Visible="true" Constant="false">
<Description>
<![CDATA[Network
Tag]]>
</Description>
</Parameter>
<Parameter Name="ConfigError" TagType="Base" DataType="BOOL" Usage="Output" Radix="Decimal" Required="false" Visible="true" ExternalAccess="Read Only">
<Description>
<![CDATA[Network
Config
Error]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[0]]>
</DefaultData>
<DefaultData Format="Decorated">
<DataValue DataType="BOOL" Radix="Decimal" Value="0"/>
</DefaultData>
</Parameter>
</Parameters>
<LocalTags>
<LocalTag Name="DeviceData" DataType="zz_EnetDeviceData" ExternalAccess="None">
<Description>
<![CDATA[Temporary
Device Data]]>
</Description>
<DefaultData Format="L5K">
<![CDATA[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,[0,0,0]]]]>
</DefaultData>
<DefaultData Format="Decorated">
<Structure DataType="zz_EnetDeviceData">
<DataValueMember Name="CommOk" DataType="BOOL" Value="0"/>
<DataValueMember Name="WebPageAvail" DataType="BOOL" Value="0"/>
<DataValueMember Name="TwoPortsConnected" DataType="BOOL" Value="0"/>
<DataValueMember Name="LinkStatusAvail" DataType="BOOL" Value="0"/>
<DataValueMember Name="PLCEnetPort" DataType="BOOL" Value="0"/>
<DataValueMember Name="EnetSwitch" DataType="BOOL" Value="0"/>
<DataValueMember Name="Connected" DataType="BOOL" Value="0"/>
<DataValueMember Name="CommOkLastScan" DataType="BOOL" Value="0"/>
<DataValueMember Name="RackPath1" DataType="SINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="RackPath2" DataType="SINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="EntryStatus" DataType="INT" Radix="Hex" Value="16#0000"/>
<DataValueMember Name="FaultCode" DataType="INT" Radix="Decimal" Value="0"/>
<DataValueMember Name="FaultInfo" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="LastFaultCode" DataType="INT" Radix="Decimal" Value="0"/>
<DataValueMember Name="FirstIPOctet" DataType="INT" Radix="Decimal" Value="0"/>
<DataValueMember Name="SecondIPOctet" DataType="INT" Radix="Decimal" Value="0"/>
<DataValueMember Name="ThirdIPOctet" DataType="INT" Radix="Decimal" Value="0"/>
<DataValueMember Name="FourthIPOctet" DataType="INT" Radix="Decimal" Value="0"/>
<DataValueMember Name="DeviceNameID" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="DeviceType" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="Ports" DataType="DINT" Radix="Decimal" Value="0"/>
<StructureMember Name="Link" DataType="zz_EnetDeviceLinkStatus">
<DataValueMember Name="LinkStatus1" DataType="BOOL" Value="0"/>
<DataValueMember Name="LinkStatus2" DataType="BOOL" Value="0"/>
<DataValueMember Name="AutoNegotiate1" DataType="BOOL" Value="0"/>
<DataValueMember Name="AutoNegotiate2" DataType="BOOL" Value="0"/>
<DataValueMember Name="Duplex1" DataType="BOOL" Value="0"/>
<DataValueMember Name="Duplex2" DataType="BOOL" Value="0"/>
<DataValueMember Name="Scanned" DataType="BOOL" Value="0"/>
<DataValueMember Name="Port1Ok" DataType="BOOL" Value="0"/>
<DataValueMember Name="Port2Ok" DataType="BOOL" Value="0"/>
<DataValueMember Name="Port1Speed100" DataType="BOOL" Value="0"/>
<DataValueMember Name="Port2Speed100" DataType="BOOL" Value="0"/>
<DataValueMember Name="PortWarning" DataType="INT" Radix="Decimal" Value="0"/>
</StructureMember>
</Structure>
</DefaultData>
</LocalTag>
</LocalTags>
<Routines>
<Routine Name="Logic" Type="RLL">
<RLLContent>
<Rung Number="0" Type="N">
<Comment>
<![CDATA[<@VER 1.322><@NO EDITS>
<@SYS>
#=======================================================
# ETHERNET NETWORK DEVICE DATA MANAGEMENT AOI
#
#=======================================================

<@INFO>
################################################################
# This rung resets network error status if no faults are present.
################################################################]]>
</Comment>
<Text>
<![CDATA[EQU(in_ENetNetwork.LoadErrorAddress,0)OTU(ConfigError);]]>
</Text>
</Rung>
<Rung Number="1" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# This rung will skip the variable check and load if the network is already loaded.
################################################################]]>
</Comment>
<Text>
<![CDATA[XIO(in_ENetNetwork.RefreshAll)JMP(SkipLoad);]]>
</Text>
</Rung>
<Rung Number="2" Type="N">
<Comment>
<![CDATA[
<@INFO>
################################################################
# Error Proofing
#
# Check Valid Array Position   End AOI execution if not valid.
################################################################]]>
</Comment>
<Text>
<![CDATA[[LEQ(cfgDeviceArrayPosition,0) ,GRT(cfgDeviceArrayPosition,25) ]MOV(cfgDeviceArrayPosition,in_ENetNetwork.LoadErrorAddress)OTL(ConfigError)TND();]]>
</Text>
</Rung>
<Rung Number="3" Type="N">
<Comment>
<![CDATA[
<@INFO>
################################################################
# Error Proofing
#
# Check Valid IP Address    End AOI execution if not valid.
################################################################]]>
</Comment>
<Text>
<![CDATA[[GRT(cfg1stIPAddressOctet,255) ,LES(cfg1stIPAddressOctet,1) ,GRT(cfg2ndIPAddressOctet,255) ,LES(cfg2ndIPAddressOctet,0) ,GRT(cfg3rdIPAddressOctet,255) ,LES(cfg3rdIPAddressOctet,0) ,GRT(cfg4thIPAddressOctet,255) ,LES(cfg4thIPAddressOctet,1) ]MOV(cfgDeviceArrayPosition,in_ENetNetwork.LoadErrorAddress)OTL(ConfigError)TND();]]>
</Text>
</Rung>
<Rung Number="4" Type="N">
<Comment>
<![CDATA[
<@INFO>
################################################################
# Error Proofing
#
# Check Valid rack path.
################################################################]]>
</Comment>
<Text>
<![CDATA[[GRT(cfgRackPath1,9) ,LES(cfgRackPath1,1) ,GRT(cfgRackPath2,16) ,LES(cfgRackPath2,1) ]MOV(cfgDeviceArrayPosition,in_ENetNetwork.LoadErrorAddress)OTL(ConfigError)TND();]]>
</Text>
</Rung>
<Rung Number="5" Type="N">
<Comment>
<![CDATA[
<@INFO>
################################################################
# Error Proofing
#
# Check Valid port options.
################################################################]]>
</Comment>
<Text>
<![CDATA[[GRT(cfgNumberOfPorts,32) ,LES(cfgNumberOfPorts,0) ,LES(cfgNumberOfPorts,2) XIC(cfgAre2PortsConnected) ]MOV(cfgDeviceArrayPosition,in_ENetNetwork.LoadErrorAddress)OTL(ConfigError)TND();]]>
</Text>
</Rung>
<Rung Number="6" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# Copy device array tag to temporary location
################################################################]]>
</Comment>
<Text>
<![CDATA[COP(in_ENetNetwork.DeviceData[cfgDeviceArrayPosition],DeviceData,1);]]>
</Text>
</Rung>
<Rung Number="7" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# Error Proofing
#
# Check network array position for existing data from another device.
# Set error and exit routine if not valid.
################################################################]]>
</Comment>
<Text>
<![CDATA[NEQ(DeviceData.FourthIPOctet,0)NEQ(DeviceData.FourthIPOctet,cfg4thIPAddressOctet)MOV(cfgDeviceArrayPosition,in_ENetNetwork.LoadErrorAddress)OTL(ConfigError)TND();]]>
</Text>
</Rung>
<Rung Number="8" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# Load configuration data into DeviceData array tag
################################################################]]>
</Comment>
<Text>
<![CDATA[MOV(cfgRackPath1,DeviceData.RackPath1)MOV(cfgRackPath2,DeviceData.RackPath2)MOV(cfgDeviceType,DeviceData.DeviceType)MOV(cfgNumberOfPorts,DeviceData.Ports)MUL(in_ENetNetwork.NetworkNumber,1000,DeviceData.DeviceNameID)ADD(cfgDeviceArrayPosition,DeviceData.DeviceNameID,DeviceData.DeviceNameID);]]>
</Text>
</Rung>
<Rung Number="9" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# Load configuration data into DeviceData array tag.  
################################################################]]>
</Comment>
<Text>
<![CDATA[MOV(cfg1stIPAddressOctet,DeviceData.FirstIPOctet)MOV(cfg2ndIPAddressOctet,DeviceData.SecondIPOctet)MOV(cfg3rdIPAddressOctet,DeviceData.ThirdIPOctet)MOV(cfg4thIPAddressOctet,DeviceData.FourthIPOctet);]]>
</Text>
</Rung>
<Rung Number="10" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# Load configuration data into DeviceData array tag
################################################################]]>
</Comment>
<Text>
<![CDATA[[XIC(cfgIsAWebPageAvail) OTE(DeviceData.WebPageAvail) ,XIC(cfgLinkStatusAvail) [OTE(DeviceData.LinkStatusAvail) ,XIC(cfgAre2PortsConnected) OTE(DeviceData.TwoPortsConnected) ,XIC(cfgPLCConnected) OTE(DeviceData.Connected) ] ,GEQ(cfgDeviceType,3000) LES(cfgDeviceType,4000) OTE(DeviceData.PLCEnetPort) ,GEQ(cfgDeviceType,2000) LES(cfgDeviceType,3000) OTE(DeviceData.EnetSwitch) ];]]>
</Text>
</Rung>
<Rung Number="11" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# Copy device array tag to temporary location if not refreshing all data.
################################################################]]>
</Comment>
<Text>
<![CDATA[LBL(SkipLoad)XIO(in_ENetNetwork.RefreshAll)COP(in_ENetNetwork.DeviceData[cfgDeviceArrayPosition],DeviceData,1);]]>
</Text>
</Rung>
<Rung Number="12" Type="N">
<Text>
<![CDATA[XIC(DeviceData.Connected)MOV(EntryStatus,DeviceData.EntryStatus)MOV(FaultCode,DeviceData.FaultCode)MOV(FaultInfo,DeviceData.FaultInfo);]]>
</Text>
</Rung>
<Rung Number="13" Type="N">
<Text>
<![CDATA[XIO(DeviceData.Connected)CLR(DeviceData.EntryStatus)CLR(DeviceData.FaultCode)CLR(DeviceData.FaultInfo);]]>
</Text>
</Rung>
<Rung Number="14" Type="N">
<Text>
<![CDATA[XIO(in_Comm.OK)XIC(DeviceData.CommOkLastScan)NEQ(DeviceData.FaultCode,0)MOV(DeviceData.FaultCode,DeviceData.LastFaultCode)OTU(DeviceData.CommOkLastScan);]]>
</Text>
</Rung>
<Rung Number="15" Type="N">
<Text>
<![CDATA[XIC(in_Comm.OK)OTE(DeviceData.CommOk)OTL(DeviceData.CommOkLastScan);]]>
</Text>
</Rung>
<Rung Number="16" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# Copy data back into array
################################################################]]>
</Comment>
<Text>
<![CDATA[COP(DeviceData,in_ENetNetwork.DeviceData[cfgDeviceArrayPosition],1);]]>
</Text>
</Rung>
<Rung Number="17" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# Scan ethernet link status for warnings
################################################################]]>
</Comment>
<Text>
<![CDATA[XIC(DeviceData.LinkStatusAvail)XIC(DeviceData.Link.Scanned)XIC(DeviceData.TwoPortsConnected)[XIO(DeviceData.Link.LinkStatus1) ,XIO(DeviceData.Link.LinkStatus2) ]OTE(in_Comm.PortStatus);]]>
</Text>
</Rung>
<Rung Number="18" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# Scan ethernet link status for warnings
################################################################]]>
</Comment>
<Text>
<![CDATA[XIC(DeviceData.LinkStatusAvail)XIC(DeviceData.Link.Scanned)[XIC(DeviceData.Link.LinkStatus1) [XIO(DeviceData.Link.Duplex1) ,XIO(DeviceData.Link.Port1Speed100) ] ,XIC(DeviceData.Link.LinkStatus2) [XIO(DeviceData.Link.Duplex2) ,XIO(DeviceData.Link.Port2Speed100) ] ,NEQ(DeviceData.Link.PortWarning,0) ]OTE(in_Comm.PortCommWarning);]]>
</Text>
</Rung>
</RLLContent>
</Routine>
</Routines>
<Dependencies>
<Dependency Type="DataType" Name="zz_EnetDeviceData"/>
<Dependency Type="DataType" Name="zz_EthernetModuleData"/>
<Dependency Type="DataType" Name="zc_EnetNetwork"/>
</Dependencies>
</AddOnInstructionDefinition>
</AddOnInstructionDefinitions>
<Tags Use="Context">
<Tag Name="TT12345" TagType="Base" DataType="AOI_TorqueTool_SCS" Constant="false" ExternalAccess="Read/Write">
<Data Format="L5K">
<![CDATA[[136340011,92,0,[0,[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00']],[[1,9],[36,57,66,71,69
		,66,55,54,72,48,82,66,49,56,56,52,57,51,0,0,0,10,0,0,0,0,0,0,0,0],0,0,[-1072019019,2000,557]],[0,1500,0],0,[0,'$00$00$00$00'
		],[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		],[0,500,0],[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		],[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		],[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		],[0,0,0],66,[25,'9BGEB76H0RB188493$00$00$00$lI$C48$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		],[25,'9BGEB76H0RB188493$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		],3,[3,'GAP$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		]]]]>
</Data>
<Data Format="Decorated">
<Structure DataType="AOI_TorqueTool_SCS">
<DataValueMember Name="EnableIn" DataType="BOOL" Value="1"/>
<DataValueMember Name="EnableOut" DataType="BOOL" Value="1"/>
<DataValueMember Name="HeartBeat" DataType="BOOL" Value="0"/>
<DataValueMember Name="CommOk" DataType="BOOL" Value="1"/>
<DataValueMember Name="ConvFPS" DataType="BOOL" Value="0"/>
<DataValueMember Name="TorqueOK" DataType="BOOL" Value="1"/>
<DataValueMember Name="TorqueNOK" DataType="BOOL" Value="0"/>
<DataValueMember Name="ToolRunning" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobRunning" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobOK" DataType="BOOL" Value="1"/>
<DataValueMember Name="JobNOK" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobBypass" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobRelease" DataType="BOOL" Value="0"/>
<DataValueMember Name="ConvRunning" DataType="BOOL" Value="1"/>
<DataValueMember Name="FootPrintPercent" DataType="DINT" Radix="Decimal" Value="92"/>
<DataValueMember Name="StnJobOk" DataType="BOOL" Value="1"/>
<DataValueMember Name="StnBypass" DataType="BOOL" Value="0"/>
<DataValueMember Name="StnRelease" DataType="BOOL" Value="0"/>
<DataValueMember Name="ConveyorStop" DataType="BOOL" Value="0"/>
<DataValueMember Name="StnAndonON" DataType="BOOL" Value="0"/>
<DataValueMember Name="TT_ProgNum" DataType="SINT" Radix="ASCII" Value="'$00'"/>
<DataValueMember Name="StnSemJob" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobFault" DataType="BOOL" Value="0"/>
</Structure>
</Data>
</Tag>
<Tag Name="Atlas_TT12345" Class="Standard" TagType="Base" DataType="zd_TorqueTool_AtlasCopco" Constant="false" ExternalAccess="Read/Write">
<Data Format="L5K">
<![CDATA[[[0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
		,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
		,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
		,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]]]>
</Data>
<Data Format="Decorated">
<Structure DataType="zd_TorqueTool_AtlasCopco">
<StructureMember Name="Comm" DataType="zz_EthernetModuleData">
<DataValueMember Name="OK" DataType="BOOL" Value="0"/>
<DataValueMember Name="FltMem" DataType="BOOL" Value="0"/>
<DataValueMember Name="PortStatus" DataType="BOOL" Value="0"/>
<DataValueMember Name="PortCommWarning" DataType="BOOL" Value="0"/>
<DataValueMember Name="EntryStatus" DataType="INT" Radix="Decimal" Value="0"/>
</StructureMember>
<StructureMember Name="FaultDelay" DataType="TIMER">
<DataValueMember Name="PRE" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="ACC" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="EN" DataType="BOOL" Value="0"/>
<DataValueMember Name="TT" DataType="BOOL" Value="0"/>
<DataValueMember Name="DN" DataType="BOOL" Value="0"/>
</StructureMember>
<StructureMember Name="AuxPwrNotOnTmr" DataType="TIMER">
<DataValueMember Name="PRE" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="ACC" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="EN" DataType="BOOL" Value="0"/>
<DataValueMember Name="TT" DataType="BOOL" Value="0"/>
<DataValueMember Name="DN" DataType="BOOL" Value="0"/>
</StructureMember>
<StructureMember Name="AuxPwrNotOffTmr" DataType="TIMER">
<DataValueMember Name="PRE" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="ACC" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="EN" DataType="BOOL" Value="0"/>
<DataValueMember Name="TT" DataType="BOOL" Value="0"/>
<DataValueMember Name="DN" DataType="BOOL" Value="0"/>
</StructureMember>
<ArrayMember Name="In" DataType="SINT" Dimensions="128" Radix="Decimal">
<Element Index="[0]" Value="0"/>
<Element Index="[1]" Value="0"/>
<Element Index="[2]" Value="0"/>
<Element Index="[3]" Value="0"/>
<Element Index="[4]" Value="0"/>
<Element Index="[5]" Value="0"/>
<Element Index="[6]" Value="0"/>
<Element Index="[7]" Value="0"/>
<Element Index="[8]" Value="0"/>
<Element Index="[9]" Value="0"/>
<Element Index="[10]" Value="0"/>
<Element Index="[11]" Value="0"/>
<Element Index="[12]" Value="0"/>
<Element Index="[13]" Value="0"/>
<Element Index="[14]" Value="0"/>
<Element Index="[15]" Value="0"/>
<Element Index="[16]" Value="0"/>
<Element Index="[17]" Value="0"/>
<Element Index="[18]" Value="0"/>
<Element Index="[19]" Value="0"/>
<Element Index="[20]" Value="0"/>
<Element Index="[21]" Value="0"/>
<Element Index="[22]" Value="0"/>
<Element Index="[23]" Value="0"/>
<Element Index="[24]" Value="0"/>
<Element Index="[25]" Value="0"/>
<Element Index="[26]" Value="0"/>
<Element Index="[27]" Value="0"/>
<Element Index="[28]" Value="0"/>
<Element Index="[29]" Value="0"/>
<Element Index="[30]" Value="0"/>
<Element Index="[31]" Value="0"/>
<Element Index="[32]" Value="0"/>
<Element Index="[33]" Value="0"/>
<Element Index="[34]" Value="0"/>
<Element Index="[35]" Value="0"/>
<Element Index="[36]" Value="0"/>
<Element Index="[37]" Value="0"/>
<Element Index="[38]" Value="0"/>
<Element Index="[39]" Value="0"/>
<Element Index="[40]" Value="0"/>
<Element Index="[41]" Value="0"/>
<Element Index="[42]" Value="0"/>
<Element Index="[43]" Value="0"/>
<Element Index="[44]" Value="0"/>
<Element Index="[45]" Value="0"/>
<Element Index="[46]" Value="0"/>
<Element Index="[47]" Value="0"/>
<Element Index="[48]" Value="0"/>
<Element Index="[49]" Value="0"/>
<Element Index="[50]" Value="0"/>
<Element Index="[51]" Value="0"/>
<Element Index="[52]" Value="0"/>
<Element Index="[53]" Value="0"/>
<Element Index="[54]" Value="0"/>
<Element Index="[55]" Value="0"/>
<Element Index="[56]" Value="0"/>
<Element Index="[57]" Value="0"/>
<Element Index="[58]" Value="0"/>
<Element Index="[59]" Value="0"/>
<Element Index="[60]" Value="0"/>
<Element Index="[61]" Value="0"/>
<Element Index="[62]" Value="0"/>
<Element Index="[63]" Value="0"/>
<Element Index="[64]" Value="0"/>
<Element Index="[65]" Value="0"/>
<Element Index="[66]" Value="0"/>
<Element Index="[67]" Value="0"/>
<Element Index="[68]" Value="0"/>
<Element Index="[69]" Value="0"/>
<Element Index="[70]" Value="0"/>
<Element Index="[71]" Value="0"/>
<Element Index="[72]" Value="0"/>
<Element Index="[73]" Value="0"/>
<Element Index="[74]" Value="0"/>
<Element Index="[75]" Value="0"/>
<Element Index="[76]" Value="0"/>
<Element Index="[77]" Value="0"/>
<Element Index="[78]" Value="0"/>
<Element Index="[79]" Value="0"/>
<Element Index="[80]" Value="0"/>
<Element Index="[81]" Value="0"/>
<Element Index="[82]" Value="0"/>
<Element Index="[83]" Value="0"/>
<Element Index="[84]" Value="0"/>
<Element Index="[85]" Value="0"/>
<Element Index="[86]" Value="0"/>
<Element Index="[87]" Value="0"/>
<Element Index="[88]" Value="0"/>
<Element Index="[89]" Value="0"/>
<Element Index="[90]" Value="0"/>
<Element Index="[91]" Value="0"/>
<Element Index="[92]" Value="0"/>
<Element Index="[93]" Value="0"/>
<Element Index="[94]" Value="0"/>
<Element Index="[95]" Value="0"/>
<Element Index="[96]" Value="0"/>
<Element Index="[97]" Value="0"/>
<Element Index="[98]" Value="0"/>
<Element Index="[99]" Value="0"/>
<Element Index="[100]" Value="0"/>
<Element Index="[101]" Value="0"/>
<Element Index="[102]" Value="0"/>
<Element Index="[103]" Value="0"/>
<Element Index="[104]" Value="0"/>
<Element Index="[105]" Value="0"/>
<Element Index="[106]" Value="0"/>
<Element Index="[107]" Value="0"/>
<Element Index="[108]" Value="0"/>
<Element Index="[109]" Value="0"/>
<Element Index="[110]" Value="0"/>
<Element Index="[111]" Value="0"/>
<Element Index="[112]" Value="0"/>
<Element Index="[113]" Value="0"/>
<Element Index="[114]" Value="0"/>
<Element Index="[115]" Value="0"/>
<Element Index="[116]" Value="0"/>
<Element Index="[117]" Value="0"/>
<Element Index="[118]" Value="0"/>
<Element Index="[119]" Value="0"/>
<Element Index="[120]" Value="0"/>
<Element Index="[121]" Value="0"/>
<Element Index="[122]" Value="0"/>
<Element Index="[123]" Value="0"/>
<Element Index="[124]" Value="0"/>
<Element Index="[125]" Value="0"/>
<Element Index="[126]" Value="0"/>
<Element Index="[127]" Value="0"/>
</ArrayMember>
<ArrayMember Name="Out" DataType="SINT" Dimensions="128" Radix="Decimal">
<Element Index="[0]" Value="0"/>
<Element Index="[1]" Value="0"/>
<Element Index="[2]" Value="0"/>
<Element Index="[3]" Value="0"/>
<Element Index="[4]" Value="0"/>
<Element Index="[5]" Value="0"/>
<Element Index="[6]" Value="0"/>
<Element Index="[7]" Value="0"/>
<Element Index="[8]" Value="0"/>
<Element Index="[9]" Value="0"/>
<Element Index="[10]" Value="0"/>
<Element Index="[11]" Value="0"/>
<Element Index="[12]" Value="0"/>
<Element Index="[13]" Value="0"/>
<Element Index="[14]" Value="0"/>
<Element Index="[15]" Value="0"/>
<Element Index="[16]" Value="0"/>
<Element Index="[17]" Value="0"/>
<Element Index="[18]" Value="0"/>
<Element Index="[19]" Value="0"/>
<Element Index="[20]" Value="0"/>
<Element Index="[21]" Value="0"/>
<Element Index="[22]" Value="0"/>
<Element Index="[23]" Value="0"/>
<Element Index="[24]" Value="0"/>
<Element Index="[25]" Value="0"/>
<Element Index="[26]" Value="0"/>
<Element Index="[27]" Value="0"/>
<Element Index="[28]" Value="0"/>
<Element Index="[29]" Value="0"/>
<Element Index="[30]" Value="0"/>
<Element Index="[31]" Value="0"/>
<Element Index="[32]" Value="0"/>
<Element Index="[33]" Value="0"/>
<Element Index="[34]" Value="0"/>
<Element Index="[35]" Value="0"/>
<Element Index="[36]" Value="0"/>
<Element Index="[37]" Value="0"/>
<Element Index="[38]" Value="0"/>
<Element Index="[39]" Value="0"/>
<Element Index="[40]" Value="0"/>
<Element Index="[41]" Value="0"/>
<Element Index="[42]" Value="0"/>
<Element Index="[43]" Value="0"/>
<Element Index="[44]" Value="0"/>
<Element Index="[45]" Value="0"/>
<Element Index="[46]" Value="0"/>
<Element Index="[47]" Value="0"/>
<Element Index="[48]" Value="0"/>
<Element Index="[49]" Value="0"/>
<Element Index="[50]" Value="0"/>
<Element Index="[51]" Value="0"/>
<Element Index="[52]" Value="0"/>
<Element Index="[53]" Value="0"/>
<Element Index="[54]" Value="0"/>
<Element Index="[55]" Value="0"/>
<Element Index="[56]" Value="0"/>
<Element Index="[57]" Value="0"/>
<Element Index="[58]" Value="0"/>
<Element Index="[59]" Value="0"/>
<Element Index="[60]" Value="0"/>
<Element Index="[61]" Value="0"/>
<Element Index="[62]" Value="0"/>
<Element Index="[63]" Value="0"/>
<Element Index="[64]" Value="0"/>
<Element Index="[65]" Value="0"/>
<Element Index="[66]" Value="0"/>
<Element Index="[67]" Value="0"/>
<Element Index="[68]" Value="0"/>
<Element Index="[69]" Value="0"/>
<Element Index="[70]" Value="0"/>
<Element Index="[71]" Value="0"/>
<Element Index="[72]" Value="0"/>
<Element Index="[73]" Value="0"/>
<Element Index="[74]" Value="0"/>
<Element Index="[75]" Value="0"/>
<Element Index="[76]" Value="0"/>
<Element Index="[77]" Value="0"/>
<Element Index="[78]" Value="0"/>
<Element Index="[79]" Value="0"/>
<Element Index="[80]" Value="0"/>
<Element Index="[81]" Value="0"/>
<Element Index="[82]" Value="0"/>
<Element Index="[83]" Value="0"/>
<Element Index="[84]" Value="0"/>
<Element Index="[85]" Value="0"/>
<Element Index="[86]" Value="0"/>
<Element Index="[87]" Value="0"/>
<Element Index="[88]" Value="0"/>
<Element Index="[89]" Value="0"/>
<Element Index="[90]" Value="0"/>
<Element Index="[91]" Value="0"/>
<Element Index="[92]" Value="0"/>
<Element Index="[93]" Value="0"/>
<Element Index="[94]" Value="0"/>
<Element Index="[95]" Value="0"/>
<Element Index="[96]" Value="0"/>
<Element Index="[97]" Value="0"/>
<Element Index="[98]" Value="0"/>
<Element Index="[99]" Value="0"/>
<Element Index="[100]" Value="0"/>
<Element Index="[101]" Value="0"/>
<Element Index="[102]" Value="0"/>
<Element Index="[103]" Value="0"/>
<Element Index="[104]" Value="0"/>
<Element Index="[105]" Value="0"/>
<Element Index="[106]" Value="0"/>
<Element Index="[107]" Value="0"/>
<Element Index="[108]" Value="0"/>
<Element Index="[109]" Value="0"/>
<Element Index="[110]" Value="0"/>
<Element Index="[111]" Value="0"/>
<Element Index="[112]" Value="0"/>
<Element Index="[113]" Value="0"/>
<Element Index="[114]" Value="0"/>
<Element Index="[115]" Value="0"/>
<Element Index="[116]" Value="0"/>
<Element Index="[117]" Value="0"/>
<Element Index="[118]" Value="0"/>
<Element Index="[119]" Value="0"/>
<Element Index="[120]" Value="0"/>
<Element Index="[121]" Value="0"/>
<Element Index="[122]" Value="0"/>
<Element Index="[123]" Value="0"/>
<Element Index="[124]" Value="0"/>
<Element Index="[125]" Value="0"/>
<Element Index="[126]" Value="0"/>
<Element Index="[127]" Value="0"/>
</ArrayMember>
</Structure>
</Data>
</Tag>
<Tag Name="TT12345_BypassJob" Class="Standard" TagType="Base" DataType="DINT" Radix="Decimal" Constant="false" ExternalAccess="Read/Write">
<Data Format="L5K">
<![CDATA[0]]>
</Data>
<Data Format="Decorated">
<DataValue DataType="DINT" Radix="Decimal" Value="0"/>
</Data>
</Tag>
</Tags>
<Programs Use="Context">
<Program Use="Context" Name="test" Class="Standard">
<Tags Use="Context">
<Tag Name="TT12345" TagType="Base" DataType="AOI_TorqueTool_SCS" Constant="false" ExternalAccess="Read/Write">
<Data Format="L5K">
<![CDATA[[1,0,48,[0,[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00']],[[0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
		,0,0,0,0,0,0,0,0,0,0,0,0,0],0,0,[0,0,0]],[0,1500,0],0,[0,'$00$00$00$00'],[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		],[0,500,0],[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		],[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		],[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		],[0,0,0],0,[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		],[0,'$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		],0,[3,'GAP$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00$00'
		]]]]>
</Data>
<Data Format="Decorated">
<Structure DataType="AOI_TorqueTool_SCS">
<DataValueMember Name="EnableIn" DataType="BOOL" Value="1"/>
<DataValueMember Name="EnableOut" DataType="BOOL" Value="0"/>
<DataValueMember Name="HeartBeat" DataType="BOOL" Value="0"/>
<DataValueMember Name="CommOk" DataType="BOOL" Value="0"/>
<DataValueMember Name="ConvFPS" DataType="BOOL" Value="0"/>
<DataValueMember Name="TorqueOK" DataType="BOOL" Value="0"/>
<DataValueMember Name="TorqueNOK" DataType="BOOL" Value="0"/>
<DataValueMember Name="ToolRunning" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobRunning" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobOK" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobNOK" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobBypass" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobRelease" DataType="BOOL" Value="0"/>
<DataValueMember Name="ConvRunning" DataType="BOOL" Value="0"/>
<DataValueMember Name="FootPrintPercent" DataType="DINT" Radix="Decimal" Value="0"/>
<DataValueMember Name="StnJobOk" DataType="BOOL" Value="0"/>
<DataValueMember Name="StnBypass" DataType="BOOL" Value="0"/>
<DataValueMember Name="StnRelease" DataType="BOOL" Value="0"/>
<DataValueMember Name="ConveyorStop" DataType="BOOL" Value="0"/>
<DataValueMember Name="StnAndonON" DataType="BOOL" Value="0"/>
<DataValueMember Name="TT_ProgNum" DataType="SINT" Radix="ASCII" Value="'0'"/>
<DataValueMember Name="StnSemJob" DataType="BOOL" Value="0"/>
<DataValueMember Name="JobFault" DataType="BOOL" Value="0"/>
</Structure>
</Data>
</Tag>
</Tags>
<Routines Use="Context">
<Routine Use="Target" Name="TT12345" Type="RLL">
<RLLContent>
<Rung Number="0" Type="N">
<Comment>
<![CDATA[<@INFO>
############
# Rung just for comment 
############
 <@TODO> 
############
# ADD Torque Tool hardware 
# Module: Generic Ethernet Module 
# Comm Format: DATA - SINT 
#
# Connection parameters: 
# INPUT (assembly instance) 100 (size) 128 
# Output (assembly instance) 150 (size) 128 
# Confiiguration (assembly instance) 1 (size) 0 
#
# Connection: 
# Inhibit Module 
# Use unicast connection over EtherNet/IP
# Request Packet Interval 500ms 
############
#MAP INPUTS
################################################################]]>
</Comment>
<Text>
<![CDATA[NOP();]]>
</Text>
</Rung>
<Rung Number="1" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
#  Atlas-Torque Tool  Ethernet Status / Diagnostics
# 
# Gather Module Status
################################################################
 <@TODO> 
# Move this rung to B001_MapInputs routine 
#################################################################]]>
</Comment>
<Text>
<![CDATA[GSV(Module,TT12345,EntryStatus,Atlas_TT12345.Comm.EntryStatus);]]>
</Text>
</Rung>
<Rung Number="2" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# Atlas-Torque Tool  Ethernet Status / Diagnostics
# 
# Map Inputs
################################################################
 <@TODO> 
# Move this rung to B001_MapInputs routine 
# Don't forget to check the correct EntryStatus bit 
#################################################################]]>
</Comment>
<Text>
<![CDATA[[XIO(Atlas_TT12345.Comm.EntryStatus.15) XIC(Atlas_TT12345.Comm.EntryStatus.14) XIO(Atlas_TT12345.Comm.EntryStatus.13) XIO(Atlas_TT12345.Comm.EntryStatus.12) [OTE(Atlas_TT12345.Comm.OK) ,XIC(Atlas_TT12345.Comm.OK) COP(TT12345:I.Data[0],Atlas_TT12345.In[0],32) ] ,XIO(Atlas_TT12345.Comm.OK) FLL(0,Atlas_TT12345.In[0],128) ];]]>
</Text>
</Rung>
<Rung Number="3" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# The AOI below maps an ethernet device into a network location and adds the
# device's name into the HMI text list.
# 
################################################################
<@TODO>
################################################################
# Program the following for the EnetMapping AOI
# 
# za_EnetMapping                 EnetAddressTableLoad tag
# in_Comm                             Device's .Comm structure, if it exists.
#                                                  If the device does not have a .Comm structure:
#                                                  Program XIC Device.CommOK to OTE EnetNetworkX.Comm.OK before the AOI
#                                                  Program EnetNetworkX.Comm tag for in_Comm
# cfgDeviceArrayPosition      Enet network array position for this device (1 - 25), do not repeat in onenetwork
# cfg1stIPAddressOctet        1st Octet of IP address  (aaa in aaa.168.1.1)
# cfg2ndIPAddressOctet        2nd Octet of IP address  (bbb in 192.bbb.1.1)
# cfg3rdIPAddressOctet        3rd Octet of IP address  (ccc in 192.168.ccc.1)
# cfg4thIPAddressOctet        4th Octet of IP address  (ddd in 192.168.1.ddd)
# cfgLinkStatusAvail              Set to On state if device is an EnetIP device.
#                                                     kConstant.Yes for PLC enet port, robots, I/O devices, Weld Controllers, Cameras
#                                                     kConstant.No for HMI
# cfgPLCConnected              Set to On state for devices that are in the PLC's I/O Configuration area.
#                                                     kConstant.Yes for all devices in PLC I/O tree.
#                                                     kConstant.No for devices not in this PLC's I/O tree.  Robot's weld controller, HMI, etc.
# cfgAre2PortsConnected     Set to On state if two enet cables are connected as part of a linear network, off if one connection.
# cfgIsAWebPageAvail          Set to On state if device has a web page that can be displayed on HMI, off if no.
#                                                  The device must be on a network the HMI can address.  The HMI can reach all public
#                                                  addresses (typically 120.x.x.x) and any private addresses (192.168.1.x) where the
#                                                  network connects to the same switch as the HMI.
# cfgDeviceType                   Value from 0 to 100,000.  Use the following: 
#                                                1000 - 1999     HMIs, do not use this AOI for HMIs
#                                                2000 - 2999     Ethernet switches
#                                                2100 - 2199     Ethernet switches that support CIP messages (Hirschmann Octopus)
#                                                3000 - 3999     PLC Ethernet cards in the same chassis as the PLC (ENxT), use 3000 for generic Enet card
#                                                                         Use 10000 for a PLC ethernet card in another chassis
#                                                5000 - 5999     Robots, use 5000 for generic robot
#                                                10000 - x         I/O modules, use 10000 for generic Enet/IP I/O
# Rack path - this is the RSLinx (CIP) path to the ethernet card / port.
#
# in_RackPath1 - First parameter in rack path.
#      1 - for controllers with separate ethernet cards, like EN2T.
#      2 - for controllers with built in ethernet ports.
# in_RackPath2 - second parameter in rack path.
#      Slot # of Enet card used to send message to device - for controllers with separate ethernet cards, like EN2T.
#      0 - for controllers with built in ethernet ports.
#
# in_EnetNetwork                     Add the Ethernet network tag for the device.
################################################################
# Program the EnetDeviceNames_TL[Y]: DeviceName as follows:
#     Y = NetworkNumber x1000 + Array location.
#     DeviceName should be device id. For example -  AAxx1Rx1.
################################################################
#
#	<TL26 ENetDeviceNames_TL[6022]: Trim_Barcode>
#]]>
</Comment>
<Text>
<![CDATA[XIO(Modify-eNetNetwork)za_EnetMapping(EnetAddressTableLoad,Atlas_TT12345.Comm,1,192,168,1,10,kConstant.Yes,kConstant.Yes,1,kConstant.No,kConstant.No,10000,1,8,ENetNetwork2);]]>
</Text>
</Rung>
<Rung Number="4" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
#StatusInhibited
################################################################
 <@TODO> 
# Verify a free bit in (Section)_StatusInhibited DINT if unavailable, create a (Section)_StatusInhibited_1 
# Don't forget to comment the selected bit 
# Move this rung to B001_MapInputs routine 
# Don't forget to check the correct EntryStatus bit 
#################################################################]]>
</Comment>
<Text>
<![CDATA[XIO(Atlas_TT12345.Comm.EntryStatus.15)XIC(Atlas_TT12345.Comm.EntryStatus.14)XIC(Atlas_TT12345.Comm.EntryStatus.13)XIO(Atlas_TT12345.Comm.EntryStatus.12)OTE(Tracking_StatusInhibited.N);]]>
</Text>
</Rung>
<Rung Number="5" Type="N">
<Comment>
<![CDATA[<@DIAG>
#
#	<Alarm[@007@]: TT12345 Ethernet Comm Fault /*R*/ IP Address >
#	<Alarm[@008@]: TT12345 Ethernet Port Faulted /*R*/  A Configured Port Is Faulted >
#	<Alarm[@009@]: TT12345 Ethernet Port Status Error /*R*/  A Port is Running Wrong Speed or Duplex >
################################################################ 
 <@TODO> 
# Move this rung to B001_MapInputs routine 
#################################################################]]>
</Comment>
<Text>
<![CDATA[[XIO(Tracking_StatusInhibited.N) [XIO(Atlas_TT12345.Comm.OK) ,XIC(Atlas_TT12345.Comm.FltMem) XIO(Cell.Req.FaultReset) ] [OTE(Atlas_TT12345.Comm.FltMem) ,JSR(zZ999_Diagnostics,3,kDiag.Alarm.Comm,kAlarm[@007@],kHelp.ENetCommFlt) ] ,XIC(Atlas_TT12345.Comm.PortStatus) JSR(zZ999_Diagnostics,3,kDiag.Alarm.MaintWarnPLCSW,kAlarm[@008@],kHelp.ENetPortStatusWrn) ,XIC(Atlas_TT12345.Comm.PortCommWarning) JSR(zZ999_Diagnostics,3,kDiag.Alarm.MaintWarnPLCSW,kAlarm[@009@],kHelp.ENetPortCommWrn) ];]]>
</Text>
</Rung>
<Rung Number="6" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
#MAP OUTPUTS
################################################################]]>
</Comment>
<Text>
<![CDATA[NOP();]]>
</Text>
</Rung>
<Rung Number="7" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
#  Atlas Copco-Torque Tool  
# 
# Copy Values
################################################################
 <@TODO> 
# Move this rung to B002_MapOutputs routine 
#################################################################]]>
</Comment>
<Text>
<![CDATA[COP(Atlas_TT12345.Out[0],TT12345:O.Data[0],128);]]>
</Text>
</Rung>
<Rung Number="8" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
#
#Logic
#
################################################################]]>
</Comment>
<Text>
<![CDATA[NOP();]]>
</Text>
</Rung>
<Rung Number="9" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
#
#TT12345
#Send Program Number
################################################################
# <@TODO> 
# Move this rung to S020_Torque_Tool routine 
# Don't forget to check the parameters 
#################################################################
]]>
</Comment>
<Text>
<![CDATA[GRT(TT12345.FootPrintPercent,4)XIO(TT12345.StnJobOk)[EQU(StringTracking_Station_ModelCode,String_ModelCode) ,XIC(TT12345_BypassJob.10) ]MOV(10,TT12345.TT_ProgNum);]]>
</Text>
</Rung>
<Rung Number="10" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
#TT12345
#Send Program Number 0
################################################################
# <@TODO> 
# Move this rung to S020_Torque_Tool routine 
# Don't forget to check the parameters 
#################################################################
]]>
</Comment>
<Text>
<![CDATA[[LEQ(TT12345.FootPrintPercent,4) ,XIC(TT12345.StnJobOk) ]MOV(0,TT12345.TT_ProgNum);]]>
</Text>
</Rung>
<Rung Number="11" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
#TT12345
#AOI_TorqueTool_SCS
################################################################
# <@TODO> 
# Move this rung to S020_Torque_Tool routine 
# Don't forget to check the parameters 
#################################################################
]]>
</Comment>
<Text>
<![CDATA[XIO(Tracking_StatusInhibited.N)AOI_TorqueTool_SCS(TT12345,Atlas_TT12345.In,Atlas_TT12345.Out,Atlas_TT12345.Comm.OK,Conveyor_TrackingName.FPS,Conveyor_TrackingName.Conv_Running,Conveyor_TrackingName.FPS_Status.FootprintPercentage,Line1_Tracking[0],Flash,ToolStsDisp_Tracking.ToolNumber[N]);]]>
</Text>
</Rung>
<Rung Number="12" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
#Conveyor Stop
################################################################]]>
</Comment>
<Text>
<![CDATA[NOP();]]>
</Text>
</Rung>
<Rung Number="13" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
#Conveyor Stop
################################################################
 <@TODO> 
# Move this rung to ConveyorStop routine 
#################################################################]]>
</Comment>
<Text>
<![CDATA[[XIO(TT12345.ConveyorStop) ,XIC(TT12345.StnBypass) ,XIC(TT12345.StnRelease) ,XIC(ToolStsDisp_Tracking.ToolNumber[N].ToolBypass) ]NOP();]]>
</Text>
</Rung>
<Rung Number="14" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# ANDON
################################################################]]>
</Comment>
<Text>
<![CDATA[NOP();]]>
</Text>
</Rung>
<Rung Number="15" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# ANDON
#TT LEP 1 LE
#TT STATION @003@
#
#FAULT/DELAY/ WARNING
#
################################################################
# <@TODO> 
# Move this rung to S026_AndonCall 
# Don't forget to check if the LEP tags exist and are used 
#################################################################
]]>
</Comment>
<Text>
<![CDATA[GEQ(Conveyor_TrackingName.FPS_Status.FootprintPercentage,75)XIO(Tracking_StatusInhibited.N)[XIO(TT12345.ConveyorStop) XIO(TT12345.StnBypass) XIO(TT12345.StnRelease) NEQ(TT12345.TT_ProgNum,0) OTE(LEP_1.QAS[@001@].@003@) ,XIC(TT12345.JobFault) XIC(TT12345.ConveyorStop) OTE(LEP_1.QAS[@001@].@002@) ,XIO(TT12345.JobFault) XIC(TT12345.ConveyorStop) OTE(LEP_1.QAS[@001@].@004@) ];]]>
</Text>
</Rung>
<Rung Number="16" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# ANDON
#TT LEP 2 LE
#STATION 03
#
#COM. / BYPASS
#
################################################################
# <@TODO> 
# Move this rung to S026_AndonCall 
# Don't forget to check if the LEP tags exist and are used 
#################################################################
]]>
</Comment>
<Text>
<![CDATA[XIO(Tracking_StatusInhibited.N)[[XIO(Atlas_TT12345.Comm.OK) ,XIC(Atlas_TT12345.Comm.FltMem) XIO(Cell.Req.FaultReset) ] OTE(LEP_2.QAS[@001@].@006@) ,[XIC(TT12345.StnBypass) ,XIC(TT12345.StnRelease) ] OTE(LEP_2.QAS[@001@].@005@) ];]]>
</Text>
</Rung>
<Rung Number="17" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# ALARMS
################################################################]]>
</Comment>
<Text>
<![CDATA[NOP();]]>
</Text>
</Rung>
<Rung Number="18" Type="N">
<Comment>
<![CDATA[<@DIAG>
#
#	<Alarm[@010@]: TT12345 Parada de Transportador  >
#	<Alarm[@011@]: TT12345 Bypass  >
#	<Alarm[@012@]: TT12345 Release  >
#
#################################################################
# <@TODO> 
# Move this rung to S025_Alarms 
#################################################################
]]>
</Comment>
<Text>
<![CDATA[XIO(Tracking_StatusInhibited.N)[XIC(TT12345.ConveyorStop) JSR(zZ999_Diagnostics,3,kDiag.Alarm.ProdFltAndonStop,kAlarm[@010@],kHelp.ENetCommFlt) ,[XIC(TT12345.StnBypass) ,XIC(TT12345.StnRelease) ] JSR(zZ999_Diagnostics,3,kDiag.Alarm.ProdWarn,kAlarm[@011@],kHelp.ENetCommFlt) ,XIC(TT12345.StnRelease) JSR(zZ999_Diagnostics,3,kDiag.Alarm.ProdWarn,kAlarm[@012@],kHelp.ENetCommFlt) ];]]>
</Text>
</Rung>
<Rung Number="19" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
# QDI
################################################################]]>
</Comment>
<Text>
<![CDATA[NOP();]]>
</Text>
</Rung>
<Rung Number="20" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
#Torque Tools on Station 
#
#QDI Merging
#
################################################################
# <@TODO> 
# Move this rung to QDI program, routine M100_MC 
# Don't forget to check the parameters 
# Find two Tags with data type u_LEPPVIMerging one with QDI and other with SWAP in the name 
################################################################]]>
</Comment>
<Text>
<![CDATA[XIO(Tracking_StatusInhibited.N)XIC(Conveyor_TrackingName.FPS_Status.FPS_Falling_Latch)[MOV(12345,QDIMerging_Tracking[N].EPAn.MCode) ,XIO(TT12345.StnBypass) XIO(TT12345.StnRelease) XIC(TT12345.StnJobOk) MOV(777,QDIMerging_Tracking[N].EPAn.ECode) ,XIC(TT12345.StnBypass) XIO(TT12345.StnSemJob) MOV(1,QDIMerging_Tracking[N].EPAn.ECode) ,XIC(TT12345.StnRelease) XIO(TT12345.StnSemJob) MOV(2,QDIMerging_Tracking[N].EPAn.ECode) ,XIC(TT12345.StnSemJob) MOV(888,QDIMerging_Tracking[N].EPAn.ECode) ];]]>
</Text>
</Rung>
<Rung Number="21" Type="N">
<Comment>
<![CDATA[<@INFO>
################################################################
#QDI
#Error Proffing Stations SVI merging
#
#Error Proffing Stations SVI merging
################################################################
# <@TODO> 
# Move this rung to QDI program, routine C005_QDI_LrgBFR 
# Don't forget to check the parameters 
#################################################################
]]>
</Comment>
<Text>
<![CDATA[[COP(Tracking_PVI_INT_Swap[N].PVI[N],QDIMerging_Tracking[N].EPAn.dPVI[N],5) ,COP(Line1_Tracking[0].CSN,QDIMerging_Tracking[N].EPAn.CSN,1) ]NOP();]]>
</Text>
</Rung>
<Rung Number="22" Type="N">
<Comment>
<![CDATA[###############################################################
 TT12345 
################################################################

# <@TODO> 
# Move this rung to S029_EPA_Mapping 
#################################################################
]]>
</Comment>
<Text>
<![CDATA[XIC(TT_MAP)XIC(TT12345_MAP)XIC(MAP_Station[01])XIC(Map_SubSystem_TrackingName)XIC(MAP_GSIP_TT12345)NOP();]]>
</Text>
</Rung>
</RLLContent>
</Routine>
</Routines>
</Program>
</Programs>
</Controller>
</RSLogix5000Content>`