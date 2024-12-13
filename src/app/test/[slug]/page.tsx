import { fetchWooCommerceProductBySlug } from "../../../utils/wooCommerceApi";
import { Metadata } from 'next';
import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';

// Set up DOMPurify for SSR
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;

  // Fetch product data
  const product = await fetchWooCommerceProductBySlug(slug).catch(() => null);

  // Fallback values
  const metaTitle = product?.yoast_head_json.title || "Product Not Found";
  const metaDescription = product?.yoast_head_json.og_description
    ? stripHtmlTags(product.yoast_head_json.og_description)
    : "Description not available";

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

// Utility functions
function stripHtmlTags(input: string): string {
  return input.replace(/<[^>]+>/g, '');
}

function truncateText(input: string, maxLength: number): string {
  if (input.length <= maxLength) return input;
  return input.slice(0, maxLength).trimEnd() + '...';
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  // Fetch product data
  const product = await fetchWooCommerceProductBySlug(slug).catch(() => null);
  console.log(product)

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      {/* Render sanitized HTML */}
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }} />
      <p>Price: {product.price}</p>
    </div>
  );
}