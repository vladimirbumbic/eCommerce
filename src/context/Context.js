import React, {useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/Reducer';

const AppContext = React.createContext();

const getProductsFromLs = _ => {
    const lsProducts = JSON.parse(localStorage.getItem('product'));
    return localStorage.getItem('product') !== null ? lsProducts : [];
}

const initialState = {
    isOpen: false,
    cart: getProductsFromLs(),
    total: 0,
    amount: 0
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleOpenCloseCart = type => {
        dispatch({type: 'OPEN_CLOSE_CART', payload: type});
    }
    const addItemToCart = product => {
        dispatch({type: 'ADD_TO_CART', payload: product});
    }
    const clearCart = _ => {
        dispatch({type: 'CLEAR_CART'});
        localStorage.clear();
    }
    const removeCartItem = id => {
        dispatch({type: 'REMOVE_CART_ITEM', payload: id});
    }
    const toggleAmount = (id, type) => {
        dispatch({type: 'TOGGLE_AMOUNT', payload: {id, type}});
    }

    useEffect(_ => {
        dispatch({type: 'GET_TOTAL'});
    }, [state.cart]);

    return (
        <AppContext.Provider value={{
            ...state,
            toggleOpenCloseCart,
            addItemToCart,
            clearCart,
            removeCartItem,
            toggleAmount
        }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = _ => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}