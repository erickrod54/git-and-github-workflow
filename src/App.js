import React from "react";
import HomePage from "./pages/home.page";
import { GitGuideProvider } from "./context";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

/**git-and-github-workflow  - version 5.01 - App
 * - Features: 
 * 
 *     --> Adding Toaster to 'root'    
 * 
 * Note: this will show the notifications
 */


function App() {
  return (
    <>
    <HelmetProvider>
      <GitGuideProvider>
        <Toaster position="top-center" richColors/>
        <HomePage />
      </GitGuideProvider>
    </HelmetProvider>
    </>
  );
}

export default App;
