import axios from "axios";
import React, { createContext, useState, useCallback } from "react";
import App from "../App";

export const Context = createContext();

const Actions = () => {
  const [store, setStore] = useState({
    loading: false,
    user: "fiza",
  });   

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
  
  return (
    <Context.Provider
      value={{
        ...store,
        handleCreateblog, 
      }}
    >
      <App />
    </Context.Provider>
  );
};

export default Actions;
