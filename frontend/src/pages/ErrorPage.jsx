import React from 'react'
import styles from './styles.module.css';
// import {Sparkline} from 'react-chartlet'
// import {Line} from 'react-chartjs-2'
import ApexChart from 'apexcharts'
import {  LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis,YAxis, CartesianGrid 
} from 'recharts'; 
const pdata = [ 
  { 
      name: 'MongoDb', 
      student: 11, 
      fees: 120 
  }, 
  { 
      name: 'Javascript', 
      student: 15, 
      fees: 12 
  }, 
  { 
      name: 'PHP', 
      student: 5, 
      fees: 10 
  }, 
  { 
      name: 'Java', 
      student: 10, 
      fees: 5 
  }, 
  { 
      name: 'C#', 
      student: 9, 
      fees: 4 
  }, 

  { 
      name: 'C++', 
      student: 10, 
      fees: 8
  }, 
]; 

const ErrorPage = () => {
  return (
    <div className={styles.gradient}>
    <h1>Page does not exist</h1>

    <div> 
      <h1 className="text-heading">Line Chart Using Rechart</h1> 
      <ResponsiveContainer width="100%" aspect={3}> 
          <LineChart data={pdata} margin={{ right: 300 }}> 
              <CartesianGrid /> 
              <XAxis dataKey="name" 
                  interval={'preserveStartEnd'} /> 
              <YAxis></YAxis> 
              <Legend /> 
              <Tooltip /> 
              <Line dataKey="student"
                  stroke="black" activeDot={{ r: 8 }} /> 
              <Line dataKey="fees"
                  stroke="red" activeDot={{ r: 8 }} /> 
          </LineChart> 
      </ResponsiveContainer> 
      </div> 
    </div>
    )
  }
/* <Line 
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 19, 3, 5, 2, 3],
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
              borderWidth: 1,
            },
          ],
        }} 
        // height={400}
        // width={600}
        // options={{
        //   maintainAspectRatio: false,
        //   scales: {
        //     yAxes: [
        //       {
        //         ticks: {
        //           beginAtZero: true,
        //         },
        //       },
        //     ],
        //   },
        //   legend: {
        //     labels: {
        //       fontSize: 25,
        //     },
        //   },
        // }}
      />
       <Sparkline
                data={[2, 5, 3, 8, 1]}
                height="100px"
                /> 
            
    </div>
    </div>
  )
}
*/
// const Charrt = () =>{
//   return (
//     <div>
//       <h1>
//         Hello
//       </h1>
//     </div>
//   )
// }
//     ApexChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
    
//       series: [{
//           name: "Desktops",
//           data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
//       }],
//       options: {
//         chart: {
//           height: 350,
//           type: 'line',
//           zoom: {
//             enabled: false
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           curve: 'straight'
//         },
//         title: {
//           text: 'Product Trends by Month',
//           align: 'left'
//         },
//         grid: {
//           row: {
//             colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//             opacity: 0.5
//           },
//         },
//         xaxis: {
//           categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//         }
//       },
    
    
//     };
//   }



//   render() {
//     return (      
//         <div id="chart">
//         <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
//         </div>
//     )}
// }



export default ErrorPage