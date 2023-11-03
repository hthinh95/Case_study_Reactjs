import React, { useState, useEffect } from 'react'
import ProductList from './ProductList'
import Giohang from './Giohang'
import Header from './Header'
import { useParams } from "react-router-dom";
import axios from 'axios'


export default function ShoppingMall() {

    const [user, setUser] = useState({
        id: "",
        userName: "",
        password: "",
    });
    const { userId } = useParams();
    useEffect(() => {
        async function fetchUser() {
            const response = await axios.get(`http://localhost:3001/users/${userId}`);
            const data = response.data;
            setUser({
                ...user,
                id: data.id,
                userName: data.userName,
                password: data.password,
            });
        }
        fetchUser()
    }, [userId]);

    return (
        <div>
            <div className='container'>
                <Header user={user} />
                <ProductList />
                <Giohang />
            </div>
        </div>
    )
}


