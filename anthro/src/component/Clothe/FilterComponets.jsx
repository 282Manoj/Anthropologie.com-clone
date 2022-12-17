import React, { useState } from "react";
import {
  Stack,
  Checkbox,
  Container,
  Text,
  Heading,
  Radio,
  
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // when ever the page refresh we need to check if the url had any data,before setting the data to an empty array
  const intialCategory = searchParams.getAll("category");

  const initialSize = searchParams.getAll("size");
  const initialSort = searchParams.getAll("sort");
  console.log(initialSort);
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

  //sorting
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };
  // console.log(category);
  // if the category changes, update the valuein  the url search params
  useEffect(() => {
    let params = {};
    params.category = category;
    params.size = size;
    sort && (params.sort = sort);
    // console.log(params);
    setSearchParams(params);
  }, [category, size, setSearchParams, sort]);

  return (
    <Container startContent lineHeight={8}>
      <Text
        style={{ cursor: "pointer", fontSize: "14px", marginBottom: "10px" }}
      >
        Clothing
      </Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>New!</Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>Top-Rated</Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>Activewear</Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>Blazers</Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>
        Cocktail & Party Dresses
      </Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>
        Lounge & Casual Dresses
      </Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>
        Little Black Dresses
      </Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>
        Little White Dresses
      </Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>Maxi Dresses</Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>Midi Dresses</Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>
        Mini & Tunic Dresses
      </Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>Jumpsuits</Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>Skirts</Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>Sweaters</Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>Swimwear</Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>Tops & Tees</Text>
      <Text style={{ cursor: "pointer", fontSize: "14px" }}>Petites</Text>

      <Stack padding={5} marginLeft={-5}>
        <Heading size="md">Filter by Brand:</Heading>
        <Checkbox
          checked={category.includes("Joslin")}
          onChange={handleFilterCheckbox}
          value="Joslin"
        >
          Joslin
        </Checkbox>

        <Checkbox
          checked={category.includes("Letluv")}
          onChange={handleFilterCheckbox}
          value="Letluv"
        >
          Letluv
        </Checkbox>

        <Checkbox
          checked={category.includes("Maaji")}
          onChange={handleFilterCheckbox}
          value="Maaji"
        >
          Maaji
        </Checkbox>

        <Checkbox
          checked={category.includes("Hutch")}
          onChange={handleFilterCheckbox}
          value="Hutch"
        >
          Hutch
        </Checkbox>
      </Stack>

      <Stack padding={2} marginLeft={-3}>
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

      {/* sorting  */}

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
