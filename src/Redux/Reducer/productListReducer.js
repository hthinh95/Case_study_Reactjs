const stateList = []

const productListReducer = (state = stateList, action) => {
    switch (action.type) {
        case "GET_LIST_API_SUCCEEDED": {
            return [
                ...action.payload.lists
            ]
        }

        default:
            return state
    }
}

export default productListReducer
