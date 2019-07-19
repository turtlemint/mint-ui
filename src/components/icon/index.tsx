import React from 'react';
import PALETTE from '../_utils/colors';

interface IconProps {
    size?: number;
    icon: string;
    color?: string;
    className?: string
}
const Icon = ({ size = 24, icon, color = PALETTE.WHITE, ...rest }: IconProps) => {
    const styles = {
        svg: {
            display: 'inline-block',
            verticalAlign: 'middle',
        },
        path: {
            fill: color,
        },
    };
    return (
        <svg
            width={`${size}px`}
            height={`${size}px`}
            viewBox='0 0 24 24'
            style={styles.svg}
            {...rest}>
            <path
                d={icon}
                style={styles.path} />
        </svg>
    );
};

export default Icon;
