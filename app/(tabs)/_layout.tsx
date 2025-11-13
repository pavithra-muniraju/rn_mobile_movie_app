import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} className='size-5' tintColor='#151312' />
        <View>
          <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
        </View>

      </ImageBackground>
    )
  }
  return (
    <View className="size-full mt-4 justify-center
     items-center rounded-full overflow-hidden">
      <Image source={icon} className='size-5' tintColor='#A8B5DB' />
    </View>
  )

}

const _Layout = () => {
  return (

    <Tabs screenOptions={{ tabBarShowLabel: false,
      tabBarItemStyle:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      tabBarStyle: {
        backgroundColor: '#0f0234',
        borderRadius: 50,
        marginHorizontal: 20,
        marginBottom: 36,
        position: 'absolute',
        overflow: 'hidden',
        height: 52,
        borderWidth: 1,
        borderColor: '#0f0234',
      }
     }}>
      <Tabs.Screen name='index' options={{
        headerShown: false, title: 'Home',
        tabBarIcon: ({ focused }) => (<>
          <TabIcon focused={focused} icon={icons.home} title="Home" />
        </>)
      }} />
      <Tabs.Screen name='search' options={{
        headerShown: false, title: 'Search',
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.search} title="Search" />
        )
      }} />
      <Tabs.Screen name='saved' options={{
        headerShown: false, title: 'Saved',
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.save} title="Saved" />
        )
      }} />
      <Tabs.Screen name='profile' options={{
        headerShown: false, title: 'Profile',
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.person} title="Profile" />
        )
      }} />
    </Tabs>
  )
}

export default _Layout