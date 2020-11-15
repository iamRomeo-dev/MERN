import React, { useState, useEffect } from "react";
// import Form from 'react-bootstrap/Form';
import { Bar, BarChart, CartesianGrid, ReferenceLine, Tooltip, XAxis, YAxis } from "recharts";

const labelStyle = {
  fontFamily:
    "Inter var,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  fontWeight: 600,
};

// function Test2() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch("https://api.punkapi.com/v2/beers")
//       .then((res) => {
//         return res.json();
//       })
//       .then((monResultat) => {
//         setItems(monResultat);
//       });
//   }, []);

//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.name}>
//           {item.name} - {item.tagline}
//         </li>
//       ))}
//     </ul>
//   );
// }

function Test2() {
  const [status, setStatus] = useState('');
  const [items, setItems] = useState('');
  const [error, setError] = useState('');

  const [mouvement, setMouvement] = useState("");
  const [name, setName] = useState("");
 
  useEffect(() => {
    setStatus("loading");
    setItems('');
    setError('');
    fetch("http://localhost:8080/api/mvts")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setStatus("success");
         console.log(data)
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      })
  }, []);

    // console.log(mouvement)
   const dataMvts = items ? items.filter((mvt) => mvt.title === mouvement).filter((nom) => nom.firstname === name) : null;
    
    return (
      <>
          {/* The chart */}
              <div
                id="container"
              >
                <select
                value={name}
                onChange={(e) => setName(String(e.currentTarget.value))}
              >
                <option value="">...</option>
                <option value="romeo">Roméo</option>
                <option value="jo">Jo</option>
                
              </select>
              <select
                value={mouvement}
                onChange={(e) => setMouvement(String(e.currentTarget.value))}
              >
                <option value="">...</option>
                <option value="deadlift">deadlift</option>
                <option value="pull ups">pull ups</option>
                
              </select>
                {status === "success" && (
                  <BarChart width={830} height={350} data={dataMvts} barCategoryGap={2}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="updatedAt" tick={labelStyle} />
                    <YAxis tick={labelStyle} type="number" padding={{ top: 10, bottom: 10 }} />
                    <Tooltip
                      contentStyle={{
                        fontFamily:"Inter var,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                        fontSize: "0.75rem",
                        lineHeight: "1rem",
                        fontWeight: 600,
                        borderRadius: "0.5rem",
                        boxShadow: "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)",
                        padding: "0.5rem",
                        border: 0,
                      }}
                      itemStyle={{ margin: 0, marginTop: "0.25rem", padding: 0 }}
                    />
                    <ReferenceLine y={0} stroke="#333" strokeWidth={1} />
                    <Bar dataKey="weight">
                    </Bar>
                  </BarChart>
                )}
                {status === "error" && <span>{error.message}</span>}
                {status === "loading" && <span>Loading...</span>}
              </div>
      </>
    );
  };

export default Test2;

