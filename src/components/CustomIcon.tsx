import { Flex, FlexProps, Icon } from "@chakra-ui/react";

import { RiPhoneFill } from 'react-icons/ri';

interface Props extends FlexProps {
    icon: any;
}

export function CustomIcon({ icon, ...rest }: Props) {
    return (
        <Flex 
            w="28px" 
            h="28px" 
            borderRadius="14px" 
            bg="secondary"
            align="center"
            justify="center"
            {...rest}
        >
            <Icon fontSize="md" as={icon} color="gray.50"/>
        </Flex>
    )
}