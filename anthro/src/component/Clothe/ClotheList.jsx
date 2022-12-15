import { Grid,  } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getClothes } from "../../Redux/action";


import ClotheCard from "./ClotheCard";
const ClotheList = () => {
  const clothe = useSelector((store) => store.cloths);
  // console.log(clothe);
  const dispatch = useDispatch();
  const location =useLocation();
  const [searchParams]=useSearchParams();
  // console.log(location);

  useEffect(() => {
    // if i dont have any clothe in redux,then make the api call
    if (location || clothe.length === 0) {
      const getclotheParams ={
        params:{
          category: searchParams.getAll("category"),
          size:searchParams.getAll("size")
        }
      }

      dispatch(getClothes(getclotheParams));
    }
  }, [clothe.length, dispatch,location.search,location,searchParams]);


  return (
  
    <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }} gap={4} padding={3} >
      {clothe.length > 0 &&
        clothe.map((clothe) => {
          return (
           <div key={clothe.id} >
            <Link to={`/clothe/${clothe.id}`}>
              <ClotheCard  clotheData={clothe}  />
              </Link>
              </div>
           
          );
        })}
   </Grid>
  );
};


export default ClotheList;
