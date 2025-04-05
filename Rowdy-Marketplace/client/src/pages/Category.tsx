import React from 'react'
import Container from '../ui/Container'
import { useParams } from 'react-router-dom'

function Category() {
  const { id } = useParams()
  
  return (
    <Container>
      <div>Category Page {id && `- ${id}`}</div>
    </Container>
  )
}

export default Category