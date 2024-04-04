
export function VideoCard() {
    return <div>
        {/* in next js the div should be in the same line as return  */}
        <img src="/1st.jpg" className="rounded-xl"></img>
        <div className="grid grid-cols-12">
            <div className="col-span-1">
                <img className="rounded-full w-12 h-12" src="/channels4_profile.jpg" alt="" />
            </div>
            <div className="col-span-11 pl-2 ">
            <div>
                ASMR -👂EAR SPA👂
            <div className="col-span-11 text-gray-400 text-base ">
               WhisperAudios ASMR 
            </div>
            <div className="col-span-11  text-gray-400  text-base">
                81k | 3 days ago
            </div>
                </div>
                
            </div>
            
            
        </div>
    </div>
}