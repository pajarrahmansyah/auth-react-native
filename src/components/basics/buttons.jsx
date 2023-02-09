import React, { Fragment, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoadingBtnIndicator } from 'components/basics/loading';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const Button = (props) => {
	const { onPress, taskRunning, style, children } = props;

	// Render
	return (
	  <TouchableOpacity onPress={onPress} style={{padding: 20, width: '100%', backgroundColor: '#1C314F'}}>
			<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
				{taskRunning ? <LoadingBtnIndicator /> : <Text style={{fontSize: 16, color: '#FFFFFF'}}>{children}</Text>}
			</View>
	  </TouchableOpacity>
	)
}

const ButtonBlock = (props) => {
	const { onPress, taskRunning, style, children } = props;

	// Render
	return (
		<TouchableOpacity onPress={onPress} style={{padding: 15, width: '100%', backgroundColor: '#1C314F'}}>
			<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
				{taskRunning ? <LoadingBtnIndicator /> : <Text style={{fontSize: 16, color: '#FFFFFF'}}>{children}</Text>}
			</View>
	  </TouchableOpacity>
	)
}

const ButtonText = (props) => {
	const { onPress, taskRunning, style, children } = props;

	// Render
	return (
		<TouchableOpacity onPress={onPress} style={{}}>
			<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
				{taskRunning ? <LoadingBtnIndicator /> : <Text style={{fontSize: 16, color: '#1C314F'}}>{children}</Text>}
			</View>
	  </TouchableOpacity>
	)
}

export { Button, ButtonBlock, ButtonText }

// Docs
//
