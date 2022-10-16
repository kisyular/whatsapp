import { StyleSheet, Text, View } from 'react-native'
// import ChatsScreen from './src/screens/ChatsScreen'
import ChatScreen from './src/screens/ChatScreen'

export default function App() {
	return (
		<View style={styles.container}>
			{/* <ChatsScreen /> */}
			<ChatScreen />
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
