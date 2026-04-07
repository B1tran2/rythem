import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingBag, Minus, Plus, SlidersHorizontal } from 'lucide-react';

const products = [
  {
    id: 'origin-tee',
    name: 'RYTHEM Origin Tee',
    price: 55,
    status: 'First Drop',
    category: 'Tees',
    real: true,
    description: 'Founding silhouette. Clean cut, bold pulse print, made to be felt.',
  },
  {
    id: 'locked-oversized-tee',
    name: 'Oversized Tee',
    price: 62,
    status: 'Locked Drop',
    category: 'Tees',
    description: 'Boxy shape with graffiti-line embroidery, currently in vault preview.',
  },
  {
    id: 'spray-hoodie',
    name: 'Spray Hoodie',
    price: 95,
    status: 'Prototype',
    category: 'Hoodies',
    description: 'Heavyweight fleece with layered spray gradients and rhythmic stitch paths.',
  },
  {
    id: 'metro-shell',
    name: 'Metro Shell Jacket',
    price: 140,
    status: 'Concept Piece',
    category: 'Outerwear',
    description: 'Reflective shell with movement mapping seams and tonal urban camo textures.',
  },
  {
    id: 'echo-cargo',
    name: 'Echo Cargo Pants',
    price: 112,
    status: 'Archive Preview',
    category: 'Concepts',
    description: 'Multi-pocket utility fit with trailing line graphics inspired by long exposure.',
  },
  {
    id: 'beat-cap',
    name: 'Beat Cap',
    price: 40,
    status: 'Coming Soon',
    category: 'Accessories',
    description: 'Low-profile cap with metronome insignia and adjustable rhythm strap.',
  },
];

const sections = ['Home', 'Catalogue', 'Cart', 'About Us'];
const filters = ['All', 'Tees', 'Hoodies', 'Outerwear', 'Accessories', 'Concepts'];

function Metronome() {
  return (
    <div className="relative h-20 w-14 rounded-b-3xl border border-zinc-900/80 bg-white/90 shadow-xl">
      <motion.div
        animate={{ rotate: [22, -22, 22] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-3 left-1/2 h-14 w-[2px] -translate-x-1/2 origin-bottom bg-zinc-900"
      >
        <div className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-500" />
      </motion.div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [devMode, setDevMode] = useState(true);
  const [cart, setCart] = useState({});
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProducts = useMemo(
    () => products.filter((p) => activeFilter === 'All' || p.category === activeFilter),
    [activeFilter],
  );

  const addToCart = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const subtractFromCart = (id) =>
    setCart((c) => {
      const next = { ...c };
      if (!next[id]) return next;
      if (next[id] === 1) {
        delete next[id];
      } else {
        next[id] -= 1;
      }
      return next;
    });

  const cartItems = Object.entries(cart)
    .map(([id, quantity]) => ({ ...products.find((p) => p.id === id), quantity }))
    .filter(Boolean);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="pointer-events-none fixed inset-0 bg-grid bg-[size:40px_40px] opacity-30" />
      <div className="fixed left-1/2 top-4 z-50 w-[min(960px,94%)] -translate-x-1/2 rounded-full border border-zinc-900/10 bg-white/90 px-3 py-2 shadow-lg backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`rounded-full px-4 py-1.5 text-sm transition ${
                  activeSection === section
                    ? 'bg-zinc-900 text-white'
                    : 'bg-zinc-900/5 text-zinc-700 hover:bg-zinc-900/10'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <button
            onClick={() => setDevMode((v) => !v)}
            className="group relative inline-flex items-center gap-2 rounded-full border border-zinc-900/20 bg-white px-2 py-1"
          >
            <span className="text-xs font-semibold">{devMode ? 'Developer POV' : 'Client POV'}</span>
            <span className={`h-5 w-10 rounded-full p-0.5 ${devMode ? 'bg-orange-400' : 'bg-zinc-300'}`}>
              <motion.span
                layout
                className="block h-4 w-4 rounded-full bg-white shadow"
                animate={{ x: devMode ? 20 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </span>
          </button>
        </div>
      </div>

      <section className="mx-auto w-[min(1200px,92%)] pt-28">
        <AnimatePresence mode="wait">
          {activeSection === 'Home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="space-y-12"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-zinc-900/10 bg-white p-8 shadow-2xl md:p-12">
                <motion.div
                  className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-orange-400/30 blur-3xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <div className="grid gap-8 md:grid-cols-[1.2fr_auto] md:items-end">
                  <div>
                    <p className="mb-3 inline-block rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
                      Streetwear with pulse
                    </p>
                    <h1 className="text-5xl font-black uppercase leading-[0.9] md:text-8xl">RYTHEM</h1>
                    <p className="mt-4 max-w-xl text-lg text-zinc-700">Whatever you do, do it with rhythm.</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <button
                        onClick={() => setActiveSection('Catalogue')}
                        className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                      >
                        Explore the Drop
                      </button>
                      <button className="rounded-full border border-zinc-900/20 bg-white px-6 py-3 text-sm font-semibold transition hover:bg-zinc-100">
                        Enter the Rhythm
                      </button>
                    </div>
                  </div>
                  <Metronome />
                </div>
                <div className="mt-10 grid gap-3 text-sm text-zinc-600 md:grid-cols-3">
                  {['Built for movement', 'From beat to street', 'Made to be felt'].map((line) => (
                    <motion.div
                      key={line}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-zinc-900/10 bg-zinc-50 p-4"
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-3xl border border-zinc-900/10 bg-white p-6 md:col-span-2">
                  <h2 className="text-2xl font-bold uppercase">Featured Drop — Origin Pulse</h2>
                  <p className="mt-3 text-zinc-600">
                    A foundation piece with tempo graphics and clean architecture. Start with one shirt, build the world around its rhythm.
                  </p>
                  <div className="mt-5 h-52 rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50 p-4 text-sm text-zinc-500">
                    {/* Replace this panel with the real RYTHEM Origin Tee photo spotlight image. */}
                    Origin Tee spotlight image placeholder.
                  </div>
                </div>
                <div className="rounded-3xl border border-zinc-900/10 bg-zinc-900 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-300">Motion in Fabric</p>
                  <p className="mt-2 text-sm text-zinc-300">Prototype silhouettes, future drop outlines, and locked pieces shape the RYTHEM universe.</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'Catalogue' && (
            <motion.div
              key="catalogue"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="space-y-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-4xl font-black uppercase md:text-6xl">Drop Catalogue</h2>
                <div className="flex items-center gap-2 rounded-full border border-zinc-900/20 bg-white px-4 py-2 text-sm">
                  <SlidersHorizontal className="h-4 w-4" />
                  Sort: Most Rhythmic
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                      activeFilter === f ? 'bg-zinc-900 text-white' : 'bg-white border border-zinc-900/15 hover:bg-zinc-100'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {visibleProducts.map((product) => (
                  <motion.article
                    key={product.id}
                    whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                    className="group relative overflow-hidden rounded-3xl border border-zinc-900/10 bg-white p-5 shadow-sm"
                  >
                    <div className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                      {product.status}
                    </div>
                    <div className="mb-4 h-48 rounded-2xl bg-gradient-to-br from-zinc-100 via-white to-zinc-200 p-4">
                      {product.real ? (
                        <div className="flex h-full items-center justify-center rounded-xl border-2 border-dashed border-zinc-400 text-center text-xs text-zinc-600">
                          {/* Replace this box with your real T-shirt image element/src when available. */}
                          Replace with real shirt image here
                        </div>
                      ) : (
                        <div className="h-full rounded-xl border border-zinc-900/10 bg-[radial-gradient(circle_at_30%_20%,#f97316_0%,transparent_40%),linear-gradient(120deg,#fafafa,#e4e4e7)]" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="mt-2 text-sm text-zinc-600">{product.description}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-lg font-semibold">£{product.price}</span>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase text-white transition hover:-translate-y-0.5"
                      >
                        Add to cart
                      </button>
                    </div>
                    {devMode && product.real && (
                      <p className="mt-3 rounded-xl border border-orange-300 bg-orange-50 p-2 text-[11px] text-orange-700">
                        DEV NOTE: swap placeholder with the real tee photo in product card + spotlight section.
                      </p>
                    )}
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'Cart' && (
            <motion.div
              key="cart"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="rounded-3xl border border-zinc-900/10 bg-white p-6 md:p-8"
            >
              <h2 className="text-4xl font-black uppercase">Cart</h2>
              {cartItems.length === 0 ? (
                <div className="mt-6 rounded-2xl border border-dashed border-zinc-300 p-8 text-center text-zinc-500">
                  Your rhythm bag is empty. Add a piece from the drop.
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between rounded-2xl bg-zinc-50 p-4">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-zinc-500">£{item.price} each</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="rounded-full bg-white p-2" onClick={() => subtractFromCart(item.id)}>
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button className="rounded-full bg-white p-2" onClick={() => addToCart(item.id)}>
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="rounded-2xl bg-zinc-900 p-5 text-white">
                    <div className="flex items-center justify-between text-sm text-zinc-300">
                      <span>Demo subtotal</span>
                      <span>£{total}</span>
                    </div>
                    <button className="mt-4 w-full rounded-xl bg-white py-3 text-sm font-bold text-zinc-900">
                      Showcase Checkout (Disabled)
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeSection === 'About Us' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-black uppercase md:text-6xl">About RYTHEM</h2>
              <div className="grid gap-5 md:grid-cols-2">
                <article className="rounded-3xl border border-zinc-900/10 bg-white p-6">
                  <h3 className="text-2xl font-bold">From beat to street</h3>
                  <p className="mt-3 text-zinc-700">
                    RYTHEM is a movement-first streetwear concept from England. We design clothing like choreography—layers, pause, impact, repeat.
                  </p>
                </article>
                <article className="rounded-3xl border border-zinc-900/10 bg-zinc-900 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-300">Manifesto</p>
                  <blockquote className="mt-3 text-xl font-semibold">“Your rhythm, your uniform.”</blockquote>
                </article>
              </div>
              <div className="rounded-3xl border border-zinc-900/10 bg-white p-6">
                <h3 className="text-2xl font-bold">Why the metronome?</h3>
                <p className="mt-2 text-zinc-700">
                  The metronome is our symbol of discipline and expression. It marks time, then you break it. Fashion should do the same.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveSection('Cart')}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-2xl"
      >
        <ShoppingBag className="h-4 w-4" />
        Cart {cartItems.length > 0 && `(${cartItems.length})`}
      </motion.button>
    </main>
  );
}

export default App;
