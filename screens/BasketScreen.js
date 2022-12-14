import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItem, selectBasketTotal } from '../features/basketSlice';
import { useDispatch } from 'react-redux';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter'
import { removeFromBasket } from '../features/basketSlice'


export default function BasketScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)
    const basketTotal = useSelector(selectBasketTotal)
    const items = useSelector(selectBasketItem)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]) 

    useMemo(() =>{
        const groupedItems = items.reduce((results, items) =>{
            (results[items.id] = results[items.id] || []).push(items)
            return results
        }, {})
        setGroupedItemsInBasket(groupedItems)
    }, [items])


  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00ccbb] bg-white shadow-xs'>
            <View>
                <Text className='text-lg font-bold text-center'>Basket</Text>
                <Text className='text-center text-gray-400'>
                    {restaurant.title}
                </Text>
            </View>
            <TouchableOpacity 
                onPress={ navigation.goBack}
                className='rouded-full  absolute top-3 right-5'
            >
                <XCircleIcon color='#00ccbb' height={50} width={50}/>    
            </TouchableOpacity>
        </View>

        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
            <Image 
                source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                className='h-7 w-7 bg-gray-300 p-4 rounded-full'
            />
            <Text className='flex-1'>Deliver in 50-75 min</Text>
            <TouchableOpacity >
                <Text className='text-[#00ccbb]'>
                    Change
                </Text>
            </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
            {Object.entries(groupedItemsInBasket).map(([key,items]) => (
                <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                    <Text className='text-[#00ccbb]'>{items.length} x</Text>
                    <Image 
                        source={{
                            uri: urlFor(items[0]?.image).url()
                        }}
                        className="h-12 w-12 rounded-full"
                    />
                    <Text className='flex-1'>{items[0]?.name}</Text>
                    <Text className='text-gray-600'>
                        <Currency quantity={items[0]?.price} currency='ARS'/>
                    </Text>
                    <TouchableOpacity>
                        <Text
                            className='text-[#00ccbb] text-xs'
                            onPress={() => dispatch(removeFromBasket({ id: key}))}
                        >
                            Remove
                        </Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
            <View className=' flex-row justify-between'>
                <Text className='text-gray-400'>Subtotal</Text>
                <Text className='text-gray-400'>
                    <Currency quantity={basketTotal} currency="ARS"/>
                </Text>
            </View>
            <View className=' flex-row justify-between'>
                <Text className='text-gray-400'>Delivey Fee</Text>
                <Text className='text-gray-400'>
                    <Currency quantity={300} currency="ARS"/>
                </Text>
            </View>
            <View className=' flex-row justify-between'>
                <Text>Order total</Text>
                <Text className='font-extrabold'>
                    <Currency quantity={300 + basketTotal} currency="ARS"/>
                </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('PreparingOrderScreen')}className='rounded-lg bg-[#00ccbb] p-4'>
                <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}