import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withSession } from '@mile-hi-labs/react-native-session';
import { withStore } from '@mile-hi-labs/react-data';

// Navs
import MainNavigator from 'navigators/main-navigator';

// Scenes
import WelcomeScene from 'scenes/welcome';
import LoginScene from 'scenes/auth/login';
import RegisterScene from 'scenes/auth/register';

const Stack = createStackNavigator();

const Navigator = (props) => {
  const { session, store } = props;


  // Render
  if (!session.loaded) { return null }
  return (
  	<NavigationContainer>
	    <Stack.Navigator mode='modal' initialRouteName={session.authenticated() ? 'Main' : 'Welcome'}>

	      <Stack.Screen
	        name='Welcome'
	        component={WelcomeScene}
	        options={{
	          title: 'Welcome',
	        }}
	      />

	      <Stack.Screen
	        name='Login'
	        component={LoginScene}
	        options={{
	          title: 'Login',
	        }}
	      />

	      <Stack.Screen
	        name='Register'
	        component={RegisterScene}
	        options={{
	          title: 'Register',
	        }}
	      />

	      <Stack.Screen
	        name='Main'
	        component={MainNavigator}
	      />

	    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withSession(withStore(Navigator));
