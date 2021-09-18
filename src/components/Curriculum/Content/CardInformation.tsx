import { CustomIcon } from "@/components/CustomIcon";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";

interface Props {
    icon: any;
    title: string;
    description: string;
}

export function CardInformation({title, description, icon}: Props) {
    return (
        <Box>
            <Flex align="center">
                <CustomIcon icon={icon}/>
                <Text fontSize="xl" fontWeight="bold" ml="2">{title}</Text>
            </Flex>
            <Flex mt="3">
                <Text lineHeight="5" fontSize="md" color="gray.700">
                    {description}
                </Text>
            </Flex>
        </Box>
    );
}