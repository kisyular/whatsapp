import { StyleSheet, Text, View } from 'react-native'
import Navigator from './src/navigation/index'
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
import { useEffect } from 'react'
import { getUser } from './src/graphql/queries'
import { createUser } from './src/graphql/mutations'

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } })

function App() {
	useEffect(() => {
		const fetchUser = async () => {
			const authUser = await Auth.currentAuthenticatedUser({
				bypassCache: true,
			})
			//Query the database for the user with the authUser.attributes.sub
			const userData = await API.graphql(
				graphqlOperation(getUser, { id: authUser.attributes.sub })
			)
			// If the user does not exist, create a new user in the database
			if (userData.data.getUser) {
				console.log('User already exists in database')
				return
			}
			const newUser = {
				id: authUser.attributes.sub,
				name: authUser.attributes.phone_number,
				image: 'https://res.cloudinary.com/mfalme/image/upload/v1668001395/profile/profile_z0cyeu.png',
				status: 'Hey, I am using WhatsApp',
			}
			const newResponse = await API.graphql(
				graphqlOperation(createUser, { input: newUser })
			)
			console.log(newResponse)
		}
		fetchUser()
	}, [])

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
