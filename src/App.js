import React from "react"



function App() {
  const [object2, setObject2] = React.useState("")
  React.useEffect(()=>{
    const xhr =  new XMLHttpRequest()
    xhr.open("Get", "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", true)
    xhr.send()
    xhr.onload=function(){
        if(xhr.status === 200){
            let object1 = JSON.parse(this.response)
            console.log(object1.drinks[0].strDrink)
            {setTimeout(() => {
            setObject2(object1.drinks.map(function(elements){
              console.log(elements)
              return (<div key={elements.idDrink} className="element-div">
                      <h4>{elements.strDrink}</h4>
                      <img src={elements.strDrinkThumb}/>
                      <p>{elements.strInstructions}</p>
                    </div>)
            }))  }, 2000)}
        }
    }
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
