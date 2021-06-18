import Grid from '@material-ui/core/Grid'
import ProductCard from "./ProductCard"

export default function ProductListing(props) {

  const { products } = props;



  return (

    <>

      <Grid container spacing={3}>
        {products.map(product => (<Grid item md={4} key={product.id}><ProductCard product={product} /></Grid>))}
      </Grid>
    </>
  )
}








