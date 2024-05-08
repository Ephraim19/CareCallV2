import React from "react";
import "./Vitals.css";
import { CChart } from "@coreui/react-chartjs";

const OxygenGraph = () => {
  return (
    <div>
      <div>
        <div className="frame-parent4">
          <div className="blood-pressure-parent">
            <div className="blood-pressure">Oxygen Saturation</div>
          </div>
        </div>
        <CChart
          type="line"
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: "Oxygen Saturation (% SpO2)",
                backgroundColor: "#0090af",
                borderColor: "#0090af",
                pointBackgroundColor: "#0090af",
                pointBorderColor: "#0090af",
                data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: "#333",
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: "transparent",
                },
                ticks: {
                  color: "333#",
                },
              },
              y: {
                grid: {
                  color: "transparent",
                },
                ticks: {
                  color: "#333",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default OxygenGraph;
