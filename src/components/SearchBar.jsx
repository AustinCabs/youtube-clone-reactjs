import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
    let [value, setValue] = React.useState('')

    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault()

        if (value) {
            navigate(`/search/${value}`)
            setValue('')
        }
        // if (value.length !== 0) {
        //     navigate(`/search/${value}`)
        //     // setValue(value)
        // } else {
        //     navigate(`/search/new`)
        //     // setValue('')
        // }
    }
    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input type="text"
                className='search-bar'
                value={value}
                placeholder='Search ...'
                onChange={(e) => {
                    setValue(e.target.value)

                }}
            />
            <IconButton
                type='submit'
                sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar