import React from 'react';
import sourceData from './Data/sourceData.json';
import revenueData from './Data/revenueData.json'
import { Chart as ChartJs, defaults } from 'chart.js/auto';
import { Bar, Chart, Doughnut, Line } from 'react-chartjs-2';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Home = () => {
  return (
    <>
      <div className='max-w-6xl mb-2 rounded mx-auto h-[30vh] md:h-1/2 bg-white shadow-md'>
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
                tension: 0.5
              }, {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
                tension: 0.5
              }
            ]
          }}
          options={{
            // elements: {
            //   line: {
            //     tension: 0.5,
            //   },
            // },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>

      <div className='max-w-6xl mt-4 md:mt-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 h-auto md:h-1/2 bg-transparent'>

        <div className='w-full p-2 h-[30vh] md:h-full rounded shadow-md bg-white'>
          <Bar
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: 'Count',
                  data: sourceData.map((data) => data.value),
                  backgroundColor: [
                    'rgba(153, 102, 255, 1)',
                    'rgba(100, 149, 237, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                  ],
                  borderColor: [
                    'rgba(123, 72, 225, 1)',
                    'rgba(70, 119, 207, 1)',
                    'rgba(16, 174, 83, 1)',
                    'rgba(205, 175, 66, 1)',
                    'rgba(205, 49, 102, 1)',
                  ],
                  // borderWidth: 2,
                  borderRadius: 4,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Revenue Source",
                  display: true,
                },
              },
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>

        {/* Second Chart (Bar) */}
        <div className='w-full p-2 h-[31vh] md:h-full rounded shadow-md bg-white'>
          <Doughnut
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: 'Count',
                  data: sourceData.map((data) => data.value),
                  backgroundColor: [
                    'rgba(153, 102, 255, 1)',
                    'rgba(100, 149, 237, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                  ],
                  borderColor: [
                    'rgba(123, 72, 225, 1)',
                    'rgba(70, 119, 207, 1)',
                    'rgba(16, 174, 83, 1)',
                    'rgba(205, 175, 66, 1)',
                    'rgba(205, 49, 102, 1)',
                  ],
                  borderWidth: 0, 
                  hoverOffset: 4,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Revenue Source",
                  display: true,
                },
              },
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>

      </div>
    </>
  );
};

export default Home;
