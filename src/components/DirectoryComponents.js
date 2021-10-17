import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


//Making the outline of the card. CardImgOverlay are the titles on top of the cards. This information is coming from campsites.js array
function RenderDirectoryItem({campsite}) {
    return (
        <Card >
            <Link to={`/directory/${campsite.id}`}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );
}


//The const Directory is mapping through each card and designing it as defined in RenderDirectoryItem. It is also giving appropiate sizing for each card defined by className
//The return for the Directory function is organizing how each card will lay on the page together. Along with giving breadcrumbs
function Directory(props) {

    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb> 
                        <BreadcrumbItem><Link to= '/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;