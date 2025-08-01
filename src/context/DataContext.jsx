import axios from "axios";
import { useContext } from "react";
import { createContext, useState } from "react";
import React from "react";
import Category from "../components/Category";

export const DataContext = createContext(null);

export const DataProvider =({children}) =>{
      const[data, setData] = useState()

       //fetching all products form 
       const fetchAllProducts = async () =>{
          try{
            const res = await axios.get('https://fakestoreapi.in/api/products?limit=150')
            console.log(res);
            const productsData = res.data.products
            setData(productsData)
            
          }catch(error){
            console.log(error);
          }
       }

       
     const getUniqueCategory = (data, property) =>{
        let newVal = data?.map((curElem) =>{
            return curElem[property]
        })
        newVal = ["All",...new Set(newVal)]
        return newVal
     }

     const categoryOnlyData = getUniqueCategory(data,"category")
     const brandOnlyData = getUniqueCategory(data,"brand")

      return <DataContext.Provider value ={{data, setData, fetchAllProducts,categoryOnlyData,brandOnlyData}}>
            {children}        
      </DataContext.Provider>
}

export const getData = () => useContext(DataContext)