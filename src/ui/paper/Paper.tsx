
import { FC, ReactNode } from 'react';
import { Paper, MantineStyleProp } from '@mantine/core';
import { colorPalette } from '@ui/colors';

export interface PaperProps {
    children: ReactNode,
    sx?: MantineStyleProp
}

export const MyPaper: FC<PaperProps> = ({ children, sx }) => {
    return (
        <Paper
            bg={colorPalette.white}
            radius="lg"
            shadow={'0px 4px 14px rgba(162, 162, 162, 0.15)'}
            style={sx}
        >
            {children }
        </Paper>
    );
};