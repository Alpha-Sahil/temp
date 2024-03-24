import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}

export default AdminLayout