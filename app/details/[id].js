import { Stack, useSearchParams } from "expo-router";
import { StatusBar, Text, View } from "react-native";
import { styles } from "../../styles/id.style";
import CustomHeader from "../../components/details/CustomHeader";
import useFetch from "../../hooks/useFetch";
import { TopLanding } from "../../components";
import { ScrollView } from "react-native-gesture-handler";

const Details = () => {
  const params = useSearchParams();
  const query = `titles/${params.id}`;
  const { returnedData } = useFetch (
    "https://moviesdatabase.p.rapidapi.com",
    query,
    '',
    "moviesdatabase.p.rapidapi.com"
  );

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <StatusBar
        barStyle={"light-content"}
      />

      <View style={styles.container}>
        <CustomHeader />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopLanding returnedData={returnedData} />
          <Text>{params.id}</Text>
        </ScrollView>
      </View>
    </>
  );
};

export default Details;
