const reducer = (state, action) => {
    if (action.type === 'OPEN_CLOSE_CART') {
        if (action.payload === 'OPEN_CART') {
            return {...state, isOpen: true}
        }
        if (action.payload === 'CLOSE_CART') {
            return {...state, isOpen: false}
        }
    }
    if (action.type === 'ADD_TO_CART') {
        if (state.cart.some(product => product.id === action.payload.id)) {
            return state;
        } else {
            const newList = [...state.cart, action.payload];
            localStorage.setItem('product', JSON.stringify(newList));
            return {...state, cart: newList}
        }
    }
    if (action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    if (action.type === 'REMOVE_CART_ITEM') {
        const newList = state.cart.filter(item => item.id !== action.payload);
        localStorage.setItem('product', JSON.stringify(newList));
        return {
            ...state,
            cart: newList
        }
    }
    if (action.type === 'TOGGLE_AMOUNT') {
        console.log(state);
        const tempCart = state.cart.map(item => {
            if (item.id === action.payload.id) {
                if (action.payload.type === 'INCREASE') {
                    return {...item, amount: item.amount + 1}
                }
                if (action.payload.type === 'DECREASE') {
                    return {...item, amount: item.amount - 1}
                }
            }
            return item;
        }).filter(item => item.amount !== 0);
        localStorage.setItem('product', JSON.stringify(tempCart));
        return {...state, cart: tempCart}
    }
    if (action.type === 'GET_TOTAL') {
        let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
            const {price, amount} = cartItem;
            const itemTotal = price * amount;
            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal;
        },
        {
            total: 0,
            amount: 0
        })
        total = parseFloat(total.toFixed(2));
        return {...state, total, amount}
    }
}

export default reducer;