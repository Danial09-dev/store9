export const categories = [
    {
        id: 1,
        title: 'Watches',
        image:''
    },
    {
        id: 2,
        title: 'Belts',
        image:''
    },
    {
        id: 3,
        title: 'Gloves',
        image:''
    }  
]

// get array of category titles i.e., ['Burger', 'Shawarma', 'Pizza']
export const CategoryTitles = categories.map(category => category.title);