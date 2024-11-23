import axios from "axios";
import React, { createContext, useState, useCallback } from "react";
import App from "../App";

export const Context = createContext();

const Store = () => {
  const [store, setStore] = useState({
    loading: false,
    user: "fiza",
    blogs : [], 
    reverseBlogs : scrambledArrayAlgorithm
  });   





  const scrambledArrayAlgorithm = store.blogs.reverse

// const intialState = {

//  loading : false ,
//  user : "fiza",
//  blogs : []

// }
// const reducer  = is a collection of functions 
// const [state, action] = useReducer( reducer , intialState)

  const handleCreateblog = useCallback(async (e, formData) => {
    e.preventDefault();

    setStore((prev) => ({ ...prev, loading: true }));
   
    try {
      const url = "http://localhost:4002/user/create/blog"; 
      const res = await axios.post(url, formData);
      console.log("Blog created successfully:", res.data);
    } catch (error) {
      console.error("Error creating blog:", error);
    } finally {
      setStore((prev) => ({ ...prev, loading: false }));
    }
  }, []);



  const fetchBlogData = useCallback(async () => {
    try {
      const url = "http://localhost:4002/getAllBlogs";

      const res = await axios.get(url);
    
      setStore((prev) => ({...prev ,  blogs : res.data.payload}))
    } catch (error) {
      console.error(error);
    }
  } , [])





  return (
    <Context.Provider
      value={{
        ...store,
        handleCreateblog, 
        fetchBlogData
    
      }}
    >
      <App />
    </Context.Provider>
  );
};

export default Store;
