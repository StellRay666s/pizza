import React from 'react'

const SortPopUp = React.memo(function SortPopUp({items,activeSortType, onCliskSortType}) {
  const [popUp, setPopUp] = React.useState(false)
  const sortRef = React.useRef()
 
  const activeLabel =items.find(obj=>obj.type == activeSortType).name

 const  onSelectSort=(index)=>{
  onCliskSortType(index)
     setPopUp(false)
   } 

  const handlOutsideClick =(e)=>{
    if(!e.path.includes(sortRef.current)){
     setPopUp(false)
    }
  }

  React.useEffect(()=>{
    document.body.addEventListener('click', handlOutsideClick)
    
  },[])

 function visiblePopUp(){
  setPopUp(!popUp)
 }
  
return (
  <div ref={sortRef} className="sort">
            <div className="sort__label">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
                />
              </svg>
              <b>Сортировка по:</b>
              <span onClick={visiblePopUp}>{activeLabel}</span>
            </div>
            {popUp && <div className="sort__popup">
              <ul>
                {items.map((obj, index)=>(
                  <li className={activeSortType === obj.type?'active':''}
                  onClick={()=>onSelectSort(obj)}
                  key={`${obj.type} ${index}`}>{obj.name}</li>
                ))} 
              </ul>
            </div>}
          </div>
)
})

  SortPopUp.defaultProps  = {
    items:[]
  }
export default SortPopUp