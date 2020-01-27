import React from 'react';
import { Toast } from 'react-bootstrap';
//a lot of this bootstrap stuff is in docs, dont worry too much

function Confirmation({ toggle }) {
    return (
        <Toast onClose={() => toggle(false)} animation={true}>
            <Toast.Header>
                <strong className="mr-auto">Your Part's Order Is Being Processed-</strong> 

                <small> just now</small>
            </Toast.Header>
            <Toast.Body>
                Your confirmation will be sent out shortly
            </Toast.Body>
        </Toast>
    );
}

export default Confirmation;