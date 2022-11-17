import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import { useNavigation } from '@react-navigation/native'

const ChatListItem = ({ chat }) => {
	const navigation = useNavigation()

	const user = chat.users
		? chat.users.items[0].user
		: chat.chatRoom.users.items[0].user

	return (
		<Pressable
			onPress={() =>
				navigation.navigate('Chat', {
					id: chat.id,
					name: user?.name,
				})
			}
			style={styles.container}
		>
			{/* User Avatar */}
			<Image
				source={{
					uri: user?.image,
				}}
				style={styles.image}
			/>

			{/* Content Container */}
			<View style={styles.content}>
				{/* Row */}
				<View style={styles.row}>
					<Text numberOfLines={1} style={styles.name}>
						{user?.name}
					</Text>
					<Text style={styles.subTitle}>
						{dayjs(chat.lastMessage?.createdAt).fromNow()}
					</Text>
				</View>

				<Text numberOfLines={2} style={styles.subTitle}>
					{chat.lastMessage?.text}
				</Text>
			</View>
		</Pressable>
	)
}

export default ChatListItem

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'stretch',
		marginHorizontal: 10,
		marginVertical: 5,
		height: 70,
	},
	image: {
		width: 60,
		aspectRatio: 1,
		borderRadius: 30,
		marginRight: 10,
	},
	content: {
		flex: 1,
		borderBottomColor: 'lightgray',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	row: {
		flexDirection: 'row',
		marginBottom: 5,
	},
	name: {
		fontWeight: 'bold',
		flex: 1,
	},
	subTitle: {
		color: 'grey',
	},
})
