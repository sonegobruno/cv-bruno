import { Box, Flex, Heading,Text } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex w="100%" h="94px" bg="secondary" pl="248px" pt="34px" pb="20">
            <Box>
                <Heading color="white" fontSize="xl">Bruno Antônio Marques Sônego</Heading>
                <Text color="white" fontWeight="bold" fontSize="md">Desenvolvedor Full Stack</Text>
            </Box>
        </Flex>
    )
}