import React from 'react';
import { SafeAreaView } from 'react-native';

const BasicScene = (props) => {
	const { children } = props;


	return (
		<SafeAreaView style={{flex: 1, width: '100%', height: '100%', padding: 15, backgroundColor: '#FFFFFF'}}>
			{children}
		</SafeAreaView>
	)
}

export { BasicScene }
