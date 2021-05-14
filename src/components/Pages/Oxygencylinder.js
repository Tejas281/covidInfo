import React, { useState, useEffect } from 'react'
      
import axios from 'axios'

const Oxygencylinder = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get('https://covidoxygencylinder.herokuapp.com/covidoxygencylinder')
      setProducts(data)
    }
    fetchProduct()
  }, [])
  
    return (
        <div>
            <div>
      <div className="flex flex-wrap justify-center text-center mb-5">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="uppercase  animate-pulse hover:opacity-80 text-2xl font-semibold ">
          Oxygen cylinder Covid-19 
          </h2>
          <p className="cursor-pointer animate-bounce hover:opacity-80 uppercase text-lg leading-relaxed m-4 text-gray-600">
          Oxygen cylinder contact list
          </p>
        </div>
      </div>
    </div>
<div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
                    <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No.
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        contact number   
              </th>
                   
                  
                    </tr>
                    
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
                    <tr>
                      
            <td className="px-6 py-4  text-sm text-gray-500">
              {product.id}
            </td>
            <td className="px-6 py-4 uppercase text-sm text-gray-500">
              {product.name}
            </td>
            <td className="px-6 py-4  text-sm text-gray-500">
            {product.address}
            </td>
              <td className="px-2 py-4  text-sm text-gray-500" >
              {product.contactNumber}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
        </div>
        
</div>
    )
}
export default Oxygencylinder
