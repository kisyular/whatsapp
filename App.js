import { StyleSheet, Text, View } from 'react-native'
import Navigator from './src/navigation/index'
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } })

function App() {
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

export default withAuthenticator(App)
