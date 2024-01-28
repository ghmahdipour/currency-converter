import { useQuery } from "@tanstack/react-query";
import  chartServices  from "@services/chart.services"

export const useChart = () => {
    const { data } = useQuery({
        queryKey: ["chart"],
        queryFn: () => chartServices.fetchChartData(),
        staleTime: 5 * 1000,
        select: ({ data }) => {
            const _temp: any[] = [];
            data.forEach((item: any, index: number) => {
                _temp.push({
                    category: `${item.category}${index}`,
                    price: item.price
                });
            });
            return _temp
        },
        refetchInterval: 60000
    });
    return { data }
}