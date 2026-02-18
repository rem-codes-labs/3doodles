import {
  AppBar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useMemo, useState } from "react";
import { Link as RouterLink, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { products, sampleImportCsv, sampleImportJson } from "./data/products";
import { blogPosts } from "./data/blog";
import { useCart } from "./store/cart";
import { tokens } from "./theme";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Blog", to: "/blog" },
  { label: "Admin", to: "/admin" },
  { label: "Visit", to: "/visit" },
];

function Layout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { items } = useCart();

  const drawer = useMemo(
    () => (
      <Box sx={{ p: 3 }} role="presentation" onClick={() => setDrawerOpen(false)}>
        <Stack spacing={2}>
          {navItems.map((item) => (
            <Link key={item.label} component={RouterLink} to={item.to} underline="none">
              <Typography variant="h6">{item.label}</Typography>
            </Link>
          ))}
        </Stack>
      </Box>
    ),
    []
  );

  return (
    <Box>
      <AppBar position="sticky" elevation={0} sx={{ background: tokens.sand }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography component={RouterLink} to="/" variant="h6" sx={{ fontWeight: 700 }}>
            3doodles
          </Typography>
          <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Link key={item.label} component={RouterLink} to={item.to} underline="none">
                <Typography variant="body1">{item.label}</Typography>
              </Link>
            ))}
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton component={RouterLink} to="/cart" aria-label="cart">
              <Badge badgeContent={items.length} color="secondary">
                <ShoppingBagIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="open navigation"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {drawer}
      </Drawer>
      {children}
      <Divider />
      <Box sx={{ background: "#fff", py: 4 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} justifyContent="space-between">
            <Box>
              <Typography variant="h6" gutterBottom>
                3doodles
              </Typography>
              <Typography variant="body2">Luxury 3D-printed decor, personalized for you.</Typography>
            </Box>
            <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap" }}>
              {navItems.map((item) => (
                <Link key={item.label} component={RouterLink} to={item.to} underline="hover">
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Stack>
          <Typography variant="caption" display="block" sx={{ mt: 3 }}>
            © 2026 3doodles. Branding and photography placeholders.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          minHeight: { xs: 520, md: 620 },
          color: "white",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(rgba(20,19,24,0.6), rgba(20,19,24,0.6)), url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1800&q=80&fm=webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} sx={{ maxWidth: 620 }}>
            <Typography variant="h1">Design-forward 3D prints, tailored to you.</Typography>
            <Typography variant="h6" sx={{ fontWeight: 400 }}>
              Explore customizable decor with color, material, and size variants. Every piece is
              printed to order in the EU and shipped in low-impact packaging.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button variant="contained" color="primary" component={RouterLink} to="/shop">
                Shop the collection
              </Button>
              <Button variant="outlined" color="inherit" component={RouterLink} to="/visit">
                Book a studio visit
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={6}>
          <Box>
            <Typography variant="h2" gutterBottom>
              Why 3doodles
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 760 }}>
              3doodles is a premium design studio creating sculptural decor with eco-forward
              materials. Each piece is printed in small batches and finished by hand, with options
              for personalization and custom color matching.
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {[
                "Made-to-order with color, material, and size variants",
                "EU-based printing for fast delivery and smaller footprint",
                "Personalization options for gifts and brand collaborations",
                "Sustainable materials and minimal waste production",
              ].map((item) => (
                <Grid item xs={12} md={6} key={item}>
                  <Box sx={{ p: 2, borderRadius: 3, background: "rgba(242,166,90,0.15)" }}>
                    <Typography fontWeight={600}>{item}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="baseline">
              <Typography variant="h2">Featured pieces</Typography>
              <Typography variant="body1" color="text.secondary">
                Customizable by color, material, and size
              </Typography>
            </Stack>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              {products.slice(0, 3).map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={product.images[0]}
                      alt={product.name}
                      loading="lazy"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h3" gutterBottom>
                        {product.name}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {product.description}
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip label={`€${product.price}`} sx={{ background: tokens.clay }} />
                        <Chip label={`${product.leadTimeDays} day lead`} variant="outlined" />
                      </Stack>
                      <Button
                        component={RouterLink}
                        to={`/shop/${product.id}`}
                        variant="text"
                        sx={{ mt: 2 }}
                      >
                        View details
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function ShopPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h2">Shop</Typography>
          <Typography variant="body1" color="text.secondary">
            Explore the full collection. Choose colors, materials, and sizes at checkout.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={product.images[0]}
                  alt={product.name}
                  loading="lazy"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h3" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Chip label={`€${product.price}`} sx={{ background: tokens.clay }} />
                    <Chip label={`Stock ${product.stock}`} variant="outlined" />
                  </Stack>
                  <Button
                    component={RouterLink}
                    to={`/shop/${product.id}`}
                    variant="contained"
                    sx={{ mt: 2 }}
                  >
                    Customize
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id) ?? products[0];
  const { addItem } = useCart();
  const navigate = useNavigate();

  const [color, setColor] = useState(product.colors[0]);
  const [material, setMaterial] = useState(product.materials[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [personalization, setPersonalization] = useState("");

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="420"
              image={product.images[0]}
              alt={product.name}
              loading="lazy"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Typography variant="h2">{product.name}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="h3">€{product.price}</Typography>
            <Stack spacing={1}>
              <Typography fontWeight={600}>Color</Typography>
              <Select value={color} onChange={(event) => setColor(event.target.value)}>
                {product.colors.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
            <Stack spacing={1}>
              <Typography fontWeight={600}>Material</Typography>
              <Select value={material} onChange={(event) => setMaterial(event.target.value)}>
                {product.materials.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
            <Stack spacing={1}>
              <Typography fontWeight={600}>Size</Typography>
              <Select value={size} onChange={(event) => setSize(event.target.value)}>
                {product.sizes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
            <Stack spacing={1}>
              <Typography fontWeight={600}>Personalization</Typography>
              <TextField
                placeholder="Add a note, monogram, or custom request"
                value={personalization}
                onChange={(event) => setPersonalization(event.target.value)}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                onClick={() => {
                  addItem({ product, quantity: 1, color, material, size, personalization });
                  navigate("/cart");
                }}
              >
                Add to cart
              </Button>
              <Button variant="outlined" component={RouterLink} to="/checkout">
                Buy now
              </Button>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              Lead time: {product.leadTimeDays} days · Stock: {product.stock}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const [country, setCountry] = useState("Netherlands");
  const [postal, setPostal] = useState("");

  const shipping = useMemo(() => {
    const weightFactor = items.length * 2.5;
    const base = country === "Netherlands" ? 6 : 14;
    return items.length === 0 ? 0 : Math.round((base + weightFactor) * 100) / 100;
  }, [items.length, country]);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={4}>
        <Typography variant="h2">Your cart</Typography>
        {items.length === 0 ? (
          <Typography variant="body1">Your cart is empty.</Typography>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Stack spacing={3}>
                {items.map((item) => (
                  <Card key={item.id} sx={{ p: 2 }}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                      <CardMedia
                        component="img"
                        image={item.product.images[0]}
                        alt={item.product.name}
                        sx={{ width: 140, borderRadius: 2 }}
                      />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h3">{item.product.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.color} · {item.material} · {item.size}
                        </Typography>
                        {item.personalization && (
                          <Typography variant="body2">Note: {item.personalization}</Typography>
                        )}
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
                          <TextField
                            type="number"
                            label="Qty"
                            value={item.quantity}
                            onChange={(event) =>
                              updateQuantity(item.id, Number(event.target.value) || 1)
                            }
                            sx={{ width: 100 }}
                          />
                          <Typography fontWeight={600}>€{item.product.price}</Typography>
                          <Button color="secondary" onClick={() => removeItem(item.id)}>
                            Remove
                          </Button>
                        </Stack>
                      </Box>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Stack spacing={2}>
                  <Typography variant="h3">Order summary</Typography>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Subtotal</Typography>
                    <Typography>€{subtotal.toFixed(2)}</Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography fontWeight={600}>Shipping calculator</Typography>
                    <TextField
                      label="Country"
                      value={country}
                      onChange={(event) => setCountry(event.target.value)}
                    />
                    <TextField
                      label="Postal code"
                      value={postal}
                      onChange={(event) => setPostal(event.target.value)}
                    />
                    <Typography variant="caption" color="text.secondary">
                      Estimated shipping: €{shipping.toFixed(2)}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight={600}>Total</Typography>
                    <Typography fontWeight={600}>€{(subtotal + shipping).toFixed(2)}</Typography>
                  </Stack>
                  <Button variant="contained" component={RouterLink} to="/checkout">
                    Proceed to checkout
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        )}
      </Stack>
    </Container>
  );
}

function CheckoutPage() {
  const { subtotal } = useCart();
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={3}>
        <Typography variant="h2">Checkout</Typography>
        <Typography variant="body1">
          Stripe checkout (EUR) is integrated in production. This demo shows the fields you would
          collect before redirecting to Stripe.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Full name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Shipping address" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="City" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Postal code" fullWidth />
          </Grid>
        </Grid>
        <Card sx={{ p: 3 }}>
          <Stack spacing={1}>
            <Typography variant="h3">Total due</Typography>
            <Typography variant="h2">€{subtotal.toFixed(2)}</Typography>
            <Typography variant="body2" color="text.secondary">
              Taxes and shipping calculated at Stripe.
            </Typography>
            <Button variant="contained">Pay with Stripe</Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}

function AdminPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h2">Admin</Typography>
          <Typography variant="body1" color="text.secondary">
            Inventory, product variants, and order workflow placeholders. Connect to your backend
            for live data.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} md={6} key={product.id}>
              <Card sx={{ p: 3 }}>
                <Stack spacing={1}>
                  <Typography variant="h3">{product.name}</Typography>
                  <Typography variant="body2">Stock: {product.stock}</Typography>
                  <Typography variant="body2">Lead time: {product.leadTimeDays} days</Typography>
                  <Button variant="outlined" size="small">
                    Update inventory
                  </Button>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Card sx={{ p: 3 }}>
          <Typography variant="h3" gutterBottom>
            Sample product import
          </Typography>
          <Typography variant="body2" gutterBottom>
            CSV format
          </Typography>
          <Box
            component="pre"
            sx={{ background: "#f5f5f5", p: 2, borderRadius: 2, overflowX: "auto" }}
          >
            {sampleImportCsv}
          </Box>
          <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
            JSON format
          </Typography>
          <Box
            component="pre"
            sx={{ background: "#f5f5f5", p: 2, borderRadius: 2, overflowX: "auto" }}
          >
            {JSON.stringify(sampleImportJson, null, 2)}
          </Box>
        </Card>
      </Stack>
    </Container>
  );
}

function BlogPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={3}>
        <Typography variant="h2">Journal</Typography>
        <Grid container spacing={3}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={4} key={post.slug}>
              <Card sx={{ p: 3, height: "100%" }}>
                <Typography variant="h3">{post.title}</Typography>
                <Typography variant="body2" sx={{ my: 1 }}>
                  {post.excerpt}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {post.date} · {post.readingTime}
                </Typography>
                <Button component={RouterLink} to={`/blog/${post.slug}`} sx={{ mt: 2 }}>
                  Read more
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug) ?? blogPosts[0];
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={2}>
        <Typography variant="h2">{post.title}</Typography>
        <Typography variant="caption" color="text.secondary">
          {post.date} · {post.readingTime}
        </Typography>
        <Typography variant="body1">
          Placeholder content for the 3doodles journal. Replace this with your editorial story,
          photography, and SEO-focused headings.
        </Typography>
      </Stack>
    </Container>
  );
}

function VisitPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={4}>
        <Typography variant="h2">Visit & Contact</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={1}>
                <Typography variant="h3">Studio hours</Typography>
                <Typography>Mon–Fri · 10:00–18:00</Typography>
                <Typography>Sat · 11:00–16:00</Typography>
                <Typography>By appointment only</Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={1}>
                <Typography variant="h3">Contact</Typography>
                <Typography>hello@3doodles.studio</Typography>
                <Typography>+31 (0)20 555 0199</Typography>
                <Typography>Herengracht 45, Amsterdam</Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>
        <Card>
          <CardMedia
            component="img"
            height="320"
            image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80&fm=webp"
            alt="Map placeholder for 3doodles studio"
            loading="lazy"
          />
        </Card>
      </Stack>
    </Container>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/visit" element={<VisitPage />} />
      </Routes>
    </Layout>
  );
}
