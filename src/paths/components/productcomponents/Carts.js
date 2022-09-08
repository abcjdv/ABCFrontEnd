import React from "react";
import { Link } from "react-router-dom"
import Loader from "../../../utils/loader";
const Carts = (props) => {
    return (
        <div key={props.index} className="col-lg-3 col-md-6 mb-4">
            <div className="card hotel">
                <div className="hotel-img">
                    <div className="Product-items-pic">
                        <Link to={`/${props.id}`}><img width="" height="" src={props.image} alt="Hotel 1" className="" /></Link>
                    </div>
                </div>
                <h3>{props.name}</h3>
                <h5>${parseFloat(props.price) + props.percentage(parseFloat(props.price))}</h5>
                <div className="mb-2 favrt">
                    <button onClick={() => { props.AddToCart(props.id) }} className="btn btn-outline p-2 spk-btn" disabled={props.fun(props.id)}>Add to Cart</button>
                    {props.isInFav(props.id) ?
                        <i
                            onClick={() => props.HandleRemoveFromFavourite(props.id)}
                            className="fa fa-heart fa_heart"
                            id="heart"
                            aria-hidden="true"
                            style={props.mystyle}
                        ></i>
                        : <i
                            onClick={() => props.HandleAddToFavourite(props.id)}
                            className="fa fa-heart fa_heart"
                            id="heart"
                            aria-hidden="true"
                            style={props.mystyle1}
                        ></i>
                    }
                    {props.loader === props.id && <Loader className="Product-spinner" />}
                </div>
            </div>
        </div >
    )
}
export default Carts