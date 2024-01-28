import { FC } from 'react';
import { Container, ContainerProps } from '@mantine/core';

export const MainContainer: FC<ContainerProps> = ({ children, ...other }) => {
    return (
        <Container fluid {...other}>
            {children}
        </Container>
    );
};