import React, { createContext, useReducer } from 'react';
import CategoriesReducer from '../reducers/categories/CategoriesReducer';
export const CategoriesContext = createContext();

const CategoriesContextProvider = (props) => {
    const [categoriesState, setCategoriesState] = useState({
        isFetching: false,
        dataLoaded: false,
        data: {}
        
    });
    const [categoriesState, categoriesDispatch] = useReducer(CategoriesReducer, categoriesState);

    return(
        <CategoriesContext.Provider value = {[categoriesState, categoriesDispatch]}>
            {props.children}
        </CategoriesContext.Provider> 
        
    )
}

export default CategoriesContextProvider;