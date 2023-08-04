import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState,useEffect } from 'react';
import axios from 'axios';
const ProviderHome = () => {

    const [productImage, setProductImage] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleProductImageChange = (event) => {
      setProductImage(event.target.files[0]);
    };

    const handleAddItem= async (e)=>{
        e.preventDefault()
        console.log(productImage,name,description)
        const formData = new FormData();
        formData.append("Name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("image", productImage);
     
         try {
            const response = await axios.post('http://localhost:5000/api/items',formData)
            console.log(response.data)
         } catch (error) {
            console.log(error.message)
         }


    }

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form onSubmit={handleAddItem} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <Input size="lg" label="Price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          />
          <textarea className='border border-2' 
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          />
          <input
                  className="file-upload-input mx-auto"
                  type="file"
                  name="image"
                  onChange={handleProductImageChange}
                  accept="image/*"
                  required
                />
        </div>
   
        <Button type='submit' className="mt-6" fullWidth>
          Register
        </Button>
        
      </form>
    </Card>
  )
}

export default ProviderHome