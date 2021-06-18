import { Grid } from '@material-ui/core'
import CategoryFilter from './CategoryFilter'
import ProductListing from './ProductListing'
import { getVisibleProducts } from '../../api/ProductApi'
import { useState } from 'react'
import MenuAppBar from './MenuAppBar'


export default function Collection() {

const [selectedCategories, setSelectedCategories] = useState([]);

const products = getVisibleProducts(selectedCategories) 


const onChangeCategoryHandler = (category, isChecked) => {
    if (isChecked) setSelectedCategories([...selectedCategories, category]);
    else
      setSelectedCategories(
        selectedCategories.filter(
          cat => cat.toLowerCase() !== category.toLowerCase()
        )
      );
  };

    return (
<>
<MenuAppBar/>
        <Grid container>
            <Grid item  lg={2}>
                <CategoryFilter 
                selectedCategories= { selectedCategories }
          onChangeCategory={onChangeCategoryHandler}
          />
            </Grid>

            <Grid item lg={10}>
                <ProductListing products= { products } />
            </Grid>
        </Grid>
        </>
    )
}
