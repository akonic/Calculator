import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [list, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://swapi.dev/api/peope/");
      console.log(response);
      if(response.ok===false)
      {  setLoading(false);
        throw new Error('Error found')
      }
      const data = await response.json();
      setData(data.results);
      setLoading(false);
    } catch (error) {
      console.log('ErrorFounf',error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleClick = (i) =>{
    console.log(i);
  }
  return (
    <div className="App">
      <div> Star Wars</div>
      <button className="button" onClick={getData}>
        Get Data
      </button>
      <div>
        {loading === false ? (
          list.map((key,i) => (
            <div key={i} className="dataTile" onClick={()=>handleClick(i)}>
              <div>{key.name}</div>
              <div>{key.height}</div>
            </div>
          ))
        ) : (
          <div className="App">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default App;
// fetch("https://swapi.dev/api/films/").then((response)=>{
//   return response.json();
// }).then((data)=>{
//    setData(data.results)
// })
