import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'isomorphic-fetch';
import { setContext } from '@apollo/client/link/context';
// import { getCookie, AUTH_TOKEN } from './src/apis';
import { FAUNA_URI, FAUNA_ANONYMOUS_KEY } from '@env';

const httpLink = createHttpLink({
  uri: FAUNA_URI,
  fetch,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = getCookie(AUTH_TOKEN) || process.env.FAUNA_ANONYMOUS_KEY;
  const token = FAUNA_ANONYMOUS_KEY;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
