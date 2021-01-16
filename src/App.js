import React,{useEffect,useState} from 'react'
import Recipe from './components/Recipe'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
const App =()=>{
  const APP_ID='1e7f2c0d';
  const APP_KEY='42b1cb39b6bbc1fa39451beda8d4324b';
  const[recipes,setRecipes]=useState([])
  const [search ,setSearch]=useState('')
  const [query, setQuery]  =useState('chicken')
   
  useEffect( ()=>{
     getRecipe()
 
  },[query])
  const getRecipe=  async ()=>{
    const  response=await  fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
     const data = await response.json()
     setRecipes(data.hits)
    

  }
  const updateSearch=e=>{
 setSearch(e.target.value)

  }
  const getSearch=e=>{
 e.preventDefault()
 setQuery(search)
 setSearch('')

  }

return(
 
  <div className="App">
<h1 className='header'>A RECIPE APPLICATION</h1>
   <form  onSubmit={getSearch}  className="search-form">
     <input className="search-bar"type="text"value={search}onChange={updateSearch}/>
     <button   className="search-button" type="submit">search</button>
   </form>
   <div className="recipes">
   {recipes.map(recipe=>(
 <Recipe
 key={recipe.recipe.label}
  title={recipe.recipe.label}
 calories={recipe.recipe.calories}
 image={recipe.recipe.image}
 ingredients={recipe.recipe.ingredients}
 />
 

   ))}
   </div>
   
  </div> 
)

}
export default App