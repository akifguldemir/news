import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect } from "react";
import NewsFlatListItem from "../Components/NewsFlatListItem";
import dummy_data from "../data/dummy_data";
import { useSelector, useDispatch } from "react-redux";
import { getAllNews } from "../store/newsSlice";

function renderItem(itemData) {
  return <NewsFlatListItem {...itemData.item} />;
}

function AllNews() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  const news = useSelector((state) => state.news.news);
  const isLoading = useSelector((state) => state.news.isLoading);

  return (
    <View style={[styles.container, styles.horizontal]}>
      {isLoading && <ActivityIndicator size="large" color="black" />}
      {!isLoading && news.length > 0 && (
        <FlatList
          data={news}
          keyExtractor={(item) => item.index}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}
export default AllNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF0D1",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
