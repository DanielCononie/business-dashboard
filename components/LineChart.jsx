"use client";
import React, {useEffect, useState} from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const LineChart = () => {

    const [quarter, setQuarter] = useState([])
    const [revenue, setRevenue] = useState([])
    const [hires, setHires] = useState([])

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    })
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        async function getData() {
            const res = await fetch('/api/businessForm', {
                method: "GET",
                headers: {
                    "Content-type":"application/json"
                },
            })
            const data = await res.json()
            const {quarter} = data;
            const {revenues} = data;
            const {new_hires} = data;

            setQuarter(quarter)
            setRevenue(revenues)
            setHires(new_hires)
        }
        getData();


        /*
                                CHART DATA
 --------------------------------------------------------------------------------
        */
    }, [])

    useEffect(() => {

        setChartData({
            // labels: [quarter[0], quarter[1], quarter[2], quarter[3]],
            labels: ["Q1", "Q2", "Q3", "Q4"],
            datasets: [{
                    label: "Revenue $",
                    data: [revenue[0], revenue[1], revenue[2], revenue[3]],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },]
        });
        setChartOptions({
            scales: {
                y: {
                  beginAtZero: true, 
                  max: 50000,
                  title: {
                    display: true,
                    text: 'Revenue',
                  },

                },
                x: {
                    title: {
                        display: true,
                        text: 'Quarter',
                      },
                }
              },
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Revenue per quarter'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        })

    }, [revenue])

    return (
    <div>
        <Line width={500} height={400} data={chartData} options={chartOptions}/>
    </div>
  )
}

export default LineChart