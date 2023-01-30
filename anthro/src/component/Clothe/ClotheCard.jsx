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

const ClotheCard = ({ clotheData }) => {
  // console.log(bookData);
  return (
    <Grid>
      <Card maxW="sm" border={"none"} >
        <CardBody>
          <Image
             height={"350px"}
             width={"350px"}
            src={clotheData.img2}
            alt="Green double couch with wooden legs"
           
          />
          <Stack mt="6" spacing="3">
            <Text>{clotheData.title}</Text>
            <Text
               fontSize="medium"
               textAlign="center"
               paddingLeft="5px"
            >
              ${clotheData.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />

        <Wrap p={"10px"}  >
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

export default ClotheCard;
