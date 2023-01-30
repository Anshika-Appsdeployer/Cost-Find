import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Page1Main from './components/Page1Main'
import Page2Main from './components/Page2Main'
import Page3Main from './components/Page3Main'

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Page1Main />} />
                <Route path="/page1" element={<Page1Main />} />
                <Route path="/page2" element={<Page2Main />} />
                <Route path="/page3" element={<Page3Main />} />
            </Routes>
        </>
    )
}

export default App