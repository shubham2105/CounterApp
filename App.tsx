import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import './global.css' // Import global styles
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [count,setCount] = useState(0);
  return (
   <SafeAreaView className='flex-1 justify-center items-center bg-slate-50'>
    <Text className='text-3xl font-bold mb-4'>Counter App</Text>

    <Text className='text-6xl font-extrabold text-blue-500 my-6'>{count}</Text>
    <View className=' flex-row flex-wrap justify-center'>
      <TouchableOpacity className='bg-blue-500 px-5 py-3 rounded-xl m-2'
        onPress={()=> setCount(count+1)}
      >
        <Text className='text-white text-lg font-semibold'> + Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-blue-500 px-5 py-3 rounded-xl m-2'
        onPress={()=> setCount(count-1)}
      >
        <Text className='text-white text-lg font-semibold'>- Decrement</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity className='bg-red-500 px-5 py-3 rounded-xl m-2'
        onPress={()=> setCount(0)}
      >
        <Text className='text-white text-lg font-semibold'>Reset</Text>
      </TouchableOpacity>
    </View>
   </SafeAreaView>
  )
}

export default App