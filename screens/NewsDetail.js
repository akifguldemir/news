import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import { useLayoutEffect } from "react";

function NewsDetail({ route, navigation }) {
  const date = new Date(route.params?.date);

  const formattedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  console.log(formattedDate);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Detail Page",
    });
  }, [navigation]);

  const openBrowser = (url) => {
    Linking.openURL(url).catch((err) => console.error("Linking error:", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{route.params?.name}</Text>
      <Text style={styles.description}>{route.params?.description}</Text>
      <TouchableOpacity onPress={openBrowser(route.params?.url)}>
        <Text style={styles.url}>Haberin devamı için tıklayınız.</Text>
      </TouchableOpacity>
      <Image source={{ uri: route.params?.image }} style={styles.image} />
      <View style={styles.sourceGroup}>
        <Text style={styles.source}>Kaynak: {route.params?.source}</Text>
        <Text>{formattedDate}</Text>
      </View>
    </View>
  );
}

export default NewsDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    backgroundColor: "#EEEDEB",
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 4,
    marginRight: 10,
    marginBottom: 8,
  },
  name: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#85586F",
  },
  description: {
    marginBottom: 18,
  },
  source: {
    marginHorizontal: 16,
  },
  sourceGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  url: {
    color: "red",
    marginBottom: 8,
  },
});
