import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import './global.css' // Import global styles
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage_key ="CounterApp";
const Theme_Key ="AppTheme";
const App = () => {
  const [count,setCount] = useState(0);
  const [theme,setTheme] = useState<"light" | "dark">("light");
  useEffect(()=>{
      const loadData = async () =>{
    try {
      const value = await AsyncStorage.getItem(Storage_key);
      if(value !== null){
        setCount(parseInt(value, 10)); // Ensure value is parsed as an integer
      }
      const savedTheme = await AsyncStorage.getItem(Theme_Key);
        if(savedTheme === "light" || savedTheme === "dark"){
          setTheme(savedTheme as "light" | "dark");
        }
    } catch (error) {
      console.log("Error loading count:", error);
    }
  };
  loadData();
  }, []);

  // Save value whenever it changes
  useEffect(()=>{
    const saveCount = async () =>{
      try {
        await AsyncStorage.setItem(Storage_key, count.toString());
      } catch (error) {
        console.log("Error saving count:", error);
      }
    };
    saveCount();
  }, [count]);

  // Save theme whenever it changes
  useEffect(()=>{
    const saveTheme = async () =>{
      try {
        await AsyncStorage.setItem(Theme_Key,theme)
      } catch (error) {
        console.log("Error saving theme:", error);
      }
    };
    saveTheme();
  }, [theme])

  const toggleTheme = ()=>{
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
   <SafeAreaView className={`flex-1 justify-center items-center ${theme === "dark" ? "bg-gray-900" : "bg-slate-50"}`}>
    <Text className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Counter App</Text>

    <Text className={`text-6xl font-extrabold text-blue-500 my-6 ${theme === "dark" ? "text-green-400": "text-blue-500"}`}>{count}</Text>
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
    <TouchableOpacity className='bg-purple-500 px-5 py-3 mt-4 rounded-xl' onPress={toggleTheme}>
      <Text className='text-white text-lg font-semibold'>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </Text>
    </TouchableOpacity>
   </SafeAreaView>
  )
}

export default App