import { View, Button } from 'react-native'
import React from 'react'
import { Auth } from 'aws-amplify'

const SettingsCreen = () => {
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Button title='Sign Out' onPress={() => Auth.signOut()} />
		</View>
	)
}

export default SettingsCreen
