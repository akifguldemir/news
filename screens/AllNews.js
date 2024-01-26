import { View, FlatList, StyleSheet } from "react-native";
import { useEffect } from "react";
import NewsFlatListItem from "../Components/NewsFlatListItem";
import dummy_data from "../data/dummy_data";
import { useSelector, useDispatch } from 'react-redux'
import { getAllNews } from "../store/newsSlice";

function renderItem(itemData) {
  console.log(itemData.item.key)
  return <NewsFlatListItem {...itemData.item} />;
}

function AllNews() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  const news = useSelector((state) => state.news.news);

  return (
    <View>
      <FlatList
        data={news}
        keyExtractor={(item) => item.index}
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
