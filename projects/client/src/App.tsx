import { ApolloProvider } from "@apollo/client";
import { Provider } from "@naporin0624/react-flowder";
import { Suspense } from "react";

import { client } from "./adapter/apollo";
import Index from "./views";

const App = () => {
  return (
    <section>
      <h1>Hello World</h1>
      <ApolloProvider client={client}>
        <Provider>
          <Suspense fallback="loading....">
            <Index />
          </Suspense>
        </Provider>
      </ApolloProvider>
    </section>
  );
};

export default App;
