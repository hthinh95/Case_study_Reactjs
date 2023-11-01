import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actionTypes from '../Redux/actionTypes';


export default function Giohang() {

  const dispatch = useDispatch();

  const giohangList = useSelector(state => state.giohangReducer)

  const [isCartEmpty, setIsCartEmpty] = useState(false);


  const handleSale = () => {
    if (window.confirm('Xác nhận thanh toán?')) {
      dispatch({ type: 'CLEAR_CART' });
      setIsCartEmpty(true);
      setTimeout(() => {
        setIsCartEmpty(true);
        setIsCartEmpty(false)
        document.getElementById('btnClose').click();
      }, 1000);
    }
  };

  return (
    <div>

      <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ minWidth: 1000 }}>
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>Tên sản phẩm</th>
                    <th className='text-center'>Số lượng</th>
                    <th className='text-right'>Giá</th>
                    <th className='text-right'>Tổng tiền</th>
                    <th className='text-center'>Action</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {giohangList.some(giohangItem => giohangItem.kho !== 0) ? (
                    giohangList.map(giohangItem => (
                      giohangItem.kho !== 0 && (
                        <tr key={giohangItem.id}>
                          <td style={{ width: 300 }}>{giohangItem.kho === 0 ? "" : `${giohangItem.tensp}`}</td>
                          <td className='text-center' style={{ width: 100 }}>{giohangItem.kho === 0 ? "" : `${giohangItem.kho}`}</td>
                          <td className='text-right' style={{ width: 100 }}>{giohangItem.kho === 0 ? "" : `${giohangItem.price.toLocaleString()}`}</td>
                          <td className='text-right' style={{ width: 150 }}>{giohangItem.kho === 0 ? "" : `${(giohangItem.price*giohangItem.kho).toLocaleString()}`}</td>
                          <td><button className='btn btn-success mr-1' onClick={() => { dispatch({ type: actionTypes.INCREMENT, payload: { listId: giohangItem.id, amount: 1 } }) }}>Thêm</button><button className='btn btn-danger' onClick={() => { dispatch({ type: actionTypes.DECREMENT, payload: { listId: giohangItem.id, amount: 1 } }) }}>Xóa</button></td>
                          <td></td>
                          <td></td>
                        </tr>
                      )
                    ))
                  ) : (
                    <>
                      {isCartEmpty ? (
                        <p>Thanh toán thành công</p>) : (
                        <p>Please add some products to cart</p>
                      )}
                    </>
                  )}
                  <td>Tổng tiền: </td>
                  <td></td>
                  <td></td>
                  <td className='text-right' style={{ width: 150 }}>{giohangList.some(giohangItem => giohangItem.kho !== 0) ? (
                    `${giohangList.reduce((total, giohangItem) => total + giohangItem.price * giohangItem.kho, 0).toLocaleString()}`
                  ) : `0`}</td>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" id='btnClose'>Close</button>
              <button type="button" className="btn btn-primary" onClick={() => handleSale()} disabled={!giohangList.some(giohangItem => giohangItem.kho !== 0)}>Thanh toán</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
