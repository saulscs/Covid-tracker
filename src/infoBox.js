import React from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import './InfoBox.css'

function infoBox({title,cases,total, isRed ,active ,...props}) {
    return (
        <Card 
        onClick={props.onClick}
        className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"} `}>
            <CardContent>
                {/*Title */}
                <Typography className="infoBox__title " color="textSecondary">
                    {title}
                </Typography>
                {/*Number cases */}
                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>
                {/*Total */}
                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default infoBox
