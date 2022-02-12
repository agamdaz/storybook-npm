import { FC, ReactElement } from "react";
import { style } from "typestyle";

export type ButtonProps = {
  children: string;
  color?: "default" | "primary";
  onClick: () => void;
  title: string;
};

const getStyles = (color: string) =>
  style({
    background: `${color === "primary" ? "deeppink" : "white"}`,
    border: `.1rem solid ${color === "primary" ? "deeppink" : "gray"}`,
    borderRadius: ".25rem",
    color: `${color === "primary" ? "white" : "gray"}`,
    cursor: "pointer",
    padding: ".25rem 1rem",
  });

export const Button: FC<ButtonProps> = ({
  color = "base",
  children,
  onClick,
  title,
}): ReactElement => (
  <button className={getStyles(color)} onClick={onClick} title={title}>
    {children}
  </button>
);
