import React from 'react';

interface IconProps {
    size?: number;
    icon: string;
    className?: string
    children?: SVGAElement
}
const Icon = ({ size = 24, icon, children, ...rest }: IconProps) => {
    const styles = {
        svg: {
            display: 'inline-block',
            verticalAlign: 'middle',
        }
    };
    return (
        <svg
            width={`${size}px`}
            height={`${size}px`}
            viewBox='0 0 24 24'
            style={styles.svg}
            dangerouslySetInnerHTML={{ __html: icon }}
            {...rest}>
            {/* <path
                d={icon}
                style={styles.path} /> */}
        </svg >
    );
};

export default Icon;
