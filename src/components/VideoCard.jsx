import React from "react";
import { Link } from "react-router-dom";

import {
    Typography as Typo,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
    demoChannelUrl,
    demoThumbnailUrl,
    demoVideoUrl,
    demoChannelTitle,
    demoVideoTitle,
} from "../utils/constants";

const VideoCard = ({
    data: {
        id: { videoId },
        snippet,
    },
}) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px ', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    title={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px ', md: '320px' }, height: "180px" }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link
                    to={
                        videoId ? `/video/${videoId}` : demoVideoUrl
                    }
                >
                    <Typo variant="subtitle1" fontWeight="bold" color='white'>
                        {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}{`...`}
                    </Typo>
                </Link>
                <Link
                    to={
                        snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl
                    }
                >
                    <Typo variant="subtitle2" fontWeight="bold" color='gray'>
                        {snippet.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typo>
                </Link>
            </CardContent>
        </Card>
    );
};
export default VideoCard;
