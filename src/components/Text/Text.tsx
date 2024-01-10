import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { HTMLProps } from "react";

type OmitAsProp<T> = Omit<T, "as">;

interface TextProps extends OmitAsProp<HTMLProps<HTMLDivElement>> {
  children: React.ReactNode;
  css?: SerializedStyles;
  fontSize?: string;
}

const TextCss = styled("span")<TextProps>``;

function Text({ children, ...rest }: TextProps) {
  return <TextCss {...rest}>{children}</TextCss>;
}

export default Text;
