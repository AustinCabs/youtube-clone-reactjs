import React from "react";

import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../components";

const Video = ({ data, direction }) => {
    // console.log(data, "Video");
    if (!data?.length) return 'Loading ...'

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
            {data.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard data={item} />}
                    {item.id.channelId && <ChannelCard data={item} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Video;
