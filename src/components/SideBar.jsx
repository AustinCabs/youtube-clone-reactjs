import React from "react";

import { Stack } from "@mui/system";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: "column" },
            }}
        >
            {categories.map(({ bname, icon }, index) => (
                <button
                    className="category-btn"
                    onClick={() => {
                        setSelectedCategory(bname)
                    }}
                    style={{
                        background: bname === selectedCategory && "#FC1503",
                        color: "white",
                    }}
                    key={bname + index}
                >
                    <span
                        style={{
                            color: bname === selectedCategory ? "white" : "red",
                            marginRight: "15px",
                        }}
                    >
                        {icon}
                    </span>

                    <span
                        style={{
                            opacity: bname === selectedCategory ? 1 : 0.8,
                        }}
                    >
                        {bname}
                    </span>
                </button>
            ))}
        </Stack>
    );
};

export default SideBar;
