import { useParams } from 'react-router-dom'
import TopBar from '../components/TopBar'
import ProductDetail from '../components/ProductDetail'
import PageFooter from '../components/PageFooter'
import { getProduct } from '../data/products'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProduct(slug)

  return (
    <>
      <TopBar active="products" />
      <ProductDetail slug={slug} />
      <PageFooter right={product?.name || slug} />
    </>
  )
}
