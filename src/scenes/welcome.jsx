import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {RefreshControl, SafeAreaView, View, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {Button} from 'components/basics/buttons';
import {BasicScene} from 'components/basics/scenes';

const WelcomeScene = props => {
  const {navigation, route, session, store} = props;

  // Render
  return (
    <BasicScene>
      <View style={{flex: 1, justifyContent: 'center', width: '100%', height: '100%', padding: 15}}>
        <Text style={{fontSize: 24, marginBottom: 10}}>React Session Demo</Text>
        <Text style={{fontSize: 16, marginBottom: 16}}>This is a demo application for React session. The application shows how to authenticate a user, manage their session, and log them out.</Text>
        <Button onPress={() => navigation.navigate('Login')}>Get Started</Button>
      </View>
    </BasicScene>
  );
};

export default WelcomeScene;
