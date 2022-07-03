import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Converter from "./pages/Converter";
// import CurrentExchangeRate from "./pages/CurrentExchangeRate";
import Spinner from "./components/Spinner";

const LazyCurrentExchangeRate = React.lazy(() =>
  import("./pages/CurrentExchangeRate")
);
const LazyConverter = lazy(() => import("./pages/Converter"));

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<LazyConverter />} />
            <Route
              path="/current-exchange-rate"
              element={<LazyCurrentExchangeRate />}
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
