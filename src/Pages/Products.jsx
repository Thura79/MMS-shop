import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import Loading from '../Components/Spinner/Loading';
import { useStateContext} from '../Context/StateContextGlobal'

const Products = () => {

    const {state: {products}} = useStateContext();
    const [product, setproducts] = useState([]);

    useEffect(() => {
        setproducts(products)
    }, [products])
    
    return (
    <div className=' flex flex-wrap gap-7 justify-center my-10'>
        {
            product.length > 0 ? product?.map(pd => <Card key={pd.id} product={pd} />) : <Loading/>
            
        }
    </div>
  )
}

export default Products