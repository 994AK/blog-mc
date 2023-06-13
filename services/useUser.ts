import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const PATH = 'http://159.75.79.184:3000'


export function useUser(API: string, params?:any) {
    const { data, error, isLoading } = useSwr(`${PATH}/${API}`, fetcher, {...params})

    return {
        user: data,
        isLoading,
        isError: error,
    }
}
