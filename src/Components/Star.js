import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import {Colors} from '../Theme/Variables';

export default class Star extends React.Component{

    render(){
        return(
            <Icon
                type={'antdesign'}
                name={'star'}
                // name={this.props.filled === true ? 'star' : 'star-o'}
                color={this.props.filled === true ? Colors.honey : '#ababab'}
                size={30}
                style={{margin:5}}
            />
        )
    }
}

const Style = StyleSheet.create({
    
})