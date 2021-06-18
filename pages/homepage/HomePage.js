import React from 'react'
import MenuAppBar from '../collection/MenuAppBar'
import SimpleSlider from '../collection/Slider'

export default function HomePage() {
    return (
        <div style={{overflow: 'hidden'}}>
            <MenuAppBar/>
            <br/>
            <h1 style={{textAlign: 'center'}}>Welcome to the Home Page</h1>
            <SimpleSlider/>       
        </div>
    )
}
