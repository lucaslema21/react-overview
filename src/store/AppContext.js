import { createContext } from "react";

const AppContext = createContext({
    isLoggedIn: false,
    products: []
})

export default AppContext