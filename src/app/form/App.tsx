import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Sidebar from '../../components/Sidebar'
// import FormContent from "../../components/FormContent"
import Products from "../../components/FormContent"



function App() {


    return <Router>
        <div className="flex h-screen">
            <Sidebar />


            <div className="rounded w-full flex justify-between flex-wrap h-100px">
                {/* <Routes> */}


                    {/* <FormContent /> */}
                    <Products />
                    {/* <Route path="/" element={<FormContent />} />
                    <Route path="/Products" element={<Products />} /> */}
                {/* </Routes> */}
            </div>

        </div>
    </Router>
}

export default App
