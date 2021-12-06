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
  opacity: 0.3;
  overflow: hidden;
  position: relative;

  &:after {
      content: " ";
      display: block;
        background: rgb(154, 134, 253);
        height: -webkit-fill-available;
        width: 2px;
        content: '';
        left: 8px;
        position: absolute;
  }
`;

const LineContent = styled.span`
  display: table-cell;
`;

interface CodeProps {
    code: string
    language: Language
}

const Code = ({ code, language }: CodeProps) => (
    <Highlight {...defaultProps} code={code} language={language}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
            <Box
                as="pre"
                className={className}
                overflow="auto"
                fontFamily="Cascadia Code"
                p="10px"
                flex={1}
                whiteSpace={'break-spaces'}
            >
                {tokens.map((line, i) => (
                    <Line key={i} {...getLineProps({ line, key: i })}>
                        <LineNo>{i + 1 < 10 ? `0${i + 1}` : i + 1}</LineNo>
                        <LineContent>
                            {line.map((token, key) => {
                                return <span key={key} {...getTokenProps({ token, key })} />
                            })}
                        </LineContent>
                    </Line>
                ))}
            </Box>
        )}
    </Highlight>
);

export default Code