import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ThemeProvider } from '@material-ui/core';
import { mortyTheme } from './theme';
import { split } from 'apollo-boost';
const uri='https://rickandmortyapi.com/graphql'

const httpLink = createHttpLink({ uri})
const batchHttpLink = new BatchHttpLink({ uri, headers: { batch: "true " } });
const client = new ApolloClient({
  link: split(
    operation => operation.getContext().important === true,
    httpLink, // if the test is true -- debatch
    batchHttpLink // otherwise, batching is fine
  ),
  cache: new InMemoryCache()
})
const WithApollo=() => <ApolloProvider client={client}><App /></ApolloProvider>
ReactDOM.render(
  <ThemeProvider theme={mortyTheme}>
  <WithApollo />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
