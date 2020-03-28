import Reactotron from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'Change project name in ReactotronConfig.js',
  })
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate|127.0.0.1/,
    },
    editor: false,
    errors: { veto: stackFrame => false },
    overlay: false,
  })
  .use(reactotronRedux())
  .connect();

var isDebuggingInChrome = !!window.navigator.userAgent;

const hijackConsole = browserConsole => {
  console.log = (...args) => {
    if (isDebuggingInChrome) {
      browserConsole(...args);
    }
    Reactotron.display({
      name: 'CONSOLE.LOG',
      value: args,
      preview: args.length > 1 ? JSON.stringify(args) : args[0],
    });
  };
};

hijackConsole(console.log);
