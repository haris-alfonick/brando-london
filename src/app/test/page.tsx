// app/page.tsx (RSC in App Router)
import Head from "next/head";
import Image from "next/image";
import { fetchWooCommerceProducts } from "../../utils/wooCommerceApi";
import { Product } from "../../utils/wooCommerceTypes";
import { useState } from "react";

export default async function Home() {
  // Fetch data from WooCommerce
  const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return (
      <div>
        <main>
          <h1>Failed to load products</h1>
        </main>
      </div>
    );
  }

  const products: Product[] = wooCommerceProducts.data;

  console.log("--WooCommerce Products: ", products);

  return (
    <div>
      <Head>
        <title>Create Next App!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing{" "}
          <code>app/page.tsx</code>
        </p>
        
        <section>
          <h2>WooCommerce Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}