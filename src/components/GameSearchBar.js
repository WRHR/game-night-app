import React,{useState} from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import {FormButton} from '../Styled/FormStyles'

export default function GamesSearchBar({setSearchResults}){
    const [searchInput, setSearchInput] = useState('')


    const handleSearch = (e) => {
        e.preventDefault()
        let formatedSearch = searchInput.replace(' ', '-')
        fetch(`https://api.rawg.io/api/games?search=${formatedSearch}`)
                .then(res => res.json())
                .then(({results}) => setSearchResults(results))
    }

    const handleChange =(e)=> {
        setSearchInput(e.target.value)
        
    }

    return(
        <div style={{paddingLeft:'10px'}}>
            <form onSubmit={handleSearch}>
                <input 
                    placeholder='Search for games' 
                    value={searchInput} 
                    onChange={handleChange}
                />
                <FormButton type='submit'><SearchRoundedIcon style={{fontSize: '10px'}}/></FormButton>
            </form>
        </div>
    )
}