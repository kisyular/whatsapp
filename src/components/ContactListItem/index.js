import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import { useNavigation } from '@react-navigation/native'
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify'
import { createChatRoom, createUserChatRoom } from '../../graphql/mutations'

const ContactListItem = ({ user }) => {
	const navigation = useNavigation()

	const initiateChat = async () => {
		console.log('Create a chat room')

		//Create a new chat room
		const newChatRoomData = await API.graphql(
			graphqlOperation(createChatRoom, {
				input: {},
			})
		)

		if (!newChatRoomData.data?.createChatRoom) {
			console.log('Failed to create a chat room')
			return
		}
		const newChatRoom = newChatRoomData?.data.createChatRoom

		//Add clicked 'user' to the chat room
		await API.graphql(
			graphqlOperation(createUserChatRoom, {
				input: {
					userID: user.id,
					chatRoomID: newChatRoom.id,
				},
			})
		)

		//Add authenticated user to the chat room
		const userInfo = await Auth.currentAuthenticatedUser()
		await API.graphql(
			graphqlOperation(createUserChatRoom, {
				input: {
					userID: userInfo.attributes.sub,
					chatRoomID: newChatRoom.id,
				},
			})
		)

		navigation.navigate('Chat', {
			id: newChatRoom.id,
			name: user.name,
		})
	}

	return (
		<Pressable onPress={initiateChat} style={styles.container}>
			{/* User Avatar */}
			<Image
				source={{
					uri: user.image,
				}}
				style={styles.image}
			/>

			<View style={styles.content}>
				<Text numberOfLines={1} style={styles.name}>
					{user.name}
				</Text>
				<Text numberOfLines={2} style={styles.status}>
					{user.status}
				</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'stretch',
		marginHorizontal: 10,
		marginVertical: 5,
		alignItems: 'center',
		height: 70,
	},
	content: {
		flex: 1,
	},
	image: {
		width: 60,
		aspectRatio: 1,
		borderRadius: 30,
		marginRight: 10,
	},
	name: {
		fontWeight: 'bold',
	},
	status: {
		color: 'gray',
	},
})

export default ContactListItem
