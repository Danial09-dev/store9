import React, { useState } from 'react'
import { products } from "../../data/products";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles({
    styleImage: {
        width: '100px',
        borderRadius: '60%'
    },
    button: {
        borderRadius: '100%'
    }
})

export function CartRow() {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => setQuantity(quantity + 1)
    const decreaseQuantity = () => setQuantity(quantity - 1)

    return (
        products.map(cartData => (
            <TableRow>
                <TableCell>{cartData.id}</TableCell>
                <TableCell><img className={classes.styleImage} src={cartData.image} alt="image not found" /></TableCell>
                <TableCell>{cartData.title}</TableCell>
                <TableCell>{cartData.price}</TableCell>
                <TableCell>
                    <ButtonGroup size='small' variant='outlined' color='secondary'>
                        <Button onClick={decreaseQuantity} disabled={quantity === 0}>-</Button>
                        <Button>{quantity}</Button>
                        <Button onClick={increaseQuantity} disabled={quantity === 10}>+</Button>
                    </ButtonGroup>
                </TableCell>
                <TableCell><Button className={classes.button} startIcon={<DeleteIcon />} color='secondary'></Button></TableCell>
            </TableRow>
        ))
    )
}
