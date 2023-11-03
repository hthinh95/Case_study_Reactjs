import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Header from './Header';
import { useDispatch } from 'react-redux'
import actionTypes from '../Redux/actionTypes';





export default function ProductDetail() {
    const dispatch = useDispatch();


    const { productId } = useParams();
    const [product, setProduct] = useState({
        id: 1,
        tensp: "",
        price: 0,
        kho: 0,
        img: "",
        manhinh: "",
        camsau: "",
        camtruoc: "",
        hdh: ""
    });
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        fetchProduct(productId);
    }, [productId]);

    const loginUser = JSON.parse(window.localStorage.getItem("loginUser"))


    async function fetchProduct(productId) {
        const response = await axios.get(`http://localhost:3001/lists/${productId}`);
        const responseData = response.data;
        setProduct(responseData);
    }

    const handleAddToCart = (listId) => {
        dispatch({ type: actionTypes.INCREMENT, payload: { listId, amount: 1 } });
        setAddedToCart(true);
    }

    return (
        <div>
            <div className='container'>
                <Header user={loginUser} />
                <div className='row mt-3'>
                    <div className='col-4'>
                        <h3>{product.tensp}</h3>
                        <img style={{ width: '100%', height: '75%' }} src={product.img} alt={product.tensp} />
                    </div>
                    <div className='col-8'>
                        <h3>Thông số kỹ thuật</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{product.manhinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{product.hdh}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{product.camsau}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{product.camtruoc}</th>
                                </tr>
                                <tr>
                                    <th>Giá</th>
                                    <th>{product.price.toLocaleString()}</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>{addedToCart ? (
                                        <span>Added to Cart</span>
                                    ) : (
                                        <button className='btn btn-success' onClick={() => handleAddToCart(product.id)}>
                                            Add to Cart
                                        </button>
                                    )}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
