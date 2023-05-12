import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView, RefreshControl
} from "react-native";
import {
  CustomHeader,
  LandingPoint,
  Categories
} from "../components";
import { styles } from "../styles/index.style";

const Index = () => {
  let isDark = false;
  console.log("INDEX RERENDERED");
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  return (
    <SafeAreaView style={styles(isDark).container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <CustomHeader />
      <ScrollView
        style={{ height: "100%", paddingHorizontal: 25 }}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        }
      >
        <LandingPoint />
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
