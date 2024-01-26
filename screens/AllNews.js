import { View, FlatList, StyleSheet } from "react-native";
import NewsFlatListItem from "../Components/NewsFlatListItem";
import dummy_data from "../data/dummy_data";

function renderItem(itemData) {
  return <NewsFlatListItem {...itemData.item} />;
}

function fetchNews() {
  return;
}

fetchNews();
function AllNews() {
  return (
    <View>
      <FlatList
        data={dummy_data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
export default AllNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF0D1",
  },
});
