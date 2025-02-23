import { Tabs } from 'expo-router';

import { TabBarIcon } from '../../components/TabBarIcon';
import { PRIMARY_COLOR } from '~/core/theme/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: PRIMARY_COLOR,
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="albums" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: 'Favorite',
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-clear" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
