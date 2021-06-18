import { CardContent, Checkbox, FormControlLabel, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import { CategoryTitles } from '../../data/Category'


function CategoryFilterItem(props) {
    const { category, isChecked , onChangeCategory} = props;
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={isChecked}
                    onChange={e => onChangeCategory(category, e.target.checked)} />
            }
            label={category} />
    )
}

export default function CategoryFilter(props) {

    const { selectedCategories, onChangeCategory } = props;

    return (
        <Card>
            <CardContent>

                <Typography variant="h5">Category</Typography>

                {CategoryTitles.map(category => (
                    <Typography variant="subtitle1" color="textSecondary">
                        <CategoryFilterItem variant="subtitle1"
                            key={category}
                            category={category}
                            isChecked={selectedCategories.includes(category)}
                            onChangeCategory={onChangeCategory}
                        />
                    </Typography>
                ))}
            </CardContent>

        </Card>
    )
}
