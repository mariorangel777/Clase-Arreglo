import './App.css';

function App() {
  
  const burbuja = (array)=>{
    //variables necesarias
    let n,i,k,aux,contador

    n=array.length
    i=k=aux=contador=0
    //Mostramos valores iniciales
    console.log(array)
    console.log("n:",n)
    console.log("i:",i)
    console.log("k:",k)

    //Algoritmo de burbuja
    for (k=1;k<n;k++){
      for (i=0;i<(n-k);i++){
        if (array[i]>array[i+1]){
          //Mostramos el arreglo antes del cambio
          console.log("")
          console.log("Entra al if en: ")
          console.log("En la iteracion de i: ",i)
          console.log("En la iteración de j: ",k) 
          console.log("Antes del cambio",array)
          aux=array[i]
          array[i]=array[i+1]
          array[i+1]=aux
          
          console.log("Despues del cambio:",array)
        }
        else{
          console.log("No entra al if porque")
          console.log("El elemento ",array[i])
          console.log("NO es mayor que:",array[i+1])
          console.log("")
        }
        contador++
      }
        console.log("Se llevan ",contador," iteraciones")
        console.log("")

    }
    return array
  }

  useEffect (()=>{
    //console.log("Return: ",burbuja([3,99,88,123,65,9,5,4,24,78,12]))
},[])

  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and ave to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
