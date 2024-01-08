import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-hot-toast";

const AddToCartButton = ({ course }) => {

    const handleAddToCard = (course)=>{
        let newCard = [];
        const previewsCard = JSON.parse(localStorage.getItem('myCard')) || [];
        console.log(previewsCard)
        const isExist = previewsCard.find(previews=>previews.id === course.id);
        if(!isExist){
            newCard = [...previewsCard,course];
            localStorage.setItem("myCard",JSON.stringify(newCard))
            toast.success('Successfully Add To Cart')
        }
        else{
          toast.error("You Have Already Add This Course")
        }
    }

  return (
    <div className="w-full lg:w-4/12 flex flex-col justify-center items-center border-2 py-12 mt-4 border-[#0B1D34]">
      <div>
        <span className="font-bold bg-[#112334] text-[#D830BB] px-4 py-2">
          PRICE
        </span>
        <span className="bg-[#1D3953] text-white ps-4 pe-8 py-2 font-bold">
          {course?.price} BDT
        </span>
      </div>
      <button className="mt-4 bg-[#7B07BE] px-16 rounded-md animate-pulse py-4">
        BUY NOW
      </button>
      <button onClick={()=>handleAddToCard(course)} className="mt-4 bg-[#7B07BE] px-14 rounded-md animate-pulse py-4">
        Add To Card
      </button>
    </div>
  );
};

export default AddToCartButton;
