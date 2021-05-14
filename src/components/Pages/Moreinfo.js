
import React, { useState, useEffect } from 'react'
      
import axios from 'axios'

const Moreinfo = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get('https://covidmoreinfobhavnagar.herokuapp.com/covidMoreinfo')
      setProducts(data)
    }
    fetchProduct()
  }, [])
    return (
        <>
        <div>
      <div className="flex flex-wrap justify-center text-center mb-5">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="uppercase  animate-pulse hover:opacity-80 text-2xl font-semibold ">
          Bhavnagar Covid-19 More Information
          </h2>

          <p className="cursor-pointer animate-bounce hover:opacity-80 uppercase text-lg leading-relaxed m-4 text-gray-600">
          Ask a doctor and take medicines
          </p>
        </div>
      </div>
    <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-50">
                <tr>
                   <th scope="col" className="px-2 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           No.
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                Medicine Name
                </th>
                <th scope="col" className=" px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Medicine description
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mg
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                morning
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                afternoon
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                night
                </th>
                <th scope="col" className="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Day
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                status
                </th>         
              </tr>
            </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
        
                <tr>

                  <td className="px-1 py-4 ">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                  {product.id}
                        </span>
                  </td>
                  
                  <td className="px-1 py-4">
                  <span className="px-1 inline-flex text-xs leading-5 font-semibold rounded-full ">
                  {product.medicine_name}
                        </span>
                  </td>
                  <td className="px-1 py-3">
                  <span className="px-1 inline-flex text-xs leading-5 font-semibold rounded-full ">
                  {product.medicine_description}
                        </span>
                  </td>
                  <td className="px-1 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 text-center font-semibold squre-full bg-pink-100 text-green-800 ">
                  {product.mg}
                        </span>
                    
                  </td> 
                      <td className="px-1 py-4 ">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-green-800">
                        {product.morning}
                        </span>
                  </td>
                  
                  <td className="px-6 py-4 ">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {product.afternoon}
                        </span>
                  </td>
                  
                  <td className="px-6 py-4 ">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800">
                        {product.night}
                        </span>
                  </td>
                  
                  <td className="px-6 py-4 ">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold squer-full bg-red-100 text-green-800">
                        {product.day}
                        </span>
                  </td>
                  
                  <td className="px-1 py-4 ">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {product.status}
                        </span>
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
        
            <figure className="md:flex text:center bg-gray-100 rounded-xl p-8 md:p-0">
            {products.map((productss) => (
     <div className="pt-6 md:center text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-semibold">
                    {productss.info}
             </p>
    </blockquote>
    <figcaption className="font-medium">
                            <div className="text-cyan-600">
                                {productss.info_description}
      </div>
      <div className="text-gray-500">
            {productss.phone_number}
             </div>
    </figcaption>
  </div>   
                ))}
           
         
                </figure>
             
         </>
  )
}
export default Moreinfo


