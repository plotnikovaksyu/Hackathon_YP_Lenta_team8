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

    let day = new Date().toLocaleDateString()


    const data = {
        labels: [day, day, day, day, day, day, day, day, day, day, day, day, day, day],
        datasets: [
            {
                label: 'Sales the week',
                data: [6, 3, 9, 3, 9, 3, 9, 3, 9, 3, 9, 3, 9],
                backgroundColor: 'aqua',
                borderColor: 'black',
                pointBorderColor: 'aqua',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Sales the week2',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2],
                backgroundColor: 'blue',
                borderColor: 'blue',
                pointBorderColor: 'aqua',
                fill: true,
                tension: 0.4
            },

        ],
    }

    const options = {
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                align: "start"
            }
        },
        scales: {
            y: {

            }
        },
    }

    return (
        <div className="chart">
            <Line
                data={data}
                options={options}>
            </Line>
        </div>
    )
}

export default Chart