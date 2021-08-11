import './chart.css';
import {  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


function Chart({title, title2, data,dataKey, grid}) {


    return (
        <div className="chart">
            <div className="titles">
                <h3 className="chartTitle">{title}</h3>
                <h3 className="chartTitle-2">{title2}</h3>
            </div>
            <ResponsiveContainer width="100%" aspect={4 / 1.1}>
                <BarChart data={data}>
                    <XAxis dataKey="month"  />
                    <YAxis dataKey="Income" />
                    <Bar dataKey="Income" fill="#8884d8" barSize={20}/>
                    <Tooltip />
                    {/* <Legend /> */}
                </BarChart>
            </ResponsiveContainer>
            
        </div>
    )
}

export default Chart
