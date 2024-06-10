import React from "react";
import styles from "./Container.module.scss";
import { ElementType, HTMLAttributes } from "react";

interface CompProps extends HTMLAttributes<HTMLOrSVGElement> {
    tag?: ElementType;
    children?: any;
    style?: object;
    className?: string;
    small?: boolean;
}

export const Container = React.forwardRef<any, CompProps>(
    ({ children, tag = "div", style, className, small }, ref) => {
        const CustomTag = tag;
        return (
            <CustomTag
                ref={ref}
                className={`eps-container ${small ? styles.small : ""} ${
                    styles.container
                } ${className ? className : ""}`}
                style={style}
            >
                {children}
            </CustomTag>
        );
    }
);
Container.displayName = "Container";
