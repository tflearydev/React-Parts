import React, { createContext, useReducer, useState } from 'react';
import CategoriesReducer from '../reducers/categories/CategoriesReducer';
export const CategoriesContext = createContext();

const CategoriesContextProvider = (props) => {
    const [state, setState] = useState({
        isFetching: false,
        dataLoaded: false,
        data: {},
        selected_id: null
        
    });
    //console.log(state);
    const [stateCategories, dispatchCategories] = useReducer(CategoriesReducer, state);

    return(
        <CategoriesContext.Provider value = {[stateCategories, dispatchCategories]}>
            {props.children}
        </CategoriesContext.Provider> 
        
    )
}

export default CategoriesContextProvider;