
import React from "react"



function App() {
  const [object2, setObject2] = React.useState("")
  React.useEffect(()=>{
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(response=>{
        return response.json()
    })
    .then(data =>{
      let object1= data
      {setTimeout(() => {
        setObject2(object1.drinks.map(function(elements){
          return (<div key={elements.idDrink} className="element-div">
                  <h4>{elements.strDrink}</h4>
                  <img src={elements.strDrinkThumb}/>
                  <p>{elements.strInstructions}</p>
                </div>)
        }))  }, 2000)}
    })
    .catch(error =>{
        console.log(error.message)
    })

  },[])
    

  return (
    <div className="App">
        <h1 >Cocktail</h1>
        {object2?"":<h1 className="Loading-words">the page is loading please wait</h1>}
         <div className="conteiner">
            {object2}
          </div>
    </div>
  );
}

export default App;
