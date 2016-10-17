import React from 'react'
import CategoryDisplay from './components/category/categoryProductDisplay';

const CategoryPage = React.createClass({
  render() {
    let products = this.props.data[this.props.params.category].map( (item, i) => 
        <CategoryDisplay flex={"flex"+i} category={item.category} src={item.image[0]} itemName={item.name} key={item + i}/> 
    )

    return (
      <div className="categoryPage">
        <h3>{this.props.params.category.toUpperCase()}</h3>

        <section className="productDisplay">
           {products}
        </section>

      </div>
      )
  }
  })
export default CategoryPage