'use client'

import {PropsWithChildren, useEffect, useState} from "react";
import {ThemeProvider} from "next-themes";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const Providers = ({children}: PropsWithChildren) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                // defaultOptions: {
                //     queries: {
                //         // With SSR, we usually want to set some default staleTime
                //         // above 0 to avoid refetching immediately on the client
                //         staleTime: 60 * 1000,
                //     },
                // },
            }),
    )


    return (
        <ThemeProvider enableSystem defaultTheme={"system"} attribute={"class"}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default Providers;