import React, { useState } from 'react'
import Title from '../../Components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {

    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null
    })

    const [inputs, setInputs] = useState({
        roomType: '',
        pricePerNight: '',
        amenities: {
            "Free Wifi": false,
            "Free Breakfast": false,
            "Room Service": false,
            "Mountain View": false,
            "Pool Access": false
        }
    })

  return (
    <form className='pt-28 px-6 bg-gray-50 min-h-screen'>
        <Title align='left' font='outfit' title='Add Room' subTitle='Fill in the details carefully — accurate room details, pricing, and amenities enhance the booking experience.'/>

  {/* Upload pictures */}
    <p className='text-gray-800 mt-10 font-medium'>Images</p>

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-32 my-8'>
        {Object.keys(images).map((key) => (
            <label htmlFor={`roomImage${key}`} key={key} className='cursor-pointer'>
                <img
                    className=' object-cover rounded-lg border border-gray-300 hover:opacity-70 transition'
                src={
                images[key]
                ? URL.createObjectURL(images[key])
                : assets.uploadArea
                }
                alt=''/>
            <input
                type='file'
                accept='image/*'
                id={`roomImage${key}`}
                hidden
                onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
                }
            />
            </label>
        ))}
    </div>

        <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
        {/* Room Type */}
        <div className='flex-1 max-w-xs'>
            <p className='text-gray-800 mt-4'>Room Type</p>
            <select
                value={inputs.roomType}
                onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
                className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'
            >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Bed">Luxury Bed</option>
            <option value="Family Suite">Family Suite</option>
            </select>
        </div>

        {/* Price */}
        <div>
            <p className='mt-4 text-gray-800'> Price <span className='text-xs'>/night</span></p>
            <input
                type='number'
                placeholder='0'
                className='border border-gray-300 mt-1 rounded p-2 w-24'
                value={inputs.pricePerNight}
                onChange={(e) => setInputs({ ...inputs, pricePerNight: e.target.value })}
            />
        </div>
        </div>

        <p className='text-gray-800 mt-4'>Amenities</p>
        <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm gap-3'>
            {Object.keys(inputs.amenities).map((amenity, index) => (
                <div key={index}>
                    <input type="checkbox" id={`amenities${index+1}`} checked={inputs.amenities[amenity]} onChange={() => setInputs({...inputs, amenities: {...inputs.amenities, [amenity]: !inputs.amenities[amenity]}})} />

                    <label htmlFor={`amenities${index+1}`}> {amenity}</label>
                </div>
            ))}
        </div>

            <button className='bg-blue-800 hover:bg-blue-500 text-white px-8 py-2 rounded-2xl mt-8 cursor-pointer'>
                Add Room
            </button>

    </form>
  )
}

export default AddRoom