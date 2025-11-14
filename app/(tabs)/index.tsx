import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
     <View className="flex-1 bg-primary" style={styles.bgColor}>
      <Image source={images.bg} className="w-full absolute z-0" />
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: 'auto', paddingBottom:10 }}>
        <Image source={icons.logo} style={styles.image} />
        <View className="flex-1 mt-5">
          <SearchBar onPress={() => router.push('/search')} placeholder='Search for the Moviw' />
        </View>
      </ScrollView>
      {/* <Text className="text-4xl font-bold text-dark-200">Hello Pavi</Text> */}
      {/* <Link href="/onBoarding">Onboarding</Link>
      <Link href="/movie/ave">movie</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: 'black'
  },
image: {
  height: 40,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  width: 50,
  marginTop: 30,
  marginHorizontal: 'auto'
}
})
