import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Pie} from 'react-chartjs-2'

const Chart = ({billTotal, entertainmentTotal, foodTotal, travelTotal, miscellaneousTotal}) => {
    return (
        <div class="container">
            <Pie
                data={{
                    labels: ['Bills','Entertainment','Food','Travel','Miscellaneous'],
                    datasets: [{
                        data: [billTotal,entertainmentTotal,foodTotal,travelTotal,miscellaneousTotal],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                    }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                }}
               
                
            />
        </div>
    )
}

export default Chart;

