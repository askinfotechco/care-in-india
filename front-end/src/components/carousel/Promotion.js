import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { PromotionCarousel } from "./PromotionCarousel";

export const Promotion = () => {
  return (
    <Container id="promotion" component="div">
      <Stack>
        <Box mt={3}>
          <PromotionCarousel />
        </Box>
      </Stack>
    </Container>
  );
};
