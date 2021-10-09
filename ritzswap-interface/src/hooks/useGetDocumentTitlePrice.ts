import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { NGT } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()
  console.log(priceData)
  const cakePriceUsd = priceData ? parseFloat(priceData.data[NGT.address].price) : 0

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `Nightmare Finance${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
