import { useEffect, useState } from 'react'

type ApiResponse = {
  updated_at: string
  data: {
    [key: string]: {
      name: string
      symbol: string
      price: string
      price_ETH: string
    }
  }
}

const api = 'http://localhost:3001/api/tokens'

const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        const res: ApiResponse = await response.json()

        setData(res)
      } catch (error) {
        setData(null)
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export default useGetPriceData
