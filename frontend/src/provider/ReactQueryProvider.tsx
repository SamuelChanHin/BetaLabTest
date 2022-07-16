import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export interface ReactQueryProviderProps {}

export const ReactQueryProvider = ({
  children,
}: React.PropsWithChildren<ReactQueryProviderProps>) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
