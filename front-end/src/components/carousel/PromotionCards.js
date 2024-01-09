import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

export const PromotionCards = ({ items }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Card
        sx={{
          maxWidth: 900,
          height: isMatch ? 426 : 270,
          color: "black",
          //  borderRadius: "15px",
        }}
      >
        <CardContent>
          {/* <Box display="flex" gap={2}> */}
            <Typography component="div">
              {items.logo}
            </Typography>
          {/* </Box> */}
          {/* <Box>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              fontSize={"13px"}
            >
              {items.desc}
            </Typography>
            <Typography variant="body1" color="darkblack" fontSize={"13px"}>
              {items.details}
            </Typography>
            <Typography
              variant="body2"
              color="darkblack"
              mt={2}
              fontSize={"13px"}
            >
              {items.recommendation}
            </Typography>
          </Box> */}
        </CardContent>
      </Card>
    </Box>
  );
};
