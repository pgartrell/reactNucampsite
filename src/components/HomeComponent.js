import React from 'react' 
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import {Loading} from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl';
import {FadeTransform} from 'react-animation-components'


//Making the Card itself. The info needed in the card will de defined and come from the below function.
function RenderCard({item, isLoading, errMess}) {
    if(isLoading) {
        return <Loading />
    }
    if(errMess) {
        return <h4>{errMess}</h4>
    }
    return(
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}    >
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    )
}

//This function is How the RenderCard needs to be organized. Also passing through the properties of the campsite array with the 
//featured boolean as true
function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                <RenderCard
                        item={props.campsite}
                        isLoading={props.campsitesLoading}
                        errMess={props.campsitesErrMess}
                    />
                </div>
                <div className="col-md m-1">
                <RenderCard
                        item={props.promotion}
                        isLoading={props.promotionLoading}
                        errMess={props.promotionErrMess}
                    />
                </div>
                <div className="col-md m-1">
                    <RenderCard 
                        item={props.partner}
                        isLoading={props.partnerLoading}
                        errMess={props.partnerErrMess}
                      />
                </div>
            </div>
        </div>
    );
}

export default Home;