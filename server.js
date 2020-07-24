import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
const port = 5000;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.get('/',(req,res)=>{
  res.send('Server');
});

app.listen(port, () =>
  console.log(`Server ready at http://localhost:5000${server.graphqlPath}`)
);