import { 
    Box, 
    Flex, 
    FlexProps, 
    Text,
    Icon
} from "@chakra-ui/react";
import { CustomIcon } from "../CustomIcon";

interface Props extends FlexProps {
    icon?: any;
    description: string;
    showListPointer?: boolean;
}

export function WrapperDescriptionInformation({ 
    icon, 
    description,
    showListPointer = false,
     ...rest}: Props) {
    return (
        <Flex w="100%" align="center" mt="3" {...rest}>
            {!!icon && (
                <Box
                    w="28px" 
                    h="28px" 
                >
                    <CustomIcon icon={icon}/>
                </Box>
            )}

            {showListPointer && <Box w="8px" h="8px" borderRadius="50%" bg="gray.50"/>}
            
            <Box w="144px">
                <Text 
                    lineHeight="4" 
                    fontSize="14px" 
                    color="gray.50" 
                    fontWeight="bold" 
                    ml="2" 
                    whiteSpace="pre-wrap"
                >
                    {description}
                </Text>
            </Box>
        </Flex>
    );
}