import React from "react";
import HomePage from "./pages/home.page";
import { GitGuideProvider } from "./context";

/**git-and-github-workflow  - version 1.16 - App
 * - Features: 
 * 
 *     --> Adding 'GitGuideProvider'    
 * 
 * Note: this is the index components
 */


function App() {
  return (
    <>
    <GitGuideProvider>
      <HomePage />
    </GitGuideProvider>
    </>
  );
}

export default App;
