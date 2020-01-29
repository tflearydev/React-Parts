import React from 'react';

const WithLoading = (Component) => {

  return (props) => {
    const {state} = props

    if (!state.isFetching && state.data.length > 0){
        return (<Component data = {state.data} />);
    } 
    return (<p>Loading Data......</p>);
  }
}

export default WithLoading;