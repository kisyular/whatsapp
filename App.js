import { StyleSheet, Text, View } from 'react-native'
// import ChatsScreen from './src/screens/ChatsScreen'
import ChatScreen from './src/screens/ChatScreen'
import Navigator from './src/navigation/index'

export default function App() {
	return (
		<View style={styles.container}>
			{/* <ChatsScreen /> */}
			{/* <ChatScreen /> */}
			<Navigator />
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
