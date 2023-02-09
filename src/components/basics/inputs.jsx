import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Keyboard, ScrollView, Text, View } from 'react-native';
import { IconButton } from 'components/basics/buttons';
import { LoadingIndicator } from 'components/basics/loading';

const TextAreaWrapper = (props) => {
	const { value, placeholder, lines = 5, onChangeText, style } = props;
	const [ bgColor, setBgColor ] = useState('#9EA7B3');

	// Render
	return (
	  <TextInput
	    value={value}
	    placeholder={placeholder}
	    placeholderTextColor={bgColor}
      onBlur={() => setBgColor('#9EA7B3')}
    	onFocus={() => setBgColor('#1C314F')}
    	multiline={true}
    	numberOfLines={lines}
    	returnKeyType='done'
    	onKeyPress={v => v.nativeEvent.key == 'Enter' && Keyboard.dismiss()}
	    onChangeText={v => onChangeText(v) }
	    autoCorrect={false}
	    style={{}}
	  />
  )
}

const TextInputWrapper = (props) => {
	const { value, placeholder, secureTextEntry, onChangeText, style } = props;
	const [ bgColor, setBgColor ] = useState('#9EA7B3');

	// Render
	return (
	  <TextInput
	    value={value}
	    placeholder={placeholder}
	    placeholderTextColor={bgColor}
	    secureTextEntry={secureTextEntry}
      onBlur={() => setBgColor('#9EA7B3')}
    	onFocus={() => setBgColor('#1C314F')}
	    onChangeText={v => onChangeText(v) }
	    autoCorrect={false}
	    style={{padding: 15, fontSize: 16, borderWidth: 1, borderColor: bgColor}}
	  />
  )
}

export { TextAreaWrapper, TextInputWrapper }

// Docs
// https://reactnative.dev/docs/textinput
