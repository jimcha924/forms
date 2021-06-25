import React, {useState, useEffect} from 'react';
import { Pie } from 'react-chartjs-2';

const Chart = () => {
    const [casesRecovered , setCasesRecovered] = useState([])
    const [casesState , setCasesState] = useState([])


    useEffect(()=>{
    //create api call here

    const coronaData = async() => {
        let response = await fetch(`https://corona.lmao.ninja/v2/states`)

        let data = await response.json();
        console.log(data)
        setCasesState(data.map(state =>{
            return state.state
        }))

        setCasesRecovered(data.map((state) => {
            return state.recovered
        }))
    }
    coronaData();
        console.log(casesRecovered)

    }, [])

    const data = {
        labels: casesState,
        datasets: [
        {
            label: '# of Votes',
            data: casesRecovered, 
            backgroundColor: [
            'rgba(255, 255, 0, 1)',
            'rgba(255, 0, 0, 1)',
            'rgba(0, 128, 255, 1)',
            'rgba(0, 255, 27, 1)',
            'rgba(149, 0, 255, 1)',
            'rgba(0, 0, 0, 1)',
            ],
            borderColor: [
            'rgba(0, 0, 0, 0.5)',
            'rgba(0, 0, 0, 0.5)',
            'rgba(0, 0, 0, 0.5)',
            'rgba(0, 0, 0, 0.5)',
            'rgba(0, 0, 0, 0.5)',
            'rgba(0, 0, 0, 0.5)',
            ],
            borderWidth: 1.5,
            },
        ],
    };
return (
    <>
        <div className='header'>
            <h1 className='title'>Coronavirus Recovery Data</h1>
            <div className='links'>
                <a
                    className='btn btn-gh'
                    href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Doughnut.js'
                >
                Github Source
                </a>
            </div>
        </div>
        <Pie data={data}  />
</>
)
}

export default Chart;


//use this api data: https://corona.lmao.ninja/v2/states