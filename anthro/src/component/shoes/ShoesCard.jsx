import {
    Avatar,
    Card,
    CardBody,
    Divider,
    Grid,
    Image,
    Stack,
    Text,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
  import React from "react";
  
  const ShoesCard = ({ ShoesData }) => {
    // console.log(bookData);
    return (
      <Grid>
        <Card maxW="sm" style={{ border: "none" }}>
          <CardBody>
            <Image
              style={{ height: "350px", width: "350px" }}
              src={ShoesData.img2}
              alt="Green double couch with wooden legs"
              //   borderRadius='lg'
            />
            <Stack mt="6" spacing="3">
              <Text>{ShoesData.title}</Text>
              <Text
                color="blue.600"
                fontSize="medium"
                textAlign="start"
                paddingLeft="5px"
              >
                ${ShoesData.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
  
          <Wrap style={{ padding: "10px" }}>
            <WrapItem>
              <Avatar
                size="xs"
                name="Dan Abrahmov"
                src="https://images.urbndata.com/is/image/Anthropologie/4111522160011_012_s?fit=constrain&hei=56&qlt=75"
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                size="xs"
                name="Kola Tioluwani"
                src="https://images.urbndata.com/is/image/Anthropologie/4122382010311_023_s?fit=constrain&hei=56&qlt=75"
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                size="xs"
                name="Kent Dodds"
                src="https://images.urbndata.com/is/image/Anthropologie/4130529100015_030_s?fit=constrain&hei=56&qlt=75"
              />
            </WrapItem>
            <WrapItem>
              <Avatar
                size="xs"
                name="Kent Dodds"
                src="https://images.urbndata.com/is/image/Anthropologie/4123650590142_101_s?fit=constrain&hei=56&qlt=75"
              />
            </WrapItem>
            <Text fontSize="xs">4 Colors</Text>
          </Wrap>
        </Card>
      </Grid>
    );
  };
  
  export default ShoesCard;
  