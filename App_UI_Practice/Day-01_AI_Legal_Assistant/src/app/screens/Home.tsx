import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useFonts } from "@expo-google-fonts/dm-sans/useFonts";
import {
  DMSans_400Regular,
  DMSans_600SemiBold,
  DMSans_800ExtraBold,
} from "@expo-google-fonts/dm-sans";

export default () => {
  
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
  DMSans_600SemiBold,
  DMSans_800ExtraBold, 
  
});
  if (!fontsLoaded) return null;

const Home = () => {
  
  return (
    <ScrollView style={styles.mainContainer}>
      {/* Top Profile */}
      <View style={styles.topProfileContainer}>
        {/* Left */}
        <View style={styles.topProfileLeft}>
          <Image style={styles.topProfileImg} alt="user profile" />
        </View>
        {/* Middle */}
        <View style={styles.topProfileMiddle}>
          <Text style={styles.topProfileMiddleText}>Good morning</Text>
          <Text style={styles.topProfileMiddleHeading}>Alex Carter</Text>
        </View>
        {/* Right */}
        <View style={styles.topProfileRight}>
          <FontAwesome6 style={styles.topProfileRightIcon} name="plus" />
          <FontAwesome6 style={styles.topProfileRightIcon} name="bell" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    paddingLeft: "6%",
    paddingRight: "6%",
  },
  topProfileContainer: {
    backgroundColor: "red",
    width: "100%",
    flexDirection: "row",
  },
  topProfileLeft: {
    width: "20%",
  },
  topProfileImg: {
    width: 45,
    height: 45,
    borderRadius: 90,
    backgroundColor: "green",
  },
  topProfileMiddle: {
    width: "50%",
  },
  topProfileMiddleText: {
    fontFamily: "DMSans_400Regular",
    fontSize : 16,
  },
  topProfileMiddleHeading: {},
  topProfileRight: {
    width: "30%",
  },
  topProfileRightIcon: {},
});
