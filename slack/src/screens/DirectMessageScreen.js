import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { NewMessageBubble } from '../components/NewMessageBubble';
import { ScreenHeader } from './ScreenHeader';

export const DirectMessagesScreen = (props) => {
	const { colors } = useTheme();

	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
			<ScreenHeader title='Direct Messages' />
			<NewMessageBubble />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	listItemContainer: {
		flexDirection: 'row',
		marginLeft: 10,
		borderTopWidth: 0.5,
		paddingTop: 10,
	},
	messageDetailsContainer: {
		flex: 1,
		marginLeft: 25,
		marginBottom: 15,
		marginRight: 10,
	},
	messagePreview: {
		fontSize: 15,
		marginTop: 5,
	},
});
