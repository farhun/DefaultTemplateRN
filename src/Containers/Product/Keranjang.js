import React, { Component } from 'react';
import { BackHandler, View, Text, StatusBar, StyleSheet, ScrollView, FlatList, TouchableOpacity, RefreshControl, TextInput } from 'react-native';
import { Icon, Divider } from 'react-native-elements';
import { Colors } from '../../Theme/Variables';
// import Modal from 'react-native-modal';
import FastImage from 'react-native-fast-image';
// import LoaderKeranjang from '../../Components/LoaderKeranjang';
// import SpinnKit from '../../Components/SpinnKit';
// import { showMessage } from 'react-native-flash-message';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Grayscale } from 'react-native-color-matrix-image-filters'
// import { Config } from '../../Config';

import { connect } from 'react-redux';
// import { postKeranjangStore } from '../../Store/Keranjang/KeranjangStore';
// import withPreventDoubleClick from '../../Components/withPreventDoubleClick'

// const ButtonOnePressed = withPreventDoubleClick(TouchableOpacity);

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}
export default class Keranjang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 1,
            token: null,
        }
    }

    navigationGoBack = () => {
        this.props.navigation.goBack()
        return true;
    }

    _onRefresh = () => {
        this.setState({ refreshing: false })
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.navigationGoBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.navigationGoBack);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.backgroundView }}>
                <StatusBar
                    backgroundColor={Colors.primary}
                    barStyle='light-content'
                />
                <View style={{ backgroundColor: Colors.primary, padding: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '10%', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => { this.navigationGoBack() }}>
                                <Icon name='arrow-back' type='ionicon' color='#fff' size={25} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '90%', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Montserrat-Medium', includeFontPadding: false, color: '#fff', fontSize: 15 }}> Keranjang</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

const Style = StyleSheet.create({
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    content: {
        backgroundColor: '#fff',
        flex: 1
    },
    containerModalKeranjang: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainerModalKeranjang: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        height: '70%',
        width: '100%',
        padding: '2%',
        borderRadius: 20
    },
    innerContainerModalKeranjang2: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        height: 175,
        width: '100%',
        padding: '2%',
        borderRadius: 20
    },
})