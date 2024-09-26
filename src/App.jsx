/* eslint-disable no-unused-vars */
import AppContextProvider from "./Context/appContext"
import { Header } from "./Components/header"
import { Blogs } from "./Components/Blogs"
import { Pagging } from "./Components/Pagging"

export function App() {
   return (
    <div>
      <Header/>
      <Blogs/>
      <Pagging/>
    </div>
  )
}
