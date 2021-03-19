import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './boostrap/store'
import reportWebVitals from './reportWebVitals';
import Routes from "./boostrap/components/App"
import './polyfills/String.ts'
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (count, error) => {
        if((error as any).response){
          return false
        }
        return count < 3        
      }
    },
    mutations: {
      retry: (count, error) => {
        if((error as any).response){
          return false
        }
        return count < 3     
      }
    }
  }
})

ReactDOM.render(
  // <React.StrictMode>
  
  <QueryClientProvider client={queryClient}>
    <Provider store={configureStore()}>
      <Routes />
    </Provider>
  </QueryClientProvider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
