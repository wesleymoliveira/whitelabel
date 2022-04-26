import type { NextPage } from "next";
import { Box, Container } from "@mui/material";
import { isMobile, browserName } from "react-device-detect";
import { useEffect, useState } from "react";
import { useQueryDevelopersQuery } from "@/typings/graphql-generated";

const Welcome: NextPage = () => {
  const [safariMobile, setSafariMobile] = useState(false);
  const { data } = useQueryDevelopersQuery();

  const developers = data?.developers;
  console.log("Test Auto generated hook", developers);

  useEffect(() => {
    if (isMobile && browserName.includes("Safari")) {
      setSafariMobile(true);
    }
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        pb: "30px",
        minHeight: "-webkit-fill-available",
        height: safariMobile ? "0" : "90vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Whitelabel Client
      </Box>
    </Container>
  );
};

export default Welcome;
