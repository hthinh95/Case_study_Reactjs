import actionTypes from "../actionTypes"

const stateGioHang = [
    {
        id: 1,
        tensp: "Điện thoại iPhone 15 Pro Max 256GB",
        price: 33990000,
        kho: 0,
        img: "./img/Điện thoại iPhone 15 Pro Max 256GB.jpg"
    },
    {
        id: 2,
        tensp: "Điện thoại iPhone 15 Pro 128GB",
        price: 27990000,
        kho: 0,
        img: "./img/Điện thoại iPhone 15 Pro 128GB.jpg"
    },
    {
        id: 3,
        tensp: "Điện thoại iPhone 15 Plus 128GB",
        price: 25990000,
        kho: 0,
        img: "./img/Điện thoại iPhone 15 Plus 128GB.jpg"
    },
    {
        id: 4,
        tensp: "Điện thoại iPhone 15 128GB",
        price: 22990000,
        kho: 0,
        img: "./img/Điện thoại iPhone 15 128GB.jpg"
    },
    {
        id: 5,
        tensp: "Điện thoại Samsung Galaxy A05 4GB",
        price: 3090000,
        kho: 0,
        img: "./img/Điện thoại Samsung Galaxy A05 4GB.jpg"
    },
    {
        id: 6,
        tensp: "Điện thoại OPPO Reno10 Pro 5G",
        price: 13990000,
        kho: 0,
        img: "./img/Điện thoại OPPO Reno10 Pro 5G.jpg"
    },
    {
        id: 7,
        tensp: "Điện thoại Xiaomi Redmi 12 4GB",
        price: 3440000,
        kho: 0,
        img: "./img/Điện thoại Xiaomi Redmi 12 4GB.jpg"
    },
    {
        id: 8,
        tensp: "Điện thoại Vivo Y17s 4GB",
        price: 3790000,
        kho: 0,
        img: "./img/Điện thoại Vivo Y17s 4GB.jpg"
    },
    {
        id: 9,
        tensp: "Điện thoại iPhone 14 Pro Max 128GB",
        price: 26490000,
        kho: 0,
        img: "./img/Điện thoại iPhone 14 Pro Max 128GB.jpg"
    },
    {
        id: 10,
        tensp: "Điện thoại Xiaomi 13T 5G 12GB",
        price: 11990000,
        kho: 0,
        img: "./img/Điện thoại Xiaomi 13T 5G 12GB.jpg"
    }
]

const giohangReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            var productCartId = action.payload.listId;
            var amount = action.payload.amount;
            const incrementIndex = state.findIndex(productCart => productCart.id === productCartId);

            if (incrementIndex !== -1) {
                const updatedState = [...state];
                updatedState[incrementIndex] = {
                    ...state[incrementIndex],
                    kho: state[incrementIndex].kho + amount
                };

                return updatedState;
            }
            return state;

        case actionTypes.DECREMENT:
            var productCartId = action.payload.listId;
            var amount = action.payload.amount;
            const decrementIndex = state.findIndex(productCart => productCart.id === productCartId);

            if (decrementIndex !== -1) {
                const updatedState = [...state];
                updatedState[decrementIndex] = {
                    ...state[decrementIndex],
                    kho: state[decrementIndex].kho - amount
                };

                return updatedState;
            }
            return state;
        case actionTypes.CLEAR_CART:
            return stateGioHang;

        default:
            return state;
    }
};

export default giohangReducer