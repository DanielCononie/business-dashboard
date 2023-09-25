"use client";
import React, {useState, useEffect} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {

    const [front, setFront] = useState(0)
    const [back, setBack] = useState(0)
    const [ops, setOps]= useState(0)
    const [projMan, setProjMan] = useState(0)
    
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    })
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        async function getData() {
            const res = await fetch('/api/employees', {
                method: "GET",
                headers: {
                    "Content-type":"application/json"
                },
            })
            const data = await res.json()
            const {frontEnd} = data;
            const {backEnd} = data;
            const {devOps} = data;
            const {projMan} = data;

            const total = parseInt(frontEnd) + parseInt(backEnd) + parseInt(devOps) + parseInt(projMan)
            console.log("Total: " + total)
            
            setFront(((frontEnd/total) * 100).toFixed(2))
            setBack(((backEnd/total) * 100).toFixed(2))
            setOps(((devOps/total) * 100).toFixed(2))
            setProjMan(((projMan/total) * 100).toFixed(2))

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
            labels: ["Front-end engineer", "Back-end engineer", "Dev ops", "Project manager"],
            datasets: [{
                    label: "%",
                    data: [front , back, ops, projMan],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                      ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                },]
        });
        setChartOptions({
           
             plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: '# of employees with job titles'
                },
                maintainAspectRatio: false,
                responsive: true,
                  // Adjust the width as needed
            }
        })
    }, [front])



  return (
    <div className=''> 
    <h1 className='items-center text-center mb-3 font-bold'>Each job title percentage</h1>
        <Pie height={300} data={chartData} />
    </div>
  )
}

export default PieChart