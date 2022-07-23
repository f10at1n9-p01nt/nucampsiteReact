import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const displayCard = ({ item }) => {
    const { image, name, description } = item;

    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
}

export default displayCard;