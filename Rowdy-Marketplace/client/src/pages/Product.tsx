import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../ui/Container'

function Product() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if (id) {
      // Fetch single product data when ID is available
      setLoading(true)
      // API call would go here
      setLoading(false)
    }
  }, [id])
  
  return (
    <Container>
      <div>
        {id ? `Product Details Page - ${id}` : 'Products Listing Page'}
      </div>
    </Container>
  )
}

export default Product