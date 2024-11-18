import { createContext,useState,useEffect } from "react";
import { PRODUCTS } from "./shop-data";
import { addCollectionAndDocument,getCategoriesAndDocuments } from "../utils/firebase.util";
export const CategoriesContext = createContext({
    categoriesMap: {},
  });
  
  export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
  
    useEffect(() => {
      const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments('categories');
        setCategoriesMap(categoryMap);
      };
  
      getCategoriesMap();
    }, []);
  
    const value = { categoriesMap };
    return (
      <CategoriesContext.Provider value={value}>
        {children}
      </CategoriesContext.Provider>
    );
  };