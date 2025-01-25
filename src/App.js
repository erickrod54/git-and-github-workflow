import React from "react";
import HomePage from "./pages/home.page";
import { AppProvider } from "./context";

/**git-and-github-workflow  - version 1.15 - App
 * - Features: 
 * 
 *     --> Adding AppProvider    
 * 
 * Note: this is the index components
 */


function App() {
  return (
    <>
    <AppProvider>
      <HomePage />
    </AppProvider>
    </>
  );
}

export default App;
