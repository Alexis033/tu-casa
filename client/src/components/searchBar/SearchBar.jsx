import './searchBar.scss'
import { useState } from 'react'

const types = ["buy", "rent"]

function SearchBar() {
  const [query, setQuery] = useState({
    type: types[0],
    location: "",
    minPrice: 0,
    maxPrice: 0
  })

  const switchType = (type) => {
    setQuery((prev)=>{
      return{...prev, type: type}
    })
  }
  return (
    <div className='searchBar'>
      <div className="type">
        {types.map((type)=>{
          return(
            <button 
              key={type} 
              onClick={()=>switchType(type)} 
              className={query.type === type ? 'active' : ''}>
              {type}
            </button>
          )
        })}
        
      </div>
      <form>
        <input type="text" name='location' placeholder='City Location' />
        <input type="number" name='minPrice' min={0} max={9000000000} placeholder='Min Price' />
        <input type="number" name='maxPrice' min={0} max={9000000000} placeholder='Max Price' />
        <button>
          <img src="/search.png" alt="search button" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar