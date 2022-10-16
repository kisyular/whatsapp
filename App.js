import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import ChatListItem from './src/components/ChatListItem'
import ChatsScreen from './src/screens/ChatsScreen'

export default function App() {
	const chat = {
		id: '1',
		user: {
			image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
			name: 'Lukas',
		},
		lastMessage: {
			text: 'Hi there. How are you doing. Just wanted to check on theprogress of the project? How is the design coming up?',
			createdAt: '07:30',
		},
	}

	return (
		<View style={styles.container}>
			<ChatsScreen />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		alignItems: 'stretch',
		paddingVertical: 50,
		justifyContent: 'center',
	},
})
