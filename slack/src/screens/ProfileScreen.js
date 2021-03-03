import React from 'react';
import { View } from 'react-native';

import { ScreenHeader } from './ScreenHeader';
import { useTheme } from '@react-navigation/native';

export const ProfileScreen = (props) => {
	const { colors } = useTheme();

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colors.background,
			}}>
			<View style={{ flex: 1 }}>
				<ScreenHeader navigation={props.navigation} title='You' />
			</View>
		</View>
	);
};
