import { createContext, useContext, useMemo, useState } from "react";
import { Product } from "../data/products";

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
  color: string;
  material: string;
  size: string;
  personalization?: string;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id">) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Omit<CartItem, "id">) => {
    const id = `${item.product.id}-${item.color}-${item.material}-${item.size}-${item.personalization ?? ""}`;
    setItems((prev) => {
      const existing = prev.find((entry) => entry.id === id);
      if (existing) {
        return prev.map((entry) =>
          entry.id === id ? { ...entry, quantity: entry.quantity + item.quantity } : entry
        );
      }
      return [...prev, { ...item, id }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((entry) => (entry.id === id ? { ...entry, quantity } : entry))
        .filter((entry) => entry.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((entry) => entry.id !== id));
  };

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, addItem, updateQuantity, removeItem, subtotal }),
    [items, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
