import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
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
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='category1'/> 
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='category2'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='category3'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='category3'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='category3'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='category3'/>
    </ScrollView>
  )
}