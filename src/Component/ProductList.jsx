import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actionTypes from '../Redux/actionTypes';
import routes from '../routes';
import { Link } from 'react-router-dom';

export default function ProductList() {


    const dispatch = useDispatch();
    const lists = useSelector(state => state.productListReducer)

    useEffect(() => {
        dispatch({ type: "GET_LIST_API_REQUESTED" });
    }, []);


    const addToCart = (listId) => {
        dispatch({ type: actionTypes.INCREMENT, payload: { listId, amount: 1 } });
    };

    return (
        <div className='mt-2'>
            <div className='row'>
                {lists.map((list, index) => (
                    <div key={index} className='col-2 mb-2'>
                        <div className="card text-left">
                            <img className="card-img-top mt-2" src={list.img} alt={list.tensp} />
                            <div className="card-body">
                                <h6 className="card-title " style={{ height: 50 }}>{list.tensp}</h6>
                                <p className="card-text">{list.price.toLocaleString()}</p>
                                <button className='btn btn-success mb-1' onClick={() => { addToCart(list.id) }} >Add to Cart</button>
                                <Link
                                    to={`${routes.web.detail}/${list.id}`}
                                    className="btn btn-primary"
                                >
                                    Xem sản phẩm
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}



