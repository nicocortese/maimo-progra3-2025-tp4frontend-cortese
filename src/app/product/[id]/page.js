import ProductDetail from "@/components/ProductDetail";

export default function page({params}) {
  const { id } = params;
  return (
    <ProductDetail id={id} />
  )
}
