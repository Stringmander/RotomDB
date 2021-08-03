import { Radar } from "react-chartjs-2";
import styled from "styled-components";
import { capitalCase, getPokeColor } from "../../util";

const StatGraphWrapper = styled.div`
  > canvas {
    width: 25rem !important;
    height: 25rem !important;
  }
`;

const getPokeGraphData = (pokemonStats) => {
  const pokeLabels = pokemonStats.map((stat) => {
    return capitalCase(stat.stat.name);
  });
  const pokeData = pokemonStats.map((stat) => {
    return stat.base_stat;
  });
  return { pokeLabels, pokeData };
}; //utillity that parses the given stat object into labels and data for the radar chart

const setOpacity = (hex, alpha) =>
  `${hex}${Math.floor(alpha * 255)
    .toString(16)
    .padStart(2, 0)}`;
//utillity function to set Hex color Opacity

function StatGraph({ stats, types }) {
  //passed stats and types from the api call as props

  const typeThemed = getPokeColor(types);

  const { pokeLabels, pokeData } = getPokeGraphData(stats);

  //---------------------------------------------------RADAR CHART OPTIONS START---------------------------------------------------------------

  const data = {
    labels: pokeLabels,
    datasets: [
      {
        label: "Stat Value",
        data: pokeData,
        backgroundColor: setOpacity(typeThemed[0], 0.4),
        borderColor: typeThemed[0],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    elements: {
      point: {
        pointStyle: "rectRounded",
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
          lineWidth: 2,
        },
        suggestedMin: 0,
        ticks: {
          maxTicksLimit: 5,
          beginAtZero: true,
          font: {
            size: 40,
          },
        },
        pointLabels: {
          display: true,
          font: {
            size: 40,
            family: "Helvetica",
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },

    layout: {
      padding: 10,
    },
  };

  //---------------------------------------------------RADAR CHART OPTIONS END-----------------------------------------------------------------

  return (
    stats && (
      <StatGraphWrapper>
        <Radar data={data} options={options} />
        </StatGraphWrapper>
      )
  );
}

export default StatGraph;
