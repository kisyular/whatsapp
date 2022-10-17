import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ChatsScreen from '../screens/ChatsScreen'
import NotImplementedScreen from '../screens/NotImplementedScreen'
import { Ionicons, Entypo } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName='Chats'
			screenOptions={{
				tabBarStyle: { backgroundColor: 'whitesmoke' },
				headerStyle: { backgroundColor: 'whitesmoke' },
			}}
		>
			<Tab.Screen
				name='Status'
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='logo-whatsapp'
							size={size}
							color={color}
						/>
					),
				}}
				component={NotImplementedScreen}
			/>
			<Tab.Screen
				name='Calls'
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='call-outline'
							size={size}
							color={color}
						/>
					),
				}}
				component={NotImplementedScreen}
			/>
			<Tab.Screen
				name='Camera'
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='camera-outline'
							size={size}
							color={color}
						/>
					),
				}}
				component={NotImplementedScreen}
			/>
			<Tab.Screen
				name='Chats'
				//we can even get route from here
				options={({ navigation }) => ({
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='ios-chatbubbles-sharp'
							size={size}
							color={color}
						/>
					),
					headerRight: () => (
						<Entypo
							name='new-message'
							size={18}
							color={'royalblue'}
							onPress={() => navigation.navigate('Contacts')}
							style={{ marginRight: 15 }}
						/>
					),
				})}
				component={ChatsScreen}
			/>
			<Tab.Screen
				name='Settings'
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='settings-outline'
							size={size}
							color={color}
						/>
					),
				}}
				component={NotImplementedScreen}
			/>
		</Tab.Navigator>
	)
}

export default MainTabNavigator
