import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/useCart';

const Cart = () => {
  const { items, updateQuantity, removeItem, clearCart, total } = useCart();

  const deliveryFee = total > 199 ? 0 : 40;
  const gst = Math.round(total * 0.05);
  const finalTotal = total + deliveryFee + gst;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center space-y-6">
          <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto" />
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Your cart is empty
            </h1>
            <p className="text-muted-foreground mb-6">
              Add some delicious food items to get started
            </p>
            <Link to="/restaurants">
              <Button className="bg-gradient-himalayan hover:bg-gradient-himalayan/90">
                Browse Restaurants
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Cart</h1>
          <p className="text-muted-foreground">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        {item.isVeg ? (
                          <div className="w-3 h-3 border border-success flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-success rounded-full" />
                          </div>
                        ) : (
                          <div className="w-3 h-3 border border-destructive flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-destructive rounded-full" />
                          </div>
                        )}
                        <span className="text-sm font-medium">₹{item.price}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2 bg-muted rounded-lg p-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold text-foreground">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-card sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{total}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? (
                      <span className="text-success">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST (5%)</span>
                  <span className="font-medium">₹{gst}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">₹{finalTotal}</span>
                </div>
                
                {deliveryFee > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Add ₹{199 - total} more for free delivery
                  </p>
                )}
                
                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-gradient-himalayan hover:bg-gradient-himalayan/90" size="lg">
                    Proceed to Checkout
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="w-full"
                  >
                    Clear Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;