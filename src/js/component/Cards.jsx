import React from "react";

import PropType from "prop-types"

const Cards = (props) => {
    return ( 
        <div className="col-deck">
            <div className="col">
                <div className="card">
                    <img src={props.image} className="card-img-top" alt=""></img>
                    <div className="card-body">
                        <h5 className="card-title text-center">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                    <div className="card-footer bg-secondary text-center">
                        <a href={props.btnUrl} target="blank" className="btn btn-success">Más sobre {props.title}</a>
                    </div>
                </div>
            </div>
        </div>
    );  
};

Cards.propTypes = {
    title: PropType.string,
    image: PropType.string,
    description: PropType.string,
    button: PropType.string

};

export default Cards;