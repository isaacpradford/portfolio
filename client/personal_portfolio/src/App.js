import React, {useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom"

// Pages
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';

function App() {
    return (
        <div className='container'>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/project/:projectId" element={<ProjectPage />}></Route>
            </Routes>
        </div>
    )
}

export default App;