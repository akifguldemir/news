import { View, Text, StyleSheet, Image } from "react-native";
import { useLayoutEffect } from "react";

function NewsDetail({ route, navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Detail Page',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>{route.params?.source}</Text>
      <Text>{route.params?.description}</Text>
      <Image source={{ uri: route.params?.image }} style={styles.image} />
      <Text>{route.params?.date}</Text>
    </View>
  );
}

export default NewsDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 4,
    marginRight: 10,
  },
});
