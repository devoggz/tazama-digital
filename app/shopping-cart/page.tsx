"use client";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  Image,
  Divider,
  Input,
  addToast,
  Chip,
} from "@heroui/react";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Tag,
  Package,
  CreditCard,
} from "lucide-react";
import { useRouter } from "next/navigation";

type CartItem = {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
  quantity: number;
  category: string;
};

export default function ShoppingCartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = React.useState("");
  const [discount, setDiscount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  // Load cart from localStorage on mount
  React.useEffect(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Error parsing cart:", error);
      }
    }
    setIsLoading(false);
  }, []);

  // Save cart to localStorage whenever it changes
  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
      // Dispatch event to update navbar cart count
      window.dispatchEvent(new Event("cartUpdated"));
    }
  }, [cartItems, isLoading]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    addToast({
      title: "Item Removed",
      description: "Product has been removed from your cart",
      color: "default",
    });
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setDiscount(0.1); // 10% discount
      addToast({
        title: "Promo Applied! 🎉",
        description: "You saved 10% on your order",
        color: "success",
      });
    } else if (promoCode.toUpperCase() === "FIRST20") {
      setDiscount(0.2); // 20% discount
      addToast({
        title: "Promo Applied! 🎉",
        description: "You saved 20% on your order",
        color: "success",
      });
    } else {
      addToast({
        title: "Invalid Code",
        description: "Please enter a valid promo code",
        color: "danger",
      });
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = subtotal * discount;
  const shipping = subtotal > 5000 ? 0 : 300; // Free shipping over 5000
  const total = subtotal - discountAmount + shipping;

  const handleCheckout = () => {
    const orderData = {
      items: cartItems,
      subtotal,
      discount: discountAmount,
      shipping,
      total,
    };

    sessionStorage.setItem("cartOrderData", JSON.stringify(orderData));
    router.push("/payment");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart
            size={48}
            className="mx-auto text-zinc-300 mb-4 animate-pulse"
          />
          <p className="text-zinc-600">Loading cart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 py-6 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Hero Header */}
        <Card className="overflow-hidden border-0 shadow-xl">
          <div className="h-32 md:h-40  relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTEwIDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          </div>
          <CardBody className="-mt-16 md:-mt-20 pb-6 md:pb-10 px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6">
              <div className="p-6 md:p-8 bg-white rounded-2xl shadow-xl ring-4 ring-danger-100">
                <ShoppingCart className="text-danger-600" size={48} />
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                  Shopping Cart
                </h1>
                <p className="text-sm md:text-base text-zinc-600 mt-2">
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"}{" "}
                  in your cart
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <Card className="shadow-xl border border-zinc-200">
            <CardBody className="p-12 text-center">
              <ShoppingCart size={64} className="mx-auto text-zinc-300 mb-4" />
              <h3 className="text-2xl font-bold text-zinc-800 mb-2">
                Your cart is empty
              </h3>
              <p className="text-zinc-600 mb-6">
                Add some products to get started
              </p>
              <Button
                color="danger"
                size="lg"
                radius="full"
                onPress={() => router.push("/")}
              >
                Browse Products
              </Button>
            </CardBody>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <Card className="shadow-xl border border-zinc-200">
                <CardBody className="p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-6">
                    Cart Items
                  </h2>

                  <div className="space-y-4">
                    {cartItems.map((item, index) => (
                      <React.Fragment key={item.id}>
                        <div className="flex gap-4">
                          {/* Product Image */}
                          <div className="shrink-0">
                            <Image
                              src={item.img}
                              alt={item.title}
                              className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg"
                            />
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start gap-2 mb-2">
                                <div>
                                  <h3 className="font-bold text-base text-zinc-900">
                                    {item.title}
                                  </h3>
                                  <Chip
                                    size="sm"
                                    variant="flat"
                                    color="default"
                                    className="mt-1"
                                  >
                                    {item.category}
                                  </Chip>
                                </div>
                                <Button
                                  isIconOnly
                                  variant="light"
                                  color="danger"
                                  size="sm"
                                  onPress={() => removeItem(item.id)}
                                >
                                  <Trash2 size={18} />
                                </Button>
                              </div>
                              <p className="text-sm text-zinc-600 line-clamp-2">
                                {item.description}
                              </p>
                            </div>

                            {/* Quantity Controls & Price */}
                            <div className="flex justify-between items-center mt-3">
                              <div className="flex items-center gap-2">
                                <Button
                                  isIconOnly
                                  size="sm"
                                  variant="bordered"
                                  onPress={() => updateQuantity(item.id, -1)}
                                  isDisabled={item.quantity === 1}
                                >
                                  <Minus size={14} />
                                </Button>
                                <span className="w-12 text-center font-semibold">
                                  {item.quantity}
                                </span>
                                <Button
                                  isIconOnly
                                  size="sm"
                                  variant="bordered"
                                  onPress={() => updateQuantity(item.id, 1)}
                                >
                                  <Plus size={14} />
                                </Button>
                              </div>
                              <p className="text-lg font-bold text-danger-600">
                                KES{" "}
                                {(item.price * item.quantity).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                        {index < cartItems.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </div>
                </CardBody>
              </Card>

              {/* Promo Code */}
              <Card className="shadow-lg border border-zinc-200">
                <CardBody className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag size={20} className="text-danger-600" />
                    <h3 className="font-bold text-lg">Have a promo code?</h3>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      variant="bordered"
                      radius="lg"
                      size="lg"
                      className="flex-1"
                    />
                    <Button
                      color="danger"
                      variant="bordered"
                      size="lg"
                      radius="lg"
                      onPress={applyPromoCode}
                    >
                      Apply
                    </Button>
                  </div>
                  <div className="mt-3 text-sm text-zinc-600">
                    Try:{" "}
                    <code className="bg-zinc-100 px-2 py-1 rounded">
                      SAVE10
                    </code>{" "}
                    or{" "}
                    <code className="bg-zinc-100 px-2 py-1 rounded">
                      FIRST20
                    </code>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="shadow-xl border border-zinc-200 sticky top-6">
                <CardBody className="p-6 space-y-6">
                  <h2 className="text-xl md:text-2xl font-bold">
                    Order Summary
                  </h2>

                  <div className="space-y-3">
                    <div className="flex justify-between text-zinc-700">
                      <span>Subtotal</span>
                      <span className="font-semibold">
                        KES {subtotal.toLocaleString()}
                      </span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-success-600">
                        <span>Discount ({(discount * 100).toFixed(0)}%)</span>
                        <span className="font-semibold">
                          -KES {discountAmount.toLocaleString()}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between text-zinc-700">
                      <span className="flex items-center gap-2">
                        <Package size={16} />
                        Shipping
                      </span>
                      <span className="font-semibold">
                        {shipping === 0 ? (
                          <span className="text-success-600">FREE</span>
                        ) : (
                          `KES ${shipping}`
                        )}
                      </span>
                    </div>

                    {subtotal < 5000 && shipping > 0 && (
                      <p className="text-xs text-zinc-500 bg-zinc-50 p-2 rounded">
                        💡 Add KES {(5000 - subtotal).toLocaleString()} more for
                        free shipping
                      </p>
                    )}
                  </div>

                  <Divider />

                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-2xl font-bold text-danger-600">
                      KES {total.toLocaleString()}
                    </span>
                  </div>

                  <Button
                    color="danger"
                    size="lg"
                    radius="full"
                    fullWidth
                    endContent={<ArrowRight size={20} />}
                    className="shadow-lg"
                    onPress={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>

                  <div className="space-y-2 pt-4 border-t border-zinc-200">
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <CreditCard size={16} />
                      <span>Secure payment processing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <Package size={16} />
                      <span>Fast delivery nationwide</span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
