import { Box, Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
export interface AppBarItemProps {
    name: string;
    extension?: string
    file_type?: string;
    toggled: boolean;
}


const AppBarItem = (props: AppBarItemProps) => {
    return (
        <Link href={`/?tab=${props.name}`}>
            <Button padding="0" borderRadius="0" background={props.toggled ? "#1E1E1E" : "#2D2D2D"}>
                <Flex h="inherit" alignContent="center" flexWrap="wrap" padding="12px 16px">
                    {props.file_type &&
                        <Box marginRight={"5px"}>
                            <Image alt="" src={`files_logos/file_type_${props.file_type}.svg`} w="20px" h="20px" />
                        </Box>
                    }
                    <Box>
                        <span>{props.name}{props.extension}</span>
                    </Box>
                </Flex>
            </Button >
        </Link>
    )
}



export default AppBarItem