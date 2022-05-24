import React from 'react';
import Footer from './components/Footer';
import Header from "./components/Header"
import SignIn from './components/SignIn';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import SignUp from './components/SIgnUp';

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
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

function App() {
  return (
   <ApolloProvider client = {client}>
     <Router>
     <Header />
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/signIn" element={<SignIn />} />
       <Route path="signUp" element={<SignUp />} />
     </Routes>
     <Footer />
     </Router>

   </ApolloProvider>
   
  );
}

export default App;
