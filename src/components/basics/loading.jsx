import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const LoadingBtnIndicator = (props) => {
	const { size, color = '#FFFFF', style } = props;

	return (
		<View>
      <ActivityIndicator size={size} color={color} />
    </View>
	)
}

const LoadingIndexIndicator = (props) => {
	const { size, color = '#9EA7B3', style } = props;

	return (
		<View style={{flex: 1, justifyContent: 'center', height: '100%', width: '100%'}}>
      <ActivityIndicator size={size} color={color} />
    </View>
	)
}

export { LoadingBtnIndicator, LoadingIndexIndicator }

// Docs
