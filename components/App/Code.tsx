import { Box } from "@chakra-ui/react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import React from "react";
import styled from "styled-components";

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

interface CodeProps {
    code: string
    language: Language
}

const Code = (props: CodeProps) => (
    <Highlight {...defaultProps} code={props.code} language={props.language}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
            <Box
                as="pre"
                className={className}
                overflow="auto"
                sx={{
                    '&::-webkit-scrollbar': {
                        borderRadius: '10px',
                        height: '10px',
                        backgroundColor: `#2D2D2D`,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: `#424242`,
                        borderRadius: '10px',
                    },
                }}
            >
                {tokens.map((line, i) => (
                    <Line key={i} {...getLineProps({ line, key: i })}>
                        <LineNo>{i + 1}</LineNo>
                        <LineContent>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </LineContent>
                    </Line>
                ))}
            </Box>
        )}
    </Highlight>
);

export default Code