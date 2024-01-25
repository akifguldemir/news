import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import dummy_data from "../data/dummy_data";

function NewsDetail({ route, navigation }) {
  newsId = route.params?.newsId

  news = dummy_data.filter((item) => item.id === newsId)
  console.log(news)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Detail Page',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Detail {newsId}</Text>
    </View>
  );
}

export default NewsDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
