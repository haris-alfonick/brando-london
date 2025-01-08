import Head from "next/head";
import { fetchWooCommerceProducts } from "../../utils/wooCommerceApi";
import { Product } from "../../utils/wooCommerceTypes";
import PriceFilter from "../components/shop/sidebar/PriceFilter";

export default async function Home({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  // Await the searchParams before accessing its values
  const resolvedSearchParams = await searchParams;

  const filters = {
    min_price: resolvedSearchParams.min_price || "",
    max_price: resolvedSearchParams.max_price || "",
    per_page: 10,
    page: 1,
  };

  // Fetch data from WooCommerce
  const wooCommerceProducts = await fetchWooCommerceProducts(filters).catch((error) => {
    console.error("Error fetching WooCommerce products:", error);
    return null;
  });

  if (!wooCommerceProducts) {
    return (
      <div>
        <main>
          <h1>Failed to load products</h1>
        </main>
      </div>
    );
  }

  const { products } = wooCommerceProducts;

  return (
    <div>
      <Head>
        <title>Create Next App!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-4 bg-blue-500 text-white">
        This is a server component with Tailwind styling.
      </div>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing <code>app/page.tsx</code>
        </p>

        <section>
          <h2>WooCommerce Products</h2>
          <ul>
            {products.map((product: Product) => (
              <li key={product.id}>{product.price}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
