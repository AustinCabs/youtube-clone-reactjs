import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Stack, Typography as Typo } from "@mui/material";
import { Video } from "../components";
import { fetchFromApi } from "../utils/fetchApi";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";

function VideoDetail() {
    const [video, setVideo] = React.useState(null);
    const [videoSuggested, setVideoSuggested] = React.useState(null);

    const { id } = useParams();

    React.useEffect(() => {
        fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
            setVideo(data.items[0]);
        });

        fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
            (data) => {
                setVideoSuggested(data.items);
            }
        );
    }, [id]);

    if (!video?.snippet) return "Loading ...";

    const {
        snippet: { title, channelId, channelTitle },
        statistics: { viewCount, likeCount },
    } = video;

    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: "column", md: "row" }}>
                <Box flex={1}>
                    <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player"
                            controls
                        />
                        <Typo color="white" variant="h5" fontWeight="bold" p={2}>
                            {title}
                        </Typo>
                        <Stack
                            sx={{ color: "white" }}
                            py={1}
                            px={2}
                            direction="row"
                            justifyContent="space-between"
                        >
                            <Link to={`/channel/${channelId}`}>
                                <Typo variant={{ sm: "subtitle2", md: "h6" }} color="white">
                                    {channelTitle}
                                    <CheckCircle
                                        sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                                    />
                                </Typo>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typo variant="body1" color="white" sx={{ opacity: 0.7 }}>
                                    {parseInt(viewCount).toLocaleString()} Views
                                </Typo>
                                <Typo variant="body1" color="white" sx={{ opacity: 0.7 }}>
                                    {parseInt(likeCount).toLocaleString()} Likes
                                </Typo>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>

                {/* side suggested video */}
                <Box
                    px={2}
                    py={{ md: 1, xs: 2 }}
                    justifyContent="center"
                    alignContent="center"
                >
                    <Video data={videoSuggested} direction="column" />
                </Box>
            </Stack>
        </Box>
    );
}

export default VideoDetail;
