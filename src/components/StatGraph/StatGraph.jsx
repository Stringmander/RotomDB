import { Radar } from 'react-chartjs-2';
import  styled  from 'styled-components'
import { CapitalCase } from "../../util";


const StyledForm = styled.form`
  display: "flex";
  flex-flow: "row wrap";
  align-items: "center";
  padding: .5em;
 
`;

const getPokeGraphData = (pokemonStats) => {
    const pokeLabels = pokemonStats.map(stat => {
        return CapitalCase(stat.stat.name)
    })
    const pokeData = pokemonStats.map(stat => {
        return stat.base_stat
    })
    return { pokeLabels, pokeData }
}                                         //utillity that parses the given stat object into labels and data for the radar chart




const getPokeColor = (pokemonTypes) => { //function to get hex values based on types

    const refColor = {                   
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
    }
    const pokeTypeColor = pokemonTypes.map(type => {
        const typeName = type.type.name
        const typeHex = refColor[typeName]
        return typeHex
    })                                  //variable that maps over given types and returns hex values
    return pokeTypeColor;               //returns array with hex values
}

const setOpacity = (hex, alpha) => `${hex}${Math.floor(alpha * 255).toString(16).padStart(2, 0)}`;
//utillity function to set Hex color Opacity


function StatGraph({ stats, types }) {
    //passed stats and types from the api call as props

    const typeThemed = getPokeColor(types)

    const { pokeLabels, pokeData } = getPokeGraphData(stats)


    //---------------------------------------------------RADAR CHART OPTIONS START---------------------------------------------------------------

    const data = {
        labels: pokeLabels,
        datasets: [
            {
                label: 'Stat Value',
                data: pokeData,
                backgroundColor: setOpacity(typeThemed[0], 0.4),
                borderColor: typeThemed[0],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        elements : {
            point : {
                pointStyle : "rectRounded"
            },
        },
        scales : {
            r: {
                angleLines: {
                    display: true,
                    lineWidth: 2
                },
                suggestedMin: 0,       
                ticks: {
                    maxTicksLimit: 5,
                    beginAtZero: true,
                    font : {
                        size : 10
                    },
                },
                pointLabels: {
                    display: true,
                    font: {
                        family: "Helvetica",
                        weight: "bold",
                    },
                },
            },
        },        
        plugins: {
            legend : {
                display: false
            },
        },  

        layout : {
            padding : 10,
        },
    }
    

    //---------------------------------------------------RADAR CHART OPTIONS END-----------------------------------------------------------------

    return (
        stats && <StyledForm><Radar data={data} options={options}/></StyledForm>
    )
}

export default StatGraph;