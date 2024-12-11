import { fetchWooCommerceProductBySlug } from "../../../utils/wooCommerceApi";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;

  // Fetch product data dynamically based on the slug
  const product = await fetchWooCommerceProductBySlug(slug).catch(() => null);

  // Fallback values if product is not found
  const metaTitle = product?.name || "Product Not Found";
  const metaDescription = product?.description?.replace(/<[^>]+>/g, '').substring(0, 160) || "Description not available";

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

interface Props {
  params: {
    slug: string; // Use slug instead of id
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  // Fetch product data dynamically based on the slug
  const product = await fetchWooCommerceProductBySlug(slug).catch(() => null);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      {/* Render the entire HTML description, including divs */}
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
      <p>Price: {product.price}</p>
    </div>
  );
}