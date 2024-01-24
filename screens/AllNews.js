import { View, Text, FlatList } from "react-native";

const dummy_data = [
  {
    id: 1,
    title: "News1",
    content: "Lorem Ipsum",
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 2,
    title: "News2",
    content: "Lorem Ipsum",
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 3,
    title: "News3",
    content: "Lorem Ipsum",
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 4,
    title: "News4",
    content: "Lorem Ipsum",
    image: 'https://picsum.photos/200/300'
  }, {
    id: 5,
    title: "News5",
    content: "Lorem Ipsum",
    image: 'https://picsum.photos/200/300'
  },
  {
    id: 6,
    title: "News6",
    content: "Lorem Ipsum",
    image: 'https://picsum.photos/200/300'
  },
];

function renderItem(item) {
  return (
    <View>
      <Text>{item.item.content}</Text>
    </View>
  );
}

function AllNews() {
  return (
    <View>
      <FlatList
        data={dummy_data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}
export default AllNews;
