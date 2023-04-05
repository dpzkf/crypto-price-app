import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePageController from "./controllers/HomePageController";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HomePageController />
      </QueryClientProvider>
    </>
  );
}

export default App;
