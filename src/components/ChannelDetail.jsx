import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Video, VideoCard, ChannelCard } from "../components";
import { fetchFromApi } from "../utils/fetchApi";

function ChannelDetail() {
    const [channelDetail, setChannelDetail] = React.useState(null);
    const [video, setVideo] = React.useState([]);

    const { id } = useParams();

    React.useEffect(() => {
        fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
            setChannelDetail(data?.items[0]);
            console.log('channel details api', data?.items[0]);
        });

        fetchFromApi(`search?part=snippet&channelId=${id}&order
        date&maxResults=50Í`).then((data) => {
            setVideo(data?.items);
            console.log('search api', data?.items[0]);

        });
    }, [id]);

    // console.log(id);
    // console.log('channel detailt 2x', channelDetail);
    return (
        <Box minHeight='95vh'>
            <Box>
                <div style={{
                    background: 'linear-gradient(344deg, rgba(238,174,202,1) 0%, rgba(79,125,180,1) 100%)',
                    zIndex: 10,
                    height: '300px',

                }}>
                </div>
                <ChannelCard data={channelDetail} isChannelDetail chanId={id} marginTop='-110px' />
            </Box>
            <Box display='flex' p={2}>
                <Box sx={{ mr: { sm: '100px' } }} />
                <Video data={video} />
            </Box>
        </Box>
    )
}

export default ChannelDetail;
