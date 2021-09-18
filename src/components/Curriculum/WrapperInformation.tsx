
import { 
    Flex, 
    Avatar, 
    FlexProps, 
} from "@chakra-ui/react";

import { WrapperTitleInformation } from "./WrapperTitleInformation";
import { RiMailSendLine, RiPhoneFill } from 'react-icons/ri';
import { FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { WrapperDescriptionInformation } from "./WrapperDescriptionInformation";

interface Props extends FlexProps {

}

export function WrapperInformation({ ...rest }: Props) {
    return (
        <Flex 
            w="198px" 
            h="100%" 
            py="20px"
            px="14px"
            align="center"
            flexDirection="column"
            {...rest}
        >
            <Avatar src="/assets/avatar.jpeg" w="154px" h="154px"/>

            <WrapperTitleInformation mt="26px">
                Contato
            </WrapperTitleInformation>

            <WrapperDescriptionInformation icon={RiPhoneFill} description="(35) 98439-6313"/>
            <WrapperDescriptionInformation icon={RiMailSendLine} description="sonego.bruno@gmail.com"/>
            <WrapperDescriptionInformation icon={FaGithub} description="https://github.com/sonegobruno"/>
            
            <WrapperTitleInformation mt="26px">
                Endereço
            </WrapperTitleInformation>
            <WrapperDescriptionInformation icon={FaMapMarkerAlt} description="R. João Remo de Faria, 68 - Paraisópolis - MG"/>

            <WrapperTitleInformation mt="26px">
                Habilidades
            </WrapperTitleInformation>

            <WrapperDescriptionInformation showListPointer description="React JS"/>
            <WrapperDescriptionInformation showListPointer description="Node JS"/>
            <WrapperDescriptionInformation showListPointer description="React Native"/>
            <WrapperDescriptionInformation showListPointer description="Ionic"/>
            <WrapperDescriptionInformation showListPointer description="Experiência com comandos GIT"/>
            <WrapperDescriptionInformation showListPointer description="SQL"/>

            <WrapperTitleInformation mt="26px">
                Hobbies
            </WrapperTitleInformation>
            <WrapperDescriptionInformation showListPointer description="Ouvir música"/>
            <WrapperDescriptionInformation showListPointer description="Viajar"/>
            <WrapperDescriptionInformation showListPointer description="Ver filmes e séries"/>
            <WrapperDescriptionInformation showListPointer description="Programar"/>

        </Flex>
    )
}