import { StyleSheet, Text, View } from 'react-native'
import ChatScreen from './src/screens/ChatScreen'
import Navigator from './src/navigation/index'

export default function App() {
	return (
		<View style={styles.container}>
			<Navigator />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'whitesmoke',
		alignItems: 'stretch',
		justifyContent: 'center',
	},
})
