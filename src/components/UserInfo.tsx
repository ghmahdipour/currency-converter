'use client';

import { useTranslation } from "react-i18next";
import { Button, Text, Group , Stack, TextInput, Fieldset, Grid } from '@mantine/core';
import { colorPalette } from '@ui/colors';
import { CurrencyOption } from '@ui/currency/CurrencyOption';
import { signOut, useSession } from 'next-auth/react';
import { useCurrency } from "@hooks/useCurrency";
import Chart from './Chart';
import { useChart } from "@hooks/useChart";

const UserInfo = () => {

    const { t } = useTranslation();
    const { data: session } = useSession();
    const { data, from, to, setFrom, setTo, amount, setAmount, converted } = useCurrency();
    const { data: categories } = useChart();
    
    return (<>
        <Stack
            bg={colorPalette.purple100}
            justify="center"
            h={'60px'}
        >
            <Group justify="space-between" align="center" px={'40px'}>
                <Text fw={500} size="xl" 
                    variant="gradient"
                    gradient={{ from: 'violet', to: 'cyan', deg: 276 }}
                >
                    {t("hello")} {session?.user?.username ?? ''}
                    </Text>
                <Button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/', redirect: true  })} color={colorPalette.purple} variant="transparent" size='lg'>
                    {t("signOut")}
                </Button>
            </Group> 
        </Stack> 
        <Stack p={'20px'}>
            <Fieldset legend="Currency">
                {data && (<>
                    <Grid >
                        <CurrencyOption 
                            currency={from}
                            onCurrencyChange={(e:any) => setFrom(e)}
                            options={Object.keys(data?.conversion_rates)}
                        />
                        <CurrencyOption 
                            currency={to}
                            onCurrencyChange={(e:any) => setTo(e)}
                            options={Object.keys(data?.conversion_rates)}
                        />
                    </Grid>
                        
                    <Grid >
                        <Grid.Col span={4}>
                            <TextInput 
                                value={amount} 
                                onChange={(e: any) => setAmount(e.currentTarget.value)}
                            />
                        </Grid.Col>
                    </Grid>
                    <Text>{amount} {from}</Text>
                    <Text>{converted} {to}</Text>
                </>)}
            </Fieldset>
        </Stack>
        <Grid p={'20px'}>
            <Grid.Col>
                <Fieldset legend="Chart">
                    {categories && <Chart  categories={categories} />}
                </Fieldset>
            </Grid.Col>
        </Grid>
    </>);
};

export default UserInfo;