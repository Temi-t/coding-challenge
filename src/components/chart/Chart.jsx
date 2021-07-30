import './chart.css';
import { LineChart, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart({title, title2, data,dataKey, grid}) {


    return (
        <div className="chart">
            <div className="titles">
                <h3 className="chartTitle">{title}</h3>
                <h3 className="chartTitle-2">{title2}</h3>
            </div>
            <ResponsiveContainer width="100%" aspect={4 / 1.1}>
                <BarChart data={data}>
                    {/* <XAxis dataKey="name" stroke="blue" /> */}
                    <XAxis dataKey="month"  />

                    <YAxis dataKey="Income" />
                    <Bar dataKey="Income" fill="#8884d8" barSize={20}/>
                    <Tooltip />
                    {/* <Legend /> */}
                </BarChart>
            </ResponsiveContainer>
            {/* <ResponsiveContainer>
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Income" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer> */}
            {/* <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="Income" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer> */}
            
        </div>
    )
}

export default Chart
