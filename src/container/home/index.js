import React, { useContext, useState } from 'react'
import {Typography, Grid, Paper, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/amazonLogo.jpg'
import Image from '../../assets/image1.jpeg'
import { useHistory } from "react-router-dom";
import { FaStar } from 'react-icons/fa'


const useStyles = makeStyles((theme) => ({
    root: {
        flexbox: 1,
        // display: 'inline-grid',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            width: "auto",
            height: 'auto',
        },

    },
}))


const Star = ({ selected, onSelect }) => {
    return <FaStar color={selected ? "red" : 'grey'}
        onClick={onSelect} />
}

const CreateArray = (length) => [
    ...Array(length)
]
const StarRating = ({ totalstar, }) => {
    const [selectedStar, setSelectedStar] = useState(0)

    return (
        <>
            {CreateArray(totalstar).map((n, i) => (

                <Star
                    key={i}
                    selected={selectedStar > i}
                    onSelect={() => setSelectedStar(i + 1)}
                />
            ))}

            {/* <p>{selectedStar} out of {totalstar}</p> */}
        </>
    )

}
export default function Home() {
    const classes = useStyles();
    const history = useHistory();

    const handleBackbutton = () => {
        history.goBack()
    }

    const cardArray = ['1', '2', '3', '4', '5', '6']
    return (
        <div className={classes.root}>
            <Grid style={{ height: '30%' }}>
                <img src={Image} style={{ width: '100%', height: '200px' }}></img>

            </Grid>

            <Grid container spacing={3}>

                {
                    cardArray.map(card => {
                        return (
                            <Grid item>
                                <Paper elevation={15} style={{ height: '386px' }}>
                                    <img style={{ width: '271px', height: '166px' }} src={Logo} />
                                    <Grid container spacing={2} style={{display: 'block',textAlign:'center', padding: '24px' }}>
                                        <Grid item>
                                            <Typography style={{color: 'blue',  fontWeight: 'bold'}}>King size wood bed </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography>600$ </Typography>
                                        </Grid>


                                        <Grid item>
                                            <Button variant='contained' color='secondary'> Add To Cart</Button>

                                        </Grid>
                                        <Grid item>
                                            <StarRating totalstar={5} />

                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </div>
    )
}