import React from 'react'
import ProductDetail from '@/components/ProductDetail'

const page = async ({ params }) => {
  const {id} = params
  return (
    <ProductDetail id={id}/>
  )
}

export default page

