import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(6,1fr)",
      }}
      gap={4}
      padding={8}
      marginTop={150}
    >
      <GridItem
        w="100%"
        h="16"
        bg="#347f4d"
        textAlign="center"
        padding="20px 10px 10px 10px"
      >
        5-5.5
      </GridItem>
      <GridItem
        w="100%"
        h="16"
        bg="#429d91 "
        textAlign="center"
        padding="20px 10px 10px 10px"
      >
        6-6.5
      </GridItem>
      <GridItem
        w="100%"
        h="16"
        bg="#6289a5"
        textAlign="center"
        padding="20px 10px 10px 10px"
      >
        7-7.5
      </GridItem>
      <GridItem
        w="100%"
        h="16"
        bg="#3c8e7c"
        textAlign="center"
        padding="20px 10px 10px 10px"
      >
        8-8.5
      </GridItem>
      <GridItem
        w="100%"
        h="16"
        bg="
#46854b"
        textAlign="center"
        padding="20px 10px 10px 10px"
      >
        9-9.5
      </GridItem>
      <GridItem
        w="100%"
        h="16"
        bg="#d17971"
        textAlign="center"
        padding="20px 10px 10px 10px"
      >
        10-11
      </GridItem>
    </Grid>
  );
};

export default Header;
