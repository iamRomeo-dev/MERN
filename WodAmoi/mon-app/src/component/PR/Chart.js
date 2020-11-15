import React, { useState, useEffect } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ReferenceLine, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Form from 'react-bootstrap/Form'

const labelStyle = {
  fontFamily:
    "Inter var,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  fontWeight: 600,
};

function ChartPr() {
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

    const dataMvts = items ? items.filter((mvt) => mvt.title === mouvement).filter((nom) => nom.firstname === name) : null;

    const double = Array.from(new Set(dataMvts))
    console.log("C'est le "+ double);

   const mouvementsOptionData = items ?
   items.map((mvt) => {
     return (
      <option value={mvt.title}>{mvt.title.charAt(0).toUpperCase() +
        mvt.title.slice(1).toLowerCase()}</option>
     );
   })
   : null;
//    const dataDate = new Intl.DateTimeFormat(undefined).format(items?.updatedAt);

    return (
        <>
            {/* The chart */}
            <div className="PositionDansHerder">
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom" className="searchBarContainer">
                    <Form.Control as="select" custom  
                    value={name}
                    onChange={(e) => setName(String(e.currentTarget.value))}
                    className="text-center" size="lg">
                    <option value="">Select please...</option>
                    <option value="romeo">Roméo</option>
                    <option value="jo">Jo</option>
                    {/* {namesOptionData} */}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.SelectCustom" className="searchBarContainer">
                    <Form.Control as="select" custom  
                     value={mouvement}
                     onChange={(e) => setMouvement(String(e.currentTarget.value))}
                     className="text-center" size="lg">
                    {mouvementsOptionData}
                    </Form.Control>
                </Form.Group>
              </Form>

              </div>
              <div className="chart"> 
                {status === "success" && (
                    <ResponsiveContainer width="100%" aspect={2 / 1}>
                    <BarChart width={830} height={350} data={dataMvts} barCategoryGap={2}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="updatedAt" tick={labelStyle} />
                        <YAxis tick={labelStyle} type="number" padding={{ top: 10, bottom: 10 }} />
                        <Tooltip
                        contentStyle={{
                            ...labelStyle,
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
                    </ResponsiveContainer>
                )}
                {status === "error" && <span>{error.message}</span>}
                {status === "loading" && <span>Loading...</span>}
            </div>
        </>
    );
  };

export default ChartPr;