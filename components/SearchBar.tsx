import { icons } from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {
    placeholder: string,
    onPress?: () => void
}

const SearchBar = ({onPress, placeholder}: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4 pl-4'>
        <Image  source={icons.search} className='size-5' resizeMode='contain' tintColor="#AB8BFF"/>
        <TextInput value='' 
        placeholder={placeholder} 
        onChangeText={() => {}} onPress={onPress} placeholderTextColor="white" 
        className='flex-1 ml-20' style={styles.input}/>
      <Text>SearchBar</Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    input: {
        marginLeft: 4
    }
})
