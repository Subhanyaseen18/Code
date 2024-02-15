import { View, Text } from 'react-native'
import React from 'react'
import AutoScroll from './src/AutoScroll'
import BtnScroll from './src/BtnScroll'

export default function App() {
  return (
    <View style={{flex:1}}>
      <BtnScroll/>
    </View>
  )
}