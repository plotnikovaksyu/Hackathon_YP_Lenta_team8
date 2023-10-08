import './Chart.css'
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

function Chart() {

    // let day = new Date().toLocaleDateString()
    let day = new Date().toLocaleDateString().slice(0, 5)

    const data = {
        labels: [day, day, day, day, day, day, day, day, day, day, day, day, day, day],
        datasets: [
            {
                label: 'Булочка с маком',
                data: [6, 3, 9, 3, 9, 3, 9, 3, 9, 3, 9, 3, 9, 23],
                backgroundColor: '#6E237D',
                borderColor: '#6E237D',
                pointBorderColor: 'aqua',
                fill: true,
                tension: 0.4,
                radius: 4,

            },
            {
                label: 'Булочка с повидлом',
                data: [8, 5, 22, 43, 26, 49, 34, 4, 5, 50, 31, 12, 23, 25],
                backgroundColor: 'blue',
                borderColor: 'blue',
                pointBorderColor: 'aqua',
                fill: true,
                tension: 0.4,
                radius: 4,
            },
            {
                label: 'Булочка со сгущенкой',
                data: [11, 22, 13, 4, 15, 26, 37, 48, 19, 13, 12, 11, 2, 23],
                backgroundColor: '#AA2332',
                borderColor: '#AA2332',
                pointBorderColor: 'aqua',
                fill: true,
                tension: 0.4,
                radius: 4,
            },
            {
                label: 'Булочка со помадкой',
                data: [12, 2, 31, 43, 5, 16, 17, 8, 9, 17, 18, 14, 21, 48],
                backgroundColor: '#2FCBFF',
                borderColor: '#2FCBFF',
                pointBorderColor: 'aqua',
                fill: true,
                tension: 0.4,
                radius: 4,
            },
            {
                label: 'Булочка с пудрой',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2],
                backgroundColor: '#00BE64',
                borderColor: '#00BE64',
                pointBorderColor: 'aqua',
                fill: true,
                tension: 0.4,
                radius: 4,
            },

        ],
    }

    const options = {
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                align: "start",
                labels: {
                    boxWidth: 8,
                    boxHeight: 8,
                    useBorderRadius: true,
                    borderRadius: 8,
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Прогноз спроса, шт',
                    position: 'top',
                    align: 'end',
                    font: {
                        size: 18,
                    }

                }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }

    return (
        <div className="chart">
            <div className='chart__container'>
                <Line
                    data={data}
                    options={options}>
                </Line>
            </div>
        </div >
    )
}

export default Chart