import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function NewsFlatListItem({ date, name, image, url, description, source }) {
  const navigation = useNavigation();
  function goToDetail() {
    navigation.navigate("NewsDetail", {
      name: name,
      image: image,
      url: url,
      description: description,
      source: source,
      date: date
    });
  }

  return (
    <Pressable
      onPress={goToDetail}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NewsFlatListItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    elevation: 2,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 4,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
