
export function VideoCard(props: any) {
    return <div className="p-3 cursor-pointer">
        {/* in next js the div should be in the same line as return  */}
        <img src={props.thumbnail} className="rounded-xl"></img>
        <div className="grid grid-cols-12">
            <div className="col-span-1">
                <img className="rounded-full w-15 h-15" src={props.Channelimage} alt="" />
            </div>
            <div className="col-span-11 pl-2 text-sm">
            <div>
                {props.title}
            <div className="col-span-11 text-gray-400 text-xs ">
               {props.author}
            </div>
            <div className="col-span-11  text-gray-400  text-xs">
                {props.views} | {props.timestamp}
            </div>
                </div>
                
            </div>
            
            
        </div>
    </div>
}