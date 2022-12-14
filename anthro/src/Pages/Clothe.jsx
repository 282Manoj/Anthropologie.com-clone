import { Grid, GridItem, Heading ,Divider} from "@chakra-ui/react";
import React from "react";
import ClotheList from "../component/Clothe/ClotheList";
import FilterComp from "../component/Clothe/FilterComponets";
import Header from "../component/Clothe/Header";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";


const Clothe = () => {
  return (
    <div style={{paddingTop:"25px"}}>
        <Navbar/>
        
      <Header />

      <Grid
        h="full"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={2} colSpan={1} >
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
            Women's Clothing
          </Heading>

          <ClotheList />
        </GridItem>
      </Grid>
      <Footer/>
    </div>
  );
};

export default Clothe;
