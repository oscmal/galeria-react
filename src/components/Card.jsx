import React from "react";

//import { Card as BCard } from "react-bootstrap";

const Card = (props) => {
    const { title, desc, photo} = props;

    return (
        <div className="col-4 border 1px solid blak m-3" >
            <img 
                src={photo} 
                className="card-img-top" 
                alt="..."
                style={{ width: '100%' }}
            />
            <div className="card-body">
                <h5 className="card-title"> {title} </h5>
                <p className="card-text"> {desc} </p>
            </div>
        </div>
    );
};

export default Card;