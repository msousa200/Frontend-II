const API_URL = "https://67b8d8c9699a8a7baef57ad0.mockapi.io/api";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
};

export const addProduct = async (
  product: Omit<Product, "id" | "createdAt">
): Promise<Product> => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error(`Failed to create product: ${response.status}`);
  }

  return response.json();
};

