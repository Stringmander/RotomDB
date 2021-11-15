// import { Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { capitalCase } from "../../util";
import { ChartWrapper } from ".";
import { pokemonTypeColors } from "../../themes";

const StatRadarChart = ({ stats, types }) => {
  const statLabels = stats.map((stat) => {
    return capitalCase(stat.stat.name);
  });
  const statData = stats.map((stat) => {
    return stat.base_stat;
  });

  useEffect(() => {
    const canvas = document.getElementById("statRadarChart");
    const ctx = canvas.getContext("2d");

    const modifyOpacity = (rgbaString) => {
      return rgbaString.replace("1)", "0.4)");
    };

    const fill =
      types.length > 1
        ? ctx.createLinearGradient(200, 200, 400, 0)
        : modifyOpacity(pokemonTypeColors[types[0].type.name].rgba);

    if (types.length > 1) {
      fill.addColorStop(
        0,
        modifyOpacity(pokemonTypeColors[types[0].type.name].rgba)
      );
      fill.addColorStop(
        1,
        modifyOpacity(pokemonTypeColors[types[1].type.name].rgba)
      );
    }

    const Radar = new Chart(canvas, {
      type: "radar",
      data: {
        labels: statLabels,
        datasets: [
          {
            data: statData,
            fill: true,
            backgroundColor: fill,
            borderColor: pokemonTypeColors[types[0].type.name].rgba,
            pointBackgroundColor: pokemonTypeColors[types[0].type.name].rgba,
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: pokemonTypeColors[types[0].type.name].rgba,
          },
        ],
      },
      options: {
        elements: {
          line: {
            borderWidth: 3,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        aspectRatio: 2.2 / 1,
      },
    });

    return () => {
      Radar.destroy();
    };
  }, [statLabels, statData, types]);

  return (
    <ChartWrapper>
      <canvas id="statRadarChart"></canvas>
    </ChartWrapper>
  );
};

export default StatRadarChart;
