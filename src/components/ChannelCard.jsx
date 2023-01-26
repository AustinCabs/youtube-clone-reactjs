import React from "react";
import { Link } from "react-router-dom";

import { Box, CardContent, CardMedia, Typography as Typo } from "@mui/material";
import { demoProfilePicture, demoChannelUrl } from "../utils/constants.js";
import { CheckCircle } from "@mui/icons-material";
import { height } from "@mui/system";

const ChannelCard = ({ data, marginTop }) => {
    // console.log('Channel Card', data);

    // function renderLink(data, isChannelDetail) {
    // function renderLink() {
    // if (isChannelDetail) {
    //     if (data.id !== null) {
    //         if (data.id) {
    //             return `/channel/${data.id}`
    //         }
    //         return demoChannelUrl
    //     }
    // } else {
    //     if (data.id.channelId !== undefined) {
    //         if (data.id.channelId) {
    //             return `/channel/${data.id.channelId}`
    //         }
    //         return demoChannelUrl
    //     }
    // }
    //     if (chanId) {
    //         return `/channel/${chanId}`
    //     } else {
    //         return `/channel/${data?.id?.channelId}`
    //     }
    // }
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "456px", md: "320px" },
                height: "326px",
                margin: "auto",
                marginTop
            }}
        >
            <Link
                // to={renderLink()}
                to={
                    data?.snippet?.channelId
                        ? `/channel/${data?.snippet?.channelId}`
                        : demoChannelUrl
                }
                style={{ pointerEvents: data?.snippet?.channelId ? 'auto' : 'none' }}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    <CardMedia
                        image={data?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        sx={{
                            borderRadius: "50%",
                            height: "180px",
                            width: "180px",
                            mb: 2,
                            border: "1px solid #e3e3e3",
                        }}
                    />
                    <Typo variant="h6">
                        {data?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
                    </Typo>

                    {data?.statistics?.subscriberCount && (
                        <Typo variant="h6">
                            {parseInt(data.statistics?.subscriberCount).toLocaleString()}{" "}
                            Subscribers
                        </Typo>
                    )}
                </CardContent>
            </Link>
        </Box >
    );
};

export default ChannelCard;
