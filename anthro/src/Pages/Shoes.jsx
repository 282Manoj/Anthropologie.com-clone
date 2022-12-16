import { Grid, GridItem, Heading ,Divider} from "@chakra-ui/react";
import React from "react";

import Head from "../component/shoes/Head";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import FilterComp from "../component/shoes/FilterComponets";
import ShoesList from "../component/shoes/ShoesList";


const Shoes = () => {
  return (
    <div style={{paddingTop:"25px"}}>
        <Navbar/>
        
      <Head />

      <Grid
        h="full"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={2} colSpan={1} marginLeft="35px" >
          <Heading
            textAlign={{ base: "start", md: "start", lg: "start" }}
            fontSize="1xl"
            paddingBottom="10px"
            marginLeft="15px"
            
          >
           Browse by:
           <Divider></Divider>
          </Heading>

          <FilterComp />
        </GridItem>

        <GridItem colSpan={4} rowSpan={2} >
          <Heading
            textAlign={{ base: "center", md: "center", lg: "center" }}
            fontSize="2xl"
            color="#26262C"
          >
            Women's Shoes
          </Heading>

          <ShoesList />
        </GridItem>
      </Grid>
      <Footer/>
    </div>
  );
};

export default Shoes;
