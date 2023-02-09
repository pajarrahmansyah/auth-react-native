import React, { useEffect } from 'react';
import { Store, StoreProvider } from '@mile-hi-labs/react-data';
import { SessionProvider } from '@mile-hi-labs/react-native-session';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from 'navigator';
import * as Adapters from 'adapters';
import * as Models from 'models';
import * as Serializers from 'serializers';

const apiDomain = 'https://auth-node-js-api.vercel.app';
const store = new Store({ apiDomain: apiDomain, adapters: Adapters, serializers: Serializers, models: Models });

const App = (props) => {

  // Render
  return (
    <SafeAreaProvider>
      <StoreProvider context={store}>
				<SessionProvider modelName='user' store={store}>
					<Navigator />
				</SessionProvider>
      </StoreProvider>
    </SafeAreaProvider>
  );
}

export default App;
