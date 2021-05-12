import React from 'react'
import { Link } from 'react-router-dom'

const Get = ({ product }) => {
  return (
    <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hospital Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hospital Address
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hospital Contact Person Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Hospital Contact No
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                General Bed Without O2(Vacant)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  General Bed With O2(Vacant)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                HDU(Vacant)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ICU without Ventilator(Vacant)
                </th> <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ICU With Ventilator(Vacant)
                </th> <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ICU With Ventilator(Vacant)
                </th> <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Bed
                </th> <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Occupied
                </th>
                              
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vacant
                </th>
                              
              </tr>
            </thead>
           
              <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.hospitalName}</div>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.hospitalAddress}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.hospitalContactpersonName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.hospitalContact}</div>
                  </td> 
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {product.generalBedwithoutO2}
                        </span>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {product.generalBedWithO2}
                        </span>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {product.HDU}
                        </span>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {product.iCUwithoutVentilator}
                        </span>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {product.iCUwithVentilator}
                        </span>
                  </td>
                  
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.totalBed}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.occupied}
                  </td>
                  
                  </tr>
                  </tbody>
           
           </table>
           </div>
         </div>
       </div>
     </div>
)
    
}
export default Get