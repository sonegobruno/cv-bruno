import { CustomIcon } from "@/components/CustomIcon";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

type List = {
    title: string;
    subTitle: string;
    description?: string;
}

interface Props {
    icon: any;
    title: string;
    list: List[];
}

export function CardListInformation({
    icon,
    title,
    list
}: Props) {
    return (
        <Box>
            <Flex align="center">
                <CustomIcon icon={icon}/>
                <Text fontSize="xl" fontWeight="bold" ml="2">{title}</Text>
            </Flex>
            <Stack spacing="2" mt="3">
                {list.map(item => (
                    <Box key={item.title}>
                        <Text fontSize="lg" fontWeight="bold">{item.title}</Text>
                        <Text fontSize="md" color="gray.700">{item.subTitle}</Text>
                        {!!item.description && (
                            <Flex mt="1">
                                <Text lineHeight="5" fontSize="md" color="gray.600">
                                    {item.description}
                                </Text>
                            </Flex>
                        )}
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}