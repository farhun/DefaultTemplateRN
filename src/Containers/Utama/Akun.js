import React, { Component } from 'react';
import { 
        View, 
        Text, 
        StatusBar, 
        StyleSheet, 
        TouchableOpacity,
        FlatList,
        ScrollView
     } from 'react-native';
import {Colors} from '../../Theme/Variables';

export default class Akun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:1,
        }
    }

    componentDidMount(){
        console.log('Akun')
    }

    render() {
        if(this.state.data != 0){
            return (
                <View style={{ flex: 1 }}>
                    <StatusBar
                            backgroundColor={Colors.primary}
                            barStyle='light-content'
                        />
                    <View style={{backgroundColor:Colors.primary, padding:15}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'88%', justifyContent:'flex-end'}}>
                                <Text style={{fontFamily:'Montserrat-Medium', includeFontPadding:false, color:'#fff', fontSize:17}}>Akun</Text>
                            </View> 
                            <View style={{width:'2%', justifyContent:'center'}}/>
                            <View style={{width:'10%', justifyContent:'center'}}>
                            </View>
                        </View>
                    </View>
                    <ScrollView style={{backgroundColor:'#fff'}}>
                        <View>
                            <Text style={{fontFamily:'Montserrat-Medium', includeFontPadding:false, color:'#000', fontSize:17}}>Akun</Text>
                        </View>
                    </ScrollView>
                </View>
            )
        } else{
            return(
                <View style={{ flex: 1 }}>
                    <StatusBar
                            backgroundColor={Colors.primary}
                            barStyle='light-content'
                        />
                    <View style={{backgroundColor:Colors.primary, padding:15}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'88%', justifyContent:'flex-end'}}>
                                <Text style={{fontFamily:'Montserrat-Medium', includeFontPadding:false, color:'#fff', fontSize:17}}>Akun</Text>
                            </View> 
                            <View style={{width:'2%', justifyContent:'center'}}/>
                            <View style={{width:'10%', justifyContent:'center'}}>
                            </View>
                        </View>
                    </View>
                    <ScrollView style={{backgroundColor:'#fff'}}>
                        <View>
                            <Text style={{fontFamily:'Montserrat-Medium', includeFontPadding:false, color:'#fff', fontSize:17}}>Akun</Text>
                        </View>
                    </ScrollView>
                </View>
            )
        }
        
    }

}

const Style = StyleSheet.create({
    Container:{
        backgroundColor:'#fff',
        flex:1
    },
})