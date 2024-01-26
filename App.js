import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AllNews from "./screens/AllNews";
import NewsDetail from "./screens/NewsDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./screens/Categories";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store/store";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#85586F" },
      }}
    >
      {/* <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerTitle: "Categories",
          tabBarLabel: "Categories",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="category" color={color} size={size} />;
          },
        }}
      /> */}
      <Tab.Screen
        name="AllNews"
        component={AllNews}
        options={{
          headerTitle: "News",
          tabBarLabel: "All News",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="newspaper" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Overview"
            component={MyTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{
              title: "News Detail",
              headerStyle: { backgroundColor: "#85586F" },
            }}s
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
