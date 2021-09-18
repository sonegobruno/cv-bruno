import { ButtonProps, Button, Icon } from "@chakra-ui/react";
import { AiOutlineFilePdf } from 'react-icons/ai';
import { jsPDF } from "jspdf";
import domtoimage from 'dom-to-image';

interface Props extends ButtonProps {

}

export function ButtonGeneratorPDF({ ...rest }: Props) {

    async function capture() {
        try {
            const domYouWillFormat = document.querySelector("#capture");
            const pgnFile = await domtoimage.toPng(domYouWillFormat);
            
            const pdf = new jsPDF();
            pdf.addImage(pgnFile, 'PNG', 0, 0, 0, 0);
            pdf.save("cv-bruno.pdf"); 

        } catch(err) {
            console.error('ERRO -> ', err)
        }
      }

    return (
        <Button 
            w="56px"
            h="56px"
            size="md"
            onClick={capture}
            colorScheme="red"

            borderRadius="50%"
            {...rest}
        >
            <Icon as={AiOutlineFilePdf} w="7" h="7"/>
        </Button>
    );
}