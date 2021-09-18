import { Box, Stack } from "@chakra-ui/react";
import { FaUser } from 'react-icons/fa';
import { RiBriefcase3Line } from "react-icons/ri";
import { SiGooglescholar } from 'react-icons/si';
import { CardInformation } from "./CardInformation";
import { CardListInformation } from "./CardListInformation";

export function Content() {
    const education = [
        {
            title: '2º Grau (Completo): | 2012',
            subTitle: 'Escola Estadual Antônio Eufrásio de Toledo',
        },
        {
            title: 'Técnico em Eletrônica (Completo)',
            subTitle: 'Centro de Educação Profissional Tancredo Neves CEP, Brasópolis – MG',
        },
        {
            title: 'Ensino Superior (Completo) | 2019',
            subTitle: 'Ciência da Computação - Faculdade Anhanguera, Taubaté – SP',
        },
        {
            title: 'GoStack 12 - Rocketseat | 2020',
            subTitle: 'Ecossistema das tecnologias Node.js, ReactJS e React Native',
        },
        {
            title: 'Curso de Inglês (Completo) | 2020',
            subTitle: 'KNN Idiomas, Paraisópolis - MG',
        },
        {
            title: 'Ignite (Incompleto)',
            subTitle: 'Este curso é uma atualização do GoStack',
        },
    ];

    const experience = [
        {
            title: 'Delphi Automotive Systems do Brasil LTDA 2015',
            subTitle: 'Operador de Produção (Chicotes Automotivos)',
        },
        {
            title: 'Pro Eletronic 2016 | 2017',
            subTitle: 'Auxiliar de Produção (Teste / Retrabalho de produtos não conformes)',
        },
        {
            title: 'SBS-NET 2018 | 2020',
            subTitle: 'Analista de suporte técnico',
        },
        {
            title: 'B2ML 2020 | atualmente no cargo',
            subTitle: 'Analista de sistemas',
        }
    ]

    return (
        <Box 
            pl="244px" 
            py="12px" 
            pr="20px" 
            minH="990px" 
            maxH="990px" 
            overflow="hidden"
        >
            <Stack spacing="6">
                <CardInformation 
                    icon={FaUser} 
                    title="Sobre mim" 
                    description="Sou uma pessoa muito motivada e com uma curiosidade que auxilia no aprendizado contínuo. Meu objetivo no momento é atingir um próximo nível e enfrentar novos desafios relacionados a área de desenvolvimento"
                />

                <CardListInformation 
                    icon={SiGooglescholar}
                    title="Escolaridade"
                    list={education}
                />

                <CardListInformation 
                    icon={RiBriefcase3Line}
                    title="Expêriencias"
                    list={experience}
                />
                
            </Stack>
        </Box>  
    );
}