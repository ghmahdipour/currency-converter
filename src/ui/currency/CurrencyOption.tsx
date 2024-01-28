import React, { FC } from 'react';
import { Grid, Select  } from '@mantine/core';

export interface PaperProps {
    options?: any;
    currency?: any;
    onCurrencyChange?: (e: any) => void;
}

export const CurrencyOption: FC<PaperProps> = ({ 
    options, 
    currency, 
    onCurrencyChange
 }) => {

    return (
        <Grid.Col span={2}>
            <Select
                defaultValue={currency}
                data={options}
                onChange={onCurrencyChange}
            />
        </Grid.Col>
    )
}