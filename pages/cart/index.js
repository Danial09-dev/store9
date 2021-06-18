import React from 'react'
import CartTable from './CartTable'
import MenuAppBar from '../../pages/collection/MenuAppBar'


export default function Cart() {
    return (
        <>
        <MenuAppBar/>
        <br/>
        <div>
            <CartTable/>
        </div>
        </>
    )
}
