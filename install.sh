rm -rf App.js
&& mv App2.js App.js
&& rm -rf .gitignore
&& mv gitignore.txt .gitignore
&& npm i -S react-native-elements react-navigation react-redux redux redux-thunk
&& npm i -D babel-eslint eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y reactotron-react-native reactotron-redux react-native-debugger-open
&& rm -rf install.sh
