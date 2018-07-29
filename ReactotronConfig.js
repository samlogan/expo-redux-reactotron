import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__ ) {
  Reactotron
    .configure({
      name: 'Example Project'
    })
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .use(reactotronRedux())
    .connect()

  var isDebuggingInChrome = !!window.navigator.userAgent;

  const hijackConsole = (browserConsole) => {
    console.log = (...args) => {
      if (isDebuggingInChrome) {
        browserConsole(...args);
      }
      Reactotron.display({
        name: 'CONSOLE.LOG',
        value: args,
        preview: args.length > 1 ? JSON.stringify(args) : args[0]
      })
    };
  };

  hijackConsole(console.log);
}
