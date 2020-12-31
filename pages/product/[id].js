import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const { query: { id } } = useRouter()
    const [product, setProduct] = useState({})

    useEffect(() => {
        console.log(id);
        if (id) {
            window.fetch(`/api/avo/${id}`)
                .then(response => response.json())
                .then(data => setProduct(data))
        }
        
    }, [id])

    return (
        <div>
            Esta es la página del producto: {id}
            <p>{product.name}</p>
        </div>
    )
}

export default ProductItem