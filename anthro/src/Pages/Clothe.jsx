import { Grid, GridItem, Heading, Divider } from "@chakra-ui/react";
import React from "react";
import ClotheList from "../component/Clothe/ClotheList";
import FilterComp from "../component/Clothe/FilterComponets";
import Head from "../component/Clothe/Head";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import "./clothe.css";

const Clothe = () => {
  return (
    <div className="Main_div"  >
      <Navbar />

      <Head />

      <Grid
        h="full"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={2} colSpan={1} marginLeft="35px">
          <Heading className="Haeding">
            Browse by:
            <Divider></Divider>
          </Heading>

          <FilterComp />
        </GridItem>

        <GridItem colSpan={4} rowSpan={2}>
          <Heading className="Header_women">Women's Clothing</Heading>

          <ClotheList />
        </GridItem>
      </Grid>
      <Footer />
    </div>
  );
};

export default Clothe;
