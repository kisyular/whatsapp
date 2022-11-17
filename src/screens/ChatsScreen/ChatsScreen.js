import ChatListItem from '../../components/ChatListItem'
import { FlatList } from 'react-native'
import chats from '../../../assets/data/chats.json'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { listChatRooms } from './queries'
import { useEffect, useState } from 'react'
const ChatsScreen = () => {
	const [chatRooms, setChatRooms] = useState([])

	useEffect(() => {
		const fetchChatRooms = async () => {
			try {
				const authUser = await Auth.currentAuthenticatedUser()
				const response = await API.graphql(
					graphqlOperation(listChatRooms, {
						id: authUser.attributes.sub,
					})
				)
				setChatRooms(response.data.getUser.ChatRooms.items)
			} catch (e) {
				console.log(e)
			}
		}
		fetchChatRooms()
	}, [])

	return (
		<FlatList
			data={chatRooms}
			renderItem={({ item }) => <ChatListItem chat={item} />}
			style={{ backgroundColor: 'white' }}
		/>
	)
}

export default ChatsScreen
