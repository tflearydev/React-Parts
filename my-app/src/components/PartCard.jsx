import React from 'react';
import { Card, Badge, Button, Container} from 'react-bootstrap'


const mapImage = (category_id) => {
    switch (category_id) {
        case 1:
            return './engine.jpg';
            break;

        case 2:
            return './transmission.jpg';
            break;

        case 3:
            return './cab_sleeper.jpg';
            break;

        case 4:
            return './hood.jpeg';
            break; 
            
        case 5:
            return './axles.jpeg';
            break;        
        default:
            return './hood.jpeg';
            break;
    }
    
    return './hood.jpeg';
}

function PartCard({ data, setOrdered }) {
    return (
        <Container className="con">
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={mapImage(data.category_id)} />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
                    <Badge pill className="mb-1" variant="warning">
                        $TBD
                    </Badge>
                </div>
                <Card.Text className="text-secondary">{data.desc}</Card.Text>
                <Button
                    onClick={() => setOrdered()}
                    className="mt-auto font-weight-bold"
                    variant="success"
                    block
                    >
                        Order Part
                    </Button>
            </Card.Body>
        </Card>
        </Container>
    );
}

export default PartCard;