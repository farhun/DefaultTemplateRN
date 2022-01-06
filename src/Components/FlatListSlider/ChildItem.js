import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image'

export default (ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height,
  viewImageBorderRadius,
  viewImagePadding,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => onPress(index)}>
      <View style={{paddingHorizontal:viewImagePadding}}>
      {/* <View> */}
        <FastImage
            style={[styles.image, style, {height: height}, {borderRadius: viewImageBorderRadius}]}
            source={local ? item[imageKey] : {uri: item[imageKey]}}
            resizeMode={'contain'}
        />
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 230,
  },
});