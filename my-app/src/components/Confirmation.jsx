import React from 'react';
import { Toast } from 'react-bootstrap';
//a lot of this bootstrap stuff is in docs, dont worry too much

export function Confirmation({ toggle }) {
    return (
        <Toast onClose={() => toggle(false)}>
            <Toast.Header>
                <strong className="mr-auto">Your Part's Order Is Being Processed</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>
                Your delicious pizza will be with you in 30 minutes!
            </Toast.Body>
        </Toast>
    );
}