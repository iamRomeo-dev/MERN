import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false)  }

  useEffect(() => {
    fetchData()
  }, []);

  return {loading,data};
};

function App() {

  const {loading,data} = useFetch("https://vip.bitcoin.co.id/api/btc_idr/ticker");
  return (
    <div>
      {loading ? <div>Loading...</div> :
      <ul>
             {data.map((item) => (
              <li key={item.name}>
                {item.nom} - {item.tagline}
              </li>
            ))}
          </ul>
        
      }
    </div>
  )
}

export default App;