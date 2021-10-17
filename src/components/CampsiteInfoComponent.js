import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

  

//This maps through the comments array and says what information needs to be pulled and used from the array
  function RenderComments({comments}) {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => (
            <p key={comment.id}>
              {comment.text} <br />
              -- {comment.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          ))}
        </div>
      )
    }
  }
  
  //This is saying how each individual card needs to be organized
  function RenderCampsite({campsite}) {
      return (
        <div className="col-md-5 m-1">
          <Card>
            <CardImg top src={campsite.image} alt={campsite.name} />
            <CardBody>
              <CardText>{campsite.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )
    }

//This says how each card needs to be organized in the container/row along with breadcrumbs. 
//The last div says take the two above functions and pass the properties from the comments and campsites array and render them as defined in the above functions
  function CampsiteInfo(props) {
    if (props.campsite) {
      return (
        <div className="container">
            <div className="row">
              <div className="col">
                  <Breadcrumb> 
                      <BreadcrumbItem><Link to= '/directory'>Directory</Link></BreadcrumbItem>
                      <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <h2>{props.campsite.name}</h2>
                  <hr />
              </div>
          </div>
          <div className="row">
            <RenderCampsite campsite ={props.campsite} />
            <RenderComments comments ={props.comments}/>
          </div>
        </div>
      )
    }
    return <div />  
}

export default CampsiteInfo;
