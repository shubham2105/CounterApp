import { View, Text } from 'react-native'
import React from 'react'
import './global.css' // Import global styles

const App = () => {
  return (
    <View className='flex-1 bg-blue-600 justify-center items-center'>
      <Text className='color-slate-200 font-semibold'>CounterApp</Text>
    </View>
  )
}

export default App