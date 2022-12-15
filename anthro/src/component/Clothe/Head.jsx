import { Grid, GridItem,  } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Grid
      templateColumns={{base:"repeat(2, 1fr)", md:"repeat(3, 1fr)", lg: "repeat(6,1fr)"}}
      
      gap={4}
      padding={8}
      marginTop={150}
    >
      <GridItem
        w="100%"
        h="16"
        bg="#c6a77b"
        textAlign="center"
        padding="20px 10px 10px 10px"
      >
        DRESS
      </GridItem>
      <GridItem w="100%" h="16" bg="#dd8591 "  textAlign="center"
        padding="20px 10px 10px 10px">PANSTS</GridItem>
      <GridItem w="100%" h="16" bg="#b99083"  textAlign="center"
        padding="20px 10px 10px 10px">JEANS</GridItem>
      <GridItem w="100%" h="16" bg="#c57683 " textAlign="center"
        padding="20px 10px 10px 10px" >TOPS</GridItem>
      <GridItem w="100%" h="16" bg="
#de8c75"  textAlign="center"
        padding="20px 10px 10px 10px">SHOES</GridItem>
      <GridItem w="100%" h="16" bg="#d17971"  textAlign="center"
        padding="20px 10px 10px 10px">SWETERS</GridItem>
    </Grid>
  );
};

export default Header;
