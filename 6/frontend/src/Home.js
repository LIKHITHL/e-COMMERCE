import React from 'react'
import Header from './Components/Header'
import HomeCover from './Pages/HomeCover'
import Slider from './Pages/Slider'
import Footer from './Components/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <HomeCover />
            <Slider />
            <Footer />
        </div>
    )
}

export default Home