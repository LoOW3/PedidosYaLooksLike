import { View, Text,ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity'
export default function Categories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    sanityClient.fetch(
      `*[_type == 'category']`
      ).then(data => setCategories(data))

  }, [])
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        horizontal
        showsHorizontalScrollIndicator
        >
        {/* Category Card */}
        {categories?.map(c => 
          <CategoryCard 
            key = {c._id}
            imgUrl ={urlFor(c.image).width(200).url()}
            title={c.name}
          />)}

    </ScrollView>
  )
}