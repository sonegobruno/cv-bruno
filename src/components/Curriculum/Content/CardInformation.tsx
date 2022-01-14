import { CustomIcon } from "@/components/CustomIcon";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";

interface Props {
    icon: any;
    title: string;
    description: string;
}

export function CardInformation({title, description, icon}: Props) {
    return (
        <Box w="100%">
            <Flex align="center" w="100%">
                <CustomIcon icon={icon}/>
                <Text fontSize="xl" fontWeight="bold" ml="2" w="100%">{title}</Text>
            </Flex>
            <Flex mt="3">
                <Text lineHeight="5" fontSize="md" color="gray.700">
                    {description}
                </Text>
            </Flex>
        </Box>
    );
}