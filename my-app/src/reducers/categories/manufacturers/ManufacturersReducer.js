const ManufacturersReducer = (state, action) => {
    switch (action.type) {
        case 'IS_FETCHING':
            return {
                ...state,
                isFetching: true
            };
            break;
        case 'LOAD_DATA':
            return {
                ...state,
                isFetching: false,
                dataLoaded: true,
                data: action.payload
            };
            break;

        case 'UPDATE_SELECTED_ID':
            return {
                ...state,
                selected_id: action.payload
            };
            break;
            
        default:
            return state;
            break;
    }
};

export default ManufacturersReducer;