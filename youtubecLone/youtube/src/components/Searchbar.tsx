
export const Searchbar = () =>{
    return <div>
        <div className=" w-96 flex border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
            <input id="default-search" className="w-full bg-transparent text-white border-none outline-none " placeholder="search" required />
            <button className="bg-state-950 text-gray-400 font-bold py-2 px-4 rounded inline-flex item-center">
                <svg className="w-4 h-4 " aria-hidden="true" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>                
                    </svg>
                    

            </button>

        </div>
        
    </div>
}