import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider, Reference } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@material-ui/core';
import { mortyTheme } from './theme';
const uri = 'https://rickandmortyapi.com/graphql'

const options = {
  typePolicies: {
    locations: {
      fields: {
        results: {
          keyArgs: ['id'],
          merge:true
        }
      }
    },
    episodes: {
      fields: {
        results: {
          keyArgs: ['id'],
          merge:true
        }
      }
    },
    characters: {
      fields: {
        results: {
          keyArgs: ['id'],
          merge:true,
        }
      }
    },
  }
}


const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(options)
})
const WithApollo = () => <ApolloProvider client={client}><App /></ApolloProvider>
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
