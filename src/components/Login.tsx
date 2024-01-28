'use client';

import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { yupResolver } from 'mantine-form-yup-resolver';
import { TextInput, PasswordInput, Title, Button, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { colorPalette } from '@ui/colors';
import { initialValues, validationSchema } from '@validations/login';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

const Login = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [error, setError] = useState('');

    const { mutate: onSubmitHandler, isPending } = useMutation({
        mutationFn: async (data: any) => await signIn('credentials', {
            country: data.country,
            city: data.city,
            username: data.username,
            password: data.password,
            redirect: false
        }),
        onSuccess: () => {
            console.log("******You have successfully logged in******");
            router.replace('/dashboard');
        },
        onError: (err: any) => {
            console.log(err);
            setError(err)
        }
    })

    const form = useForm({
        initialValues: initialValues,
        validate: yupResolver(validationSchema)
      });

    return (
        <form onSubmit={form.onSubmit((values: any) => onSubmitHandler(values))}>
            <Title order={1}>{t('login')}</Title>
            <TextInput 
                label={t('country')} 
                placeholder={t('country')} 
                {...form.getInputProps('country')} 
            />
            <TextInput 
                label={t('city')} 
                placeholder={t('city')}  
                {...form.getInputProps('city')} 
            />
            <TextInput 
                label={t('username')} 
                placeholder={t('username')}  
                {...form.getInputProps('username')} 
            />
            <PasswordInput
                label={t('password')} 
                placeholder={t('password')}
                {...form.getInputProps('password')}
            />
            {error && <Text c="blue">{error}</Text>}
            <Button 
                type="submit" 
                mt="md" 
                radius="md" 
                variant="filled" 
                color={colorPalette.purple}
                fullWidth
                loading={isPending}
                disabled={isPending}
            >
                {t("submit")}
            </Button>
        </form>
    );
};

export default Login;