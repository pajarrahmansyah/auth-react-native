import React from 'react';
import {SafeAreaView, ScrollView, View, Keyboard, TouchableWithoutFeedback} from 'react-native';

const DismissKeyboard = props => {
  const {children} = props;

  return <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children && children}</TouchableWithoutFeedback>;
};

export default DismissKeyboard;
