import React from 'react';
import { Form } from "react-bootstrap";


const FormSelectInput = (props) => {
    const data = props.data;
    return(
        <Form.Control as="select">
            <option value = "">Any</option>
            {
                data.map((obj) => (<option key={obj.id} value = {obj.id}>{obj.name}</option>))
            }
        </Form.Control>
    )

}

export default FormSelectInput;