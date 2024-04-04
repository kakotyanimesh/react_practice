import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title:"ASMR - FALL ASLEEP before I reach 300? (mirrored touching + brushing)",
    Channelimage : "channels4_profile.jpg",
    thumbnail : "1st.jpg",
    author : "WhisperAudios ASMR ",
    views :"81k",
    timestamp:"3 days ago"
    },{
        title:"ASMR - FALL ASLEEP before I reach 300? (mirrored touching + brushing)",
        Channelimage : "channels4_profile.jpg",
        thumbnail : "1st.jpg",
        author : "WhisperAudios ASMR ",
        views :"81k",
        timestamp:"3 days ago"
        }
        ,{
            title:"ASMR - FALL ASLEEP before I reach 300? (mirrored touching + brushing)",
            Channelimage : "channels4_profile.jpg",
            thumbnail : "1st.jpg",
            author : "WhisperAudios ASMR ",
            views :"81k",
            timestamp:"3 days ago"
            }
        ,{
            title:"ASMR - FALL ASLEEP before I reach 300? (mirrored touching + brushing)",
            Channelimage : "channels4_profile.jpg",
            thumbnail : "1st.jpg",
            author : "WhisperAudios ASMR ",
            views :"81k",
            timestamp:"3 days ago"
            }
        ]



export const VideoGrid = () =>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard 
                   title={video.title}
                   Channelimage = {video.Channelimage}
                   thumbnail = {video.thumbnail}
                   author = { video.author}
                   views ={video.views}
                   timestamp={video.timestamp}
    ></VideoCard>
        </div> )}

    </div>
}