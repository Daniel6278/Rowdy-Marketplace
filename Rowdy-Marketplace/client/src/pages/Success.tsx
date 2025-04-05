import React from 'react'
import Container from '../ui/Container'
// import LinkButton from '../ui/LinkButton'

function Success() {
  return (
    <Container>
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
        <p className="mb-8">Thank you for your purchase. Your order has been received and is being processed.</p>
        <div className="flex justify-center gap-4">
          {/* <LinkButton to="/orders">View Orders</LinkButton>
          <LinkButton to="/" className="bg-gray-700">Continue Shopping</LinkButton> */}
        </div>
      </div>
    </Container>
  )
}

export default Success