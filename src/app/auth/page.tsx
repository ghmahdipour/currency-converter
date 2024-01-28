'use client'

import { useForm } from '@mantine/form';
import { MainContainer } from '@ui/container/Container';
import { colorPalette } from '@ui/colors';
import { MyPaper } from '@ui/paper/Paper';
import { Stack } from '@mantine/core';
import Login from '@components/Login';

const LoginPage = () => {

    return (
           <Stack
                bg={colorPalette.lightPurple}
                align="center"
                justify="center"
                h={'100vh'}
           >
            <MyPaper 
                sx={{ 
                    width: '450px',
                    padding: '50px 60px',
                }}
            >
                <Login />
            </MyPaper>
           </Stack>
    )

}

export default LoginPage;