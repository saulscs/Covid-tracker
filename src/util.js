import React from "react"
import {Circle, Popup} from 'react-leaflet';
import numeral from "numeral"

const casesTypeColor = {
    cases:{
        hex: "#CC1034",
        rgb: "rgb(204, 16, 52)",
        multipler: 800,
    },
    recovered:{
        hex: "#7dd71d",
        rgb: "rgb(125, 215, 29)",
        multipler: 1200,
    },
    deaths:{
        hex: "#fb4443",
        rgb: "rgb(251, 68, 67)",
        multipler: 2000,
    },
}

export const sortData = (data) => {
    const sortedData =[...data];

    sortedData.sort( (a,b) => {
        if(a.cases > b.cases){
            return -1
        } else {
            return 1
        }
    })
    return sortedData;
}

export const showDataOnMap = (data, casesType='cases') => (
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColor[casesType].hex}
            fillColor={casesTypeColor[casesType].hex}
            radius={
                Math.sqrt(country[casesType])* casesTypeColor[casesType].multipler
            }
        ></Circle>
    ))
)