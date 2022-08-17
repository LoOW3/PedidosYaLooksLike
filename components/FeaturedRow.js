import { View, Text, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

export default function FeaturedRow({id, title, description}) {
  const  [restaurants, setRestaurants] = useState([])

  useEffect(() =>{
    sanityClient.fetch(
      `*[_type == 'featured' && _id == $id]{
        ...,
        restaurants[] -> {
          ...,
          dishes[]->,
          type->{
            name
          }
        }
      }[0]`,
      { id } 
    ).then(data => {
      setRestaurants(data?.restaurants)
    })
    }, [id])

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
            {restaurants?.map( r => 
              <RestaurantCard 
              key= {r._id}
              id={r.id}
              imgUrl= {r.image}
              title={r.name}
              rating={r.rating}
              genre={r.type?.name}
              address={r.address}
              short_description={r.short_description}
              dishes={r.dishes}
              long={r.long}
              lat={r.lat}
              />
            )}
    
        </ScrollView>
    </View>
  )
}