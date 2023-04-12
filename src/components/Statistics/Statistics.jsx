import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';


const Statistics = () => {
    const data = [
        {
            name: 'assignment 1',
            mark: 57,
            fill: '#8884d8',
        },
        {
            name: 'assignment 2',
            mark: 55,
            fill: '#8884d8',
        },
        {
            name: 'assignment 3',
            mark: 56,
            fill: '#8884d8',
        },
        {
            name: 'assignment 4',
            mark: 48,
            fill: '#83a6ed',
        },
        {
            name: 'assignment 5',
            mark: 60,
            fill: '#8dd1e1',
        },
        {
            name: 'assignment 6',
            mark: 52,
            fill: '#82ca9d',
        },
        {
            name: 'assignment 7',
            mark: 60,
            fill: '#a4de6c',
        },
        {
            name: 'assignment 8',
            mark: 51,
            fill: '#d0ed57',
        },
    ];
    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };
    return(
        <div className='mt-20'>
            <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
        }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="mark" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="mark" stroke="#ff7300" />
        </ComposedChart>
    </ResponsiveContainer>
        </div>
    );
};

export default Statistics;