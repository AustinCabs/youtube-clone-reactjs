import React from "react";

import { Box, Stack, Typography as Typo } from "@mui/material";
import { SideBar, Video } from "../components";
import { fetchFromApi } from "../utils/fetchApi";

function Feed() {
    const [selectedCategory, setSelectedCategory] = React.useState("New");
    const [videos, setVideos] = React.useState([]);

    // async function fetchData(selectedCategory) {
    //     try {
    //         let res = await fetchFromApi(`search?part=snippet&q=${selectedCategory}`);
    //         let { data } = await res.json();
    //         console.log(data);
    //         return data;
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    React.useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
            setVideos(data.items);
            console.log("Feed", data.items);
        });
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
            <Box
                sx={{
                    height: { xs: "auto", md: "92vh" },
                    borderRight: "1px solid #3d3d3d",
                    px: { sx: 0, md: 2 },
                }}
            >
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typo className="copyright" variant="body2" sx={{ mt: 1.5, color: "white " }}>
                    Copyright AustinCabs
                </Typo>
            </Box>

            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typo variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                    {selectedCategory}{" "}
                    <span
                        style={{
                            color: "#F31503",
                        }}
                    >
                        videos
                    </span>
                </Typo>
                <Video data={videos} />
            </Box>
        </Stack>
    );
}

export default Feed;
