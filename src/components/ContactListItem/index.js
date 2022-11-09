import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import { useNavigation } from '@react-navigation/native'

const ContactListItem = ({ user }) => {
	const navigation = useNavigation()

	return (
		<Pressable style={styles.container}>
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
