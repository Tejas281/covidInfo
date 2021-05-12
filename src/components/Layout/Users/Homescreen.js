import React, { useState, useEffect } from 'react'
      
import axios from 'axios'

const Homescreen = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get('https://covid19inbhavnaga.herokuapp.com/covidData')
      setProducts(data)
    }
    fetchProduct()
  }, [])
  return (
    <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-50">
                <tr>
                   <th scope="col" className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No.
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                Hospital Name
                </th>
                <th scope="col" className=" px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hospital Address
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hospital Contact Person Name
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hospital
                    Contact No
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                General Bed Without O2(Vacant)
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                General Bed With O2(Vacant)
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                HDU (Vacant)
                </th>
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ICU without Ventilator (Vacant)
                </th> <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ICU With Ventilator (Vacant)
                </th> <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Bed
                </th> <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Occupied
                </th>
                   
                <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vacant
                </th>
                              
              </tr>
            </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
        
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.id}</div>
                  </td>
                  <td className="px-1 py-4 ">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                  {product.hospitalName}
                        </span>
                  </td>
                  
                  <td className="px-1 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                  {product.hospitalAddress}
                        </span>
                  </td>
                  <td className="px-1 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                  {product.hospitalContactpersonName}
                        </span>
                  </td>
                  <td className="px-1 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                  {product.hospitalContact}
                        </span>
                    
                  </td> 
                      <td className="px-1 py-4 ">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {product.generalBedwithoutO2}
                        </span>
                  </td>
                  
                  <td className="px-6 py-4 ">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-blue-800">
                        {product.generalBedWithO2}
                        </span>
                  </td>
                  
                  <td className="px-6 py-4 ">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {product.HDU}
                        </span>
                  </td>
                  
                  <td className="px-6 py-4 ">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {product.iCUwithoutVentilator}
                        </span>
                  </td>
                  
                  <td className="px-1 py-4 ">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {product.iCUwithVentilator}
                        </span>
                  </td>
                  
                  <td className="px-1 py-4  text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full  text-black-1000">
                  {product.totalBed}
                        </span>
                  
                  </td>
                  <td className="px-1 py-4  text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full  text-black-1000">
                  {product.occupied}
                        </span>
                  </td>
    
                  <td className="px-1 py-2  text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-red-800">
                  {product.vacant}
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
     
  )
}

export default Homescreen
