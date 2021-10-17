import React from 'react' 
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


//Making the Card itself. The info needed in the card will de defined and come from the below function.
function RenderCard({item}) {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

//This function is How the RenderCard needs to be organized. Also passing through the properties of the campsite array with the 
//featured boolean as true
function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.campsite} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.partner} />
                </div>
            </div>
        </div>
    );
}

export default Home;