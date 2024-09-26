import { Header } from "./Components/header"
import { Blogs } from "./Components/Blogs"
import { Pagging } from "./Components/Pagging"
import { useContext, useEffect } from "react"
import { AppContext } from "./Context/appContext";

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect( () =>{
    fetchBlogPosts();
  }, []);

   return (
    <div>
      <Header/>
      <br />
      <Blogs/>
      <Pagging/>
    </div>
  )
}
