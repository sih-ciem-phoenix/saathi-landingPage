import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'

function RouteComponent() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteComponent
