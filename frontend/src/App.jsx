import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";

import Header from "./component/Header";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Project from "./pages/Project";
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="*" element={<Notfound/>}/>
              <Route path="/projects/:id" element={<Project/>}/>
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
