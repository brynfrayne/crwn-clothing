import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js';
import { addCollectionAndDocuments, getCategoiesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    
    // ! Only used the below useEffect as a one time thing - if left in use it will try and update values each time it is loaded
    // useEffect(() =>{
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // })
    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoiesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    }, []);

    const value =  { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}