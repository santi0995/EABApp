import IonicIcons from "@expo/vector-icons/Ionicons";
import ShopNavigator from './shop';
import colors from "../utils/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <IonicIcons name={focused ? "home" : "home-outline"} size={22} color={colors.primary} />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={ShopNavigator}
        options={{
          title: "Orders",
          tabBarIcon: ({ focused }) => (
            <IonicIcons
              name={focused ? "file-tray" : "file-tray-outline"}
              size={22}
              color={colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={ShopNavigator}
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <IonicIcons name={focused ? "cart" : "cart-outline"} size={22} color={colors.primary} />
          ),
          tabBarBadgeStyle: {
            backgroundColor: colors.error,
            color: colors.white,
            fontSize: 16,
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
