import { useState } from "react";
import currencyServices from "@services/currency.services"
import { useQuery } from "@tanstack/react-query";

export const useCurrency = () => {
    const [from, setFrom] = useState('GBP');
    const [to, setTo] = useState('EUR');
    const [amount, setAmount] = useState(25);

    const { data } = useQuery({
        queryKey: ["rates", from],
        queryFn: () => currencyServices.fetchCurrency(from),
        staleTime: Infinity,
        select: ({ data } : any) => {
            return data
        },
        placeholderData: (previousData) => previousData
    });

    const converted = (data?.conversion_rates[to] * amount).toFixed(2);

    return { 
        amount, 
        from, 
        to,
        setFrom,
        setTo,
        setAmount,
        converted,
        data,
     }
}