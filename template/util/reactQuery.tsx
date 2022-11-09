import React, {useState} from 'react'
import axios from './AxiosInstance'
import {QueryCache, QueryClient, QueryClientProvider} from 'react-query'
import type {QueryFunction, DefaultOptions} from 'react-query'

// Define a default query function that will receive the query key
// the queryKey is guaranteed to be an Array here
const defaultQueryFn: QueryFunction = async ({queryKey}) => {
  const path = typeof queryKey === 'string' ? queryKey : queryKey.join('/')
  return await axios.get(path)
}

export const buildQueryClient = (defaultOptions: DefaultOptions) => {
  const queryCache = new QueryCache()
  return new QueryClient({
    queryCache: queryCache,
    defaultOptions: {
      ...defaultOptions,
      queries: {
        staleTime: 0,
        cacheTime: 5 * 60 * 1000,
        queryFn: defaultQueryFn,
        retry: false,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        retryOnMount: false,
        ...defaultOptions?.queries,
      },
    },
  })
}

interface ReactQueryProviderProps {
  children: React.ReactNode
  queryClientOptions: DefaultOptions
}

const ReactQueryProvider = ({children, queryClientOptions}: ReactQueryProviderProps) => {
  const [queryClient] = useState(buildQueryClient(queryClientOptions))
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
