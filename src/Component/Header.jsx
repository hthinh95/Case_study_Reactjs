import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link, useNavigate } from "react-router-dom";
import routes from '../routes';
import Giohang from './Giohang';


export default function Header(props) {
    const productsCart = useSelector(state => state.giohangReducer);
    const productCount = productsCart.filter(product => product.kho !== 0).length;
    const navigate = useNavigate()

    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    const handleOpenCartModal = () => {
        setIsCartModalOpen(true);
    }

    const handleCloseCartModal = () => {
        setIsCartModalOpen(false);
    }


    return (
        <div className="header d-flex justify-content-between container">
            <h1 className="header-left p-2">LinhtinhStore</h1>
            < div className="header-right ml-auto p-2">
                <p
                    className="btn btn-info dropdown-toggle mt-2 mr-2"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Welcome {props.user.userName}
                </p>


                <span style={{ width: 17, cursor: 'pointer' }} data-toggle="modal" data-target="#modelId" onClick={handleOpenCartModal}>
                    <i className="fa fa-cart-arrow-down mt-4"></i> ({productCount > 0 ? `${productCount}` : '0'})Giỏ hàng
                </span>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {/* <Link
                        to={`${routes.web.history}/${props.user.id}`}
                        className="dropdown-item"
                        style={{ textDecoration: "none", color: "black" }}
                        >
                        Lịch sử mua hàng
                    </Link> */}
                    <a
                        onClick={() => { window.localStorage.removeItem("loginUser"); navigate(routes.web.login) }}
                        className="dropdown-item"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        Logout
                    </a>
                </div>
            </div>
            <Giohang isCartModalOpen={isCartModalOpen} handleCloseCartModal={handleCloseCartModal} />
        </div>
    )
}
