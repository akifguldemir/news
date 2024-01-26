import { View, Text, FlatList, StyleSheet } from "react-native";
import NewsFlatListItem from "../Components/NewsFlatListItem";
import dummy_data from "../data/dummy_data";
import axios from "axios";


function renderItem(itemData) {
  return <NewsFlatListItem {...itemData.item} />;
}

function fetchNews() {
  axios
    .get("https://api.collectapi.com/news/getNews?country=tr&tag=general", {
      headers: {
        'Authorization': 'apikey 3tkOM2gx5sROLOEtdu0VSa:5LfdAuAbg9cnFhmgPL17LL',
        'content-type': 'application/json'
      }
    })
    .then(function (response) {
      if(response.status === 200) {
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
fetchNews()
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
