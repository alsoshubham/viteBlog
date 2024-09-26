import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import PropTypes from "prop-types";

export const AppContext = createContext();

function AppContextProvider  ({children})  {
    const[loading, setLoading] = useState(false);
    const[posts, setPosts] = useState([]);
    const[page, setPage] = useState(1);
    const[totalPages, setTotalPages] = useState(null);

  //{data filling pending}
    async function fetchBlogPosts(page=1){
        let url= `${baseUrl}?page${page}`
        setLoading(true);
 
        try{
            const result  = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch(error){
            console.log("error in fetching data")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages, 
        handlePageChange,
        fetchBlogPosts
    };

    AppContextProvider.propTypes = {
        children: PropTypes.node.isRequired,
      };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
