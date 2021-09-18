
import { Box, Flex } from "@chakra-ui/react";
import { Content } from "@/components/Curriculum/Content";
import { Footer } from "@/components/Curriculum/Footer";
import { Header } from "@/components/Curriculum/Header";
import { WrapperInformation } from "@/components/Curriculum/WrapperInformation";
import { ButtonGeneratorPDF } from "@/components/ButtonGeneratorPDF";

export default function Home() {

  return (
    <Flex align="center" justify="center">

      <ButtonGeneratorPDF 
        position="fixed"
        right="64px"
        bottom="32px"
      />

      <Box 
        id="capture"
        w="800px" 
        minH="1125px" 
        maxH="1125px" 
        overflow="hidden" 
        position="relative"
      >
        <WrapperInformation 
          position="absolute" 
          bg="primary"
          left="21px"
          zIndex={1}
        />

        <Header />
        <Content />
        <Footer />
      </Box>


    </Flex>
  )
}
