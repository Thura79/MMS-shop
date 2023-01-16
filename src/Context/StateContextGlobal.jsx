import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getData } from "../api";

export const StateContext = createContext();

const StateContextGlobal = ({ children }) => {
  const [search, setsearch] = useState("");
  const [productList, setProductList] = useState([]);

  const initialState = {
    products: [],
    cart: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload, qty: 1 };
      case "ADD-TO-CART":
        const item = action.payload;
        const isExisted = state.cart.find((c) => c.id === item.id);
        if (isExisted) {
          return {
            ...state,
            cart: state.cart.map((c) =>
              c.id === item.id ? { ...item, qty: 1 } : { ...c }
            ),
          };
        } else {
          return { ...state, cart: [...state.cart, { ...item, qty: 1 }] };
        }
      case "REMOVE-FROM-CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case "Cart-EMPTY":
        return { ...state, cart: (state.cart = []) };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = async () => {
    const data = await getData("/products");
    // dispatch({type: 'GET_PRODUCTS', payload: data});
    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  console.log(state.cart);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: productList });
    const filterproduct = productList.filter((pd) =>
      pd.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    dispatch({ type: "GET_PRODUCTS", payload: filterproduct });
  }, [productList, search]);

  const data = { state, search, setsearch, dispatch };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};
export const useStateContext = () => useContext(StateContext);
export default StateContextGlobal;
