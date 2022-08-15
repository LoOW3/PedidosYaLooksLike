import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
export default function FeaturedRow({id, title, description}) {
  return (
    <View className='mt-4'>
        <View className='flex-row items-center justify-between px-4'> 
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00ccbb'/>
        </View>
        <Text className='text-xs text-gray-500 px-4'>{description}</Text>
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal:15,
            }}   
            showsHorizontalScrollIndicator={false}
            className='pt-4'     
        >
        {/* Resturants Cards */}

        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title='Yo! Sushi'
          rating={4.5}
          genre="Japanese"
          address="123 Main ST"
          short_description="Test description"
          dishes={[]}
          long={20}
          alt={0}
        />  
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title='Yo! Sushi'
          rating={4.5}
          genre="Japanese"
          address="123 Main ST"
          short_description="Test description"
          dishes={[]}
          long={20}
          alt={0}
        />  
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title='Yo! Sushi'
          rating={4.5}
          genre="Japanese"
          address="123 Main ST"
          short_description="Test description"
          dishes={[]}
          long={20}
          alt={0}
        />  
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title='Yo! Sushi'
          rating={4.5}
          genre="Japanese"
          address="123 Main ST"
          short_description="Test description"
          dishes={[]}
          long={20}
          alt={0}
        />  
        
        
        </ScrollView>
    </View>
  )
}