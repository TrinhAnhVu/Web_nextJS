import React from 'react'
import Navbar from './Navbar'
import Stack from '@mui/material/Stack'
import Notify from './Notify'
import Modal from './Modal'

function Layout({children}) {
    return (
        <Stack height='100vh' className="container">
            <Navbar/>
            <Notify/>
            <Modal/>
            {children}
        </Stack>
    )
}

export default Layout