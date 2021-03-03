import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { NewMessageBubble } from '../components/NewMessageBubble';

import { ScreenHeader } from './ScreenHeader';

export const ChannelListScreen = () => {
	const { colors } = useTheme();

	return (
		<>
			<View
				style={[
					styles.container,
					{
						backgroundColor: colors.background,
					},
				]}>
				<ScreenHeader title='getstream' showLogo />
			</View>
			<NewMessageBubble />
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	listContainer: {
		flexGrow: 1,
		flexShrink: 1,
	},
});
