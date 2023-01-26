import React from "react";
import { Box, Typography as Typo } from "@mui/material";
import { Video } from "../components";
import { fetchFromApi } from "../utils/fetchApi";
import { useParams } from "react-router-dom";

function SearchFeed() {
    const { searchTerm } = useParams()
    const [videos, setVideos] = React.useState([]);


    React.useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
            setVideos(data.items);
        });
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            <Typo variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                Searh Results for
                <span
                    style={{
                        color: "#F31503",
                    }}
                >
                    {' '} {searchTerm}
                </span>
            </Typo>
            <Video data={videos} />
        </Box>
    );
}

export default SearchFeed;
