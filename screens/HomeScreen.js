import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, TextInput, ScrollView} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import * as Icons from "react-native-heroicons/outline";
import Categories from '../components/Categories';

export default function HomeScreen() {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    },[])
  return (
    <SafeAreaView  className='bg-white pt-10'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image 
            source={{
                uri:'https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png'
            }}  
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'    
        />
        <View className="flex-1">
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
            <Text className='font-bold text-xl'>
                Current Location
                <Icons.ChevronDownIcon size={20} color='#00ccbb'/>
            </Text>
        </View>
        <View>
            <Icons.UserIcon size={35}color='#00ccbb'/>
        </View>
      </View>

      {/* SearchBar */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
            <Icons.SearchIcon color='gray' size={20}/>
            <TextInput 
                placeholder='Restaurants and cuisines'
                keyboardType='default'
            /> 
        </View>
        <Icons.AdjustmentsIcon color='#00ccbb' />
      </View>

      {/* Body */}
      <ScrollView className='bg-gray-100'
        contentContainerStyle={{
            paddingBottom: 100
        }}>
        {/* Categories */}
        <Categories/>
        {/* Features Rows */}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    },
});