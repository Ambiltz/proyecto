import Image from "next/image";


export default function Home() {
 return <div className="bg-white w-64 H-64 m-40 rounded-lg p-4 text-black">
        <div className="flex justify-between">
          <div className="bg-red-200 w-fit text-red-500 text-sm px-2 py-1 rounded-full">
             High Priority 
          </div>
          <span className="rotate-90">...</span>
        </div>
        <div className="heading text-black font-normal text-3xl mt-30 mb-2">
          Hero Section
        </div>
        <div className="flex justify-center justify-between">
          <img className="avatar w-8 h-8 rounded-full" src="https://i.pravatar.cc/300/" alt="foto de perfil"/> 
          <div className="date text-gray-800 text-xs ml-4 mt-2">
             20 May 2023 - 24 May 2023
          </div>
        </div>
        <div className="texto m-b-12 right-12 s-17 top-20">
          Use attached image and don't forget to stick with the brand voice. Make it Elegant and don't overused rounded. 
        </div>
        <div className="other flex  justify-between">
          <div className="word">5 Subtask</div>  
          <div className="word-2">3 Attachment</div>
          
        </div>
    </div>
    
}
  
