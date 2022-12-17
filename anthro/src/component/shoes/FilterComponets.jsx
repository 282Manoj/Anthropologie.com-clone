import React, { useState } from "react";
import { Stack, Checkbox, Container, Text, Heading, Radio } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // when ever the page refresh we need to check if the url had any data,before setting the data to an empty array
  const intialCategory = searchParams.getAll("category");
  const initialSort = searchParams.getAll("sort");

  const initialSize=searchParams.getAll("size");
  // console.log(intialCategory);
  const [category, setCategory] = useState(intialCategory || []);
  const [size, setSize] = useState(initialSize || []);

  const [sort, setSortBy] = useState(initialSort[0] || "");
  const handleFilterCheckbox = (e) => {
    // check if the data is present in the category,
    const newCategories = [...category];
    // if yes,the remove it (the user has unchecked the checkbox)
    if (newCategories.includes(e.target.value)) {
      //remove it
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      //  else  add it in the category array
      newCategories.push(e.target.value);
    }
    setCategory(newCategories);
  };

  const handleFilterCheckboxSize = (e) => {
    // check if the data is present in the category,
    const newsize = [...size];
    // if yes,the remove it (the user has unchecked the checkbox)
    if (newsize.includes(e.target.value)) {
      //remove it
      newsize.splice(newsize.indexOf(e.target.value), 1);
    } else {
      //  else  add it in the category array
      newsize.push(e.target.value);
    }
    setSize(newsize);
  };
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };
  // console.log(category);
  // if the category changes, update the valuein  the url search params
  useEffect(() => {
    let params = {};
    params.category = category;
    params.size=size;
    sort && (params.sort = sort);
    // console.log(params);
    setSearchParams(params);
  }, [category,size, setSearchParams,sort]);

  return (
    

    <Container startContent lineHeight={8}>
      <Text style={{ cursor: "pointer",fontSize:"14px",marginBottom:"10px" }}>Shoes</Text>
      <Text style={{ cursor: "pointer",fontSize:"14px" }}>New!</Text>
      <Text style={{ cursor: "pointer",fontSize:"14px" }}>Top-Rated</Text>
      <Text style={{ cursor: "pointer",fontSize:"14px" }}>Boots & Booties</Text>
      <Text style={{ cursor: "pointer",fontSize:"14px" }}>Cold Weather Boots</Text>
      <Text style={{ cursor: "pointer",fontSize:"14px" }}>Flats</Text>
      <Text style={{ cursor: "pointer" ,fontSize:"14px"}}>Heels & Wedges</Text>
      <Text style={{ cursor: "pointer",fontSize:"14px" }}>Mules & Clogs</Text>
      <Text style={{ cursor: "pointer" ,fontSize:"14px"}}>Sandals</Text>
      <Text style={{ cursor: "pointer",fontSize:"14px" }}>Slippers</Text>
      <Text style={{ cursor: "pointer" ,fontSize:"14px"}}>Sneakers</Text>
      <Text style={{ cursor: "pointer",fontSize:"14px" }}>Socks & Tights</Text>
      

      <Stack padding={5} marginLeft={-5}>
        <Heading size="md">Filter by Brand:</Heading>
        <Checkbox 
          checked={category.includes("ALOHAS")}
          onChange={handleFilterCheckbox}
          value="ALOHAS"
        >
          ALOHAS
        </Checkbox>

        <Checkbox
          checked={category.includes(" ASICS")}
          onChange={handleFilterCheckbox}
          value="ASICS"
        >
          ASICS
        </Checkbox>

        <Checkbox
          checked={category.includes("Bombas")}
          onChange={handleFilterCheckbox}
          value="Bombas"
        >
          Bombas
        </Checkbox>

        <Checkbox
          checked={category.includes("Faguo")}
          onChange={handleFilterCheckbox}
          value="Faguo"
        >
          Faguo
        </Checkbox>
      </Stack>

      <Stack padding={5} marginLeft={-5}>
        <Heading size="md">Filter by Size:</Heading>
        <Checkbox
          checked={size.includes("S")}
          onChange={handleFilterCheckboxSize}
          value="S"
        >
          S
        </Checkbox>
        <Checkbox
          checked={size.includes("M")}
          onChange={handleFilterCheckboxSize}
          value="M"
        >
          M
        </Checkbox>

        <Checkbox
          checked={size.includes("L")}
          onChange={handleFilterCheckboxSize}
          value="L"
        >
          L
        </Checkbox>

      

        <Checkbox
          checked={size.includes("XL")}
          onChange={handleFilterCheckboxSize}
          value="XL"
        >
          XL
        </Checkbox>
      </Stack>

      <Stack padding={2} marginLeft={-3} >
        <Heading size="md">Sorting by Price:</Heading>
       
        <Radio value="asc" name="sortBy" defaultChecked={sort === "asc"}  onChange={handleSort}>
          Low to High
        </Radio>
        <Radio value="desc" name="sortBy" defaultChecked={sort === "desc"} onChange={handleSort}>
          High to Low
        </Radio>
      
        
    
      </Stack>
    </Container>
  );
};

export default FilterComp;
