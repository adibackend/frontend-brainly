// import { Button } from "./components/Button"

import {Dashboard} from "@/pages/Dashboard"
import AuthForms from "./pages/AuthForms"

function App() {
  

  return (
    <>
      <Dashboard/>
      <div className="flex justify-center items-center h-screen">

      <AuthForms initialTab="signup"/>
      </div>
    </>
  )
}

export default App
