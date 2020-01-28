export const fetchCategories = async () =>{
    const response = await fetch('http://localhost:4000/vehicles?limit=200');
    const json = await res.json();
    return json;

}

