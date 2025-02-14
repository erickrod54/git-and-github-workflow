import React from "react";
import HomePage from "./pages/home.page";
import { GitGuideProvider } from "./context";
import { HelmetProvider } from "react-helmet-async";

/**git-and-github-workflow  - version 4.07 - App
 * - Features: 
 * 
 *     --> Wrapping with 'HelmetProvider'    
 * 
 * Note: this is the index components
 */


function App() {
  return (
    <>
    <HelmetProvider>
      <GitGuideProvider>
        <HomePage />
      </GitGuideProvider>
    </HelmetProvider>
    </>
  );
}

export default App;
