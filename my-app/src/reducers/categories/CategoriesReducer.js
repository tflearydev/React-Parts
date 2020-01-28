const CategoriesReducer = (state, action) => {
    switch (action.type) {
        case 'IS_FETCHING':
            return {
                ...state,
                isFetching: true
            };

        case 'LOAD_DATA':
            return {
                ...state,
                isFetching: false,
                dataLoaded: true,
                data: action.payload
            };
         
            
        default:
            return state;
    }
};

export default CategoriesReducer;