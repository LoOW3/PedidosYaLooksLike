import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, StarIcon } from 'react-native-heroicons/solid';
import { ChevronRightIcon, LocationMarkerIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice'


export default function RestaurantScreen({}) {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    },[])

    const {
        params:{
                id,
                imgUrl,
                title,
                rating,
                genre,
                address,
                short_description,
                dishes,
                long,
                lat,
        }} = useRoute() //useRoute trae los parametros que hayamos pasado a la screen en paramsz
    
    useEffect(() => {
        dispatch(setRestaurant({
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
        }))
    },[dispatch])

  return (
    <>

        <BasketIcon />

        <ScrollView className='bg-white'> 
        <View className='relative'>
            <Image 
                source={{
                    uri: urlFor(imgUrl).url()
                }}
                className= 'w-full h-56 gb-gray-300 p-4'
            />
            <TouchableOpacity 
                onPress={navigation.goBack}
                className='absolute top-4 left-5 p-2 bg-gray-100 rounded-full'
            >
                <ArrowLeftIcon  size={20} color='#00ccbb'/>
            </TouchableOpacity>
        </View>

        <View className='bg-white'> 
            <View className='px-4 pt-4 '>
                <Text className='text-3xl font-bold'>{title}</Text>
                <View className='flex-row space-x-2 my-1'>
                    <View className='flex-row items-center space-x-1'>
                        <StarIcon color='green' opacity={0.5} size={20} />
                        <Text className='text-xs text-gray-500'>
                            <Text className='text-green-500'>{rating}</Text> · {genre}
                        </Text>
                    </View>
                    <View className='flex-row items-center space-x-1'>
                        <LocationMarkerIcon color='gray' opacity={0.4} size={20} />
                        <Text className='text-xs text-gray-500'>
                            <Text className='text-gray-500'>Nearby</Text> · {address}
                        </Text>
                    </View>
                </View>

                <Text className='text-gray-500 mt-2 pb-4'>
                    {short_description}
                </Text>
            </View>

                <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
                    <QuestionMarkCircleIcon color='gray' opacity={0.4} size={20} />
                    <Text className='font-bold text-md flex-1 pl-2'>
                        Have a food allergy?
                    </Text>
                    <ChevronRightIcon color='#00ccbb'  size={20} />
                </TouchableOpacity>
        </View>

        <View>
            <Text className='px-4 pt-6 mb-4 font-bold text-xl'>
                Menu
            </Text>

            {/* DishRows */}
            {dishes.map(dish => (
                <DishRow
                    key={dish._id}
                    id={dish._id}
                    name={dish.name}
                    description={dish.shot_description}
                    price={dish.price}
                    image={dish.image}
                />
            ))}
        </View>
        </ScrollView>
    </>
  )
}