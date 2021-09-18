import { Box, Flex, Avatar, BoxProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends BoxProps {
    children: ReactNode
}

export function WrapperTitleInformation({ children,...rest }: Props) {
    return (
        <Box 
            w="100%" 
            border="1px solid" 
            borderRadius="1" 
            borderColor="secondary"
            {...rest}
        >
            <Text 
                color="gray.50" 
                fontWeight="bold" 
                fontSize="lg" 
                textAlign="center"
            >
                {children}
            </Text>
        </Box>
    );
}