// modules  
import React from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import ImageZoom from 'react-native-image-pan-zoom';
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('screen')

ImageViewerScreen.proptypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  url: PropTypes.string.isRequired,
  hasOptions: PropTypes.string.isRequired
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Platform.OS === "ios"
  ? Dimensions.get("window").height
  : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");

export default function ImageViewerScreen(props) {
  const { visible, onClose, url, hasOptions, onChange } = props;
  return (
    <Modal
      isVisible={visible}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      statusBarTranslucent={true}
      backdropColor={'black'}
    //   backdropColor={'rgba(0, 0, 0, 0.8)'}
      backdropOpacity={1}
      onBackButtonPress={onClose}
      doubleClickInterval={1000}
    >
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        {hasOptions && (
          <TouchableOpacity onPress={onChange} style={{ position: 'absolute', top: hp('3.5%'), left: hp('0.5%') }}>
            <Icon
              name='camera'
              color='white'
              size={30}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={onClose} style={{ position: 'absolute', top: hp('3.5%'), right: hp('0.5%') }}>
          <Icon
            name='close'
            color='white'
            size={30}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageZoomContainer}>
        <ImageZoom
          cropWidth={wp('100%')}
          cropHeight={hp('70%')}
          imageWidth={width}
          imageHeight={width}
          useNativeDriver={true}
          enableCenterFocus={true}
        >
          <FastImage
            style={{ width: width, height: width }}
            source={{
              uri: url,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </ImageZoom>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  toucheStyle: {
    position: 'absolute', top: hp('5%'), right: hp('0.1%')
  },
  imageZoomContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  }
});