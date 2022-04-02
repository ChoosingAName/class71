import React from "react"
import {Text, View, Button} from "react-native"
import * as Permissions from "expo-permissions"
import {BarCodeScanner} from "expo-barcode-scanner"


export default class Transaction extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasCameraPermission:null,
            scannedData:null,
            buttonstate:"normal",
            scanned:false
        }
    }
    getCameraPermission = async(a) => {
     const {status} = await Permissions.askAsync(Permissions.CAMERA)
     this.setState({hasCameraPermission:status == "granted", 
     buttonstate:a,
     scanned:false})
    }
    handleBarCodeScanned = async ({type, data}) =>{
        this.setState({
            scannedData:data,
            buttonstate:"normal",
            scanned:true
        })
    }

    render(){
        if(this.state.buttonstate == "scanner"){
            <BarCodeScanner style = {{width:"100%", height:"100%"}} 
            onBarCodeScanned ={this.state.scanned?undefined:this.handleBarCodeScanned}></BarCodeScanner>
        }
        return(
            <View>
            <Button onPress = {()=>this.getCameraPermission("scanner")} title = "Scan QR code"/>
            <Text>{this.state.hasCameraPermission?this.state.scannedData:"request camera permission"}</Text>
            
            </View>
        )
    }
}
