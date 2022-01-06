import React from 'react';
import { Dimensions, Platform } from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import PropTypes from 'prop-types';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Platform.OS === "ios"
  ? Dimensions.get("window").height
  : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
}

Loader.defaultProps = {
  visible: false,
}

export default function Loader(props) {
  const { visible } = props;
  return (
    <Modal
      isVisible={visible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      backdropOpacity={0.5}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      statusBarTranslucent
    >
      <LottieView
        autoPlay
        loop
        style={{ width: wp(100), height: wp(100) }}
        source={require('../Assets/Images/Lottie/loading.json')}
      />
    </Modal>
  );
}

