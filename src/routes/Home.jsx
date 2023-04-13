import * as api from '../api'
import { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard'
import CategoriesRefinement from '../components/CategoriesRefinement'

export default function Home () {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    setLoading(true)
    api.getItems(selectedCategory).then((data) => {
      setItems(data)
      setLoading(false)
    })
  }, [selectedCategory])

  console.log('Change category to:\t', selectedCategory)

  return (
    <div className='layout'>
      <div className='refinements'>
        <CategoriesRefinement setSelectedCategory={setSelectedCategory} />
      </div>
      <div className='items-container'>
        {loading
          ? (<h1>Loading...</h1>)
          : items.map((item) => (
            <ItemCard key={item.item_id} {...item} />
          ))}

      </div>

      <style jsx>{`
        .items-container{
          display: grid;
          grid-template-columns: repeat(4, 1fr);   
          gap: 20px;
          width: 80vw;
          margin: auto;
        }
        .layout{
          display: flex;
        }
        .refinements{
          display: flex;
          width: 10vw;
          border-right: 2px solid black;
          flex-direction: column;
          padding: 15px;
          gap: 10px;
        }
      `}
      </style>

    </div>
  )
}
