import { Grid,  } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { getShoes } from "../../Redux/shoesproduct/action";
import ShoesCard from "./ShoesCard";



const ShoesList = () => {
  const Shoes = useSelector((store) => store.shoesReducer.Shoes);
//   console.log(Shoes);
  const dispatch = useDispatch();
  const location =useLocation();
  const [searchParams]=useSearchParams();
  // console.log(location);

  useEffect(() => {
    // if i dont have any clothe in redux,then make the api call
    if (location || Shoes.length === 0) {
      const getShoesParams ={
        params:{
          category: searchParams.getAll("category"),
          size:searchParams.getAll("size")
        }
      }

      dispatch(getShoes(getShoesParams));
    }
  }, [Shoes.length, dispatch,location.search,location,searchParams]);


  return (
  
    <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }} gap={4} padding={3} >
      {Shoes.length > 0 &&
        Shoes.map((Shoes) => {
          return (
           <div key={Shoes.id} >
            <Link to={`/shoes/${Shoes.id}`}>
              <ShoesCard  ShoesData={Shoes}  />
              </Link>
              </div>
           
          );
        })}
   </Grid>
  );
};


export default ShoesList;
