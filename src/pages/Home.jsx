import React from 'react'
import '../scss/app.scss';
import { useSelector,useDispatch} from 'react-redux';
import {Categories, SortPopUp,PizzaBlock, Loading, } from '../Components';
import {setCategory, setSortBy} from '../redux/action/filters'
import { fetchPizzas } from '../redux/action/pizzas.js';
import { addPizzaToCart } from '../redux/action/cart';
import cart from '../redux/redusers/cart';


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{name:'популярность', type:'popular', order:'desc'}, {name:'цена',type:'price',order:'desc' }, {name:'алвфавит', type:'name', order:'asc'}]

function Home ({}) {
  const {category, sortBy} = useSelector(({filters}) => filters,);
  
  const dispatch = useDispatch();

  React.useEffect(() => {
 
       dispatch(fetchPizzas(sortBy, category));
    
  
  }, [category, sortBy]);

  const items = useSelector(({ pizzas}) => pizzas.items,);
  const cartItems = useSelector(({ cart}) => cart.items,);
  const isLoaded = useSelector(({ pizzas}) => pizzas.isLoaded,);
  
  console.log(cartItems)
  const handlePizzaToCart = obj =>{
      dispatch({
        type:'ADD_PIZZA_CART',
        payload:obj
      })
     
  }
  
  const onSelectCategory = React.useCallback((index )=>{
    dispatch(setCategory(index))},[])
    const onClickSortType = React.useCallback((type )=>{
      dispatch(setSortBy(type))},[])
      
  return (
    <div className="container">
          <div className="content__top">
            <Categories activeCategory = {category}
            onClickCategory ={onSelectCategory}
            items = {categoryNames}
             />
            <SortPopUp activeSortType = {sortBy.type} items={sortItems} onCliskSortType = {onClickSortType}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          { isLoaded ? items.map((obj)=>(
              <PizzaBlock 
              cartCount={ cartItems[obj.id] && cartItems[obj.id].items.length }
              onClickAddPizza={handlePizzaToCart} key={obj.id} {...obj} />
          )):Array(10).fill(0).map((_,index)=>(<Loading key={index}/>))}
        
          
          </div>
        </div>
  )
}

export default  Home