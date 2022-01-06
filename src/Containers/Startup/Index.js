import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTheme } from '@/Theme'
import InitStartup from '@/Store/Startup/Init'
import { LongLogo } from '../../Components'

const IndexStartupContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme()


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <LongLogo />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
    </View>
  )
}

export default IndexStartupContainer
