import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { useTheme } from '../Theme'

const LongLogo = ({ height, width, mode }) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={{ height, width }}>
      <Image style={Layout.fullSize} source={Images.long_logo} resizeMode={mode} />
    </View>
  )
}

LongLogo.propTypes = {
  height: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.number,
}

LongLogo.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}

export default LongLogo
