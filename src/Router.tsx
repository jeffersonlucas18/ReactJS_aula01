import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import { Carrinho } from "./pages/Carrinho"
import { Catalogo } from "./pages/Cataloge"

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/cart" element={<Carrinho />}></Route>
                <Route path="/catalogo" element={<Catalogo />}></Route>
            </Routes>
        </Router>
    )
}