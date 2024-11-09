import React from "react";
import styled from "styled-components";

type Props = {
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  hierarchy:
    | "Primary"
    | "Secondary-color"
    | "Secondary-gray"
    | "Tertiary-color"
    | "Tertiary-gray"
    | "Link-color"
    | "Link-gray";
  destructive: boolean;
  icon?: "Leading" | "Trailing" | "Dot" | "Only";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export const Button = (props: Props) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button``;
