import React, {Component} from 'react'
import CategoryForm from './CategoryForm.jsx'
import CategoryList from './CategoryList.jsx'


export default class Category extends Component {
  render() {
    const {categories, addCategory} = this.props
    return(
      <div>
        <CategoryForm onSubmit={addCategory} />
        <CategoryList categories={categories} />
      </div>

    )
  }
}
