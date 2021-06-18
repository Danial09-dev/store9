import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        // maxWidth: 375

    },
});

export default function ProductCard(props) {
    const { id, image, title, description, price } = props.product
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="279"
                    width="200"
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" >
                    <Link to={`/details/${id}`} style={{textDecoration: 'none'}} > {title} </Link> 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography variant="h5" color="textSecondary" component="h5">
                        Rs.{price}/-
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button endIcon={<ShoppingCartTwoToneIcon />} size="small" color="primary">
                    Add to
        </Button>
                <Button endIcon={<FavoriteTwoToneIcon />} size="small" color="primary">
                    Favourite
        </Button>
            </CardActions>
        </Card>
    );
}