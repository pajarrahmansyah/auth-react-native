import React from 'react';
import { View, Text } from 'react-native';
import DismissKeyboard from 'helpers/dismiss-keyboard';

const Form = (props) => {
	const { style } = props;

	return (
		<DismissKeyboard>
			<View style={{paddingTop: 15, width: '100%', ...style}}>
				{props.children}
			</View>
		</DismissKeyboard>
	)
}

const FormGroup = (props) => {
	const { label, style } = props;

	return (
		<View style={{marginBottom: 15, ...style}}>
			{label && <FormLabel label={label}/>}
			{props.children}
		</View>
	)
}


const FormLabel = (props) => {
	const { label } = props;

	return (
		<Text style={{fontSize: 16, marginBottom: 10}}>{label}</Text>
	)
}


export { Form, FormGroup, FormLabel }

// Docs
//
