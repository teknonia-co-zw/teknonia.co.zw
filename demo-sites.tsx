import { Calendar, MapPin, ArrowRight, ShoppingCart } from "lucide-react"

export const DEMO_SITES = [
  {
    id: "lodge",
    name: "Kariba Safari Lodge",
    category: "Lodges",
    tagline: "Booking conversions ↑ 34%",
    description:
      "A serene booking experience connecting tourists to the wild. Features availability calendar and Ecocash integration.",
    image: "/luxury-african-safari-lodge-lake-kariba-zimbabwe.jpg",
    pages: [
      {
        title: "Home",
        content: (
          <div className="bg-stone-100 min-h-full font-serif text-stone-800">
            <div className="h-48 bg-gradient-to-b from-stone-800 to-stone-700 flex items-center justify-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 text-center px-4">
                <h2 className="text-2xl font-light tracking-widest">KARIBA SAFARI</h2>
                <p className="mt-2 text-xs italic">Wilderness Refined</p>
                <button className="mt-4 px-5 py-2 bg-amber-700 text-white text-xs tracking-widest hover:bg-amber-800 transition">
                  BOOK YOUR STAY
                </button>
              </div>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3 max-w-sm mx-auto -mt-6 relative z-20">
              <div className="bg-white p-3 shadow-sm text-center rounded">
                <Calendar className="w-5 h-5 mx-auto text-amber-700 mb-1" />
                <h3 className="text-[10px] font-bold">CHECK IN</h3>
                <p className="text-[10px] text-gray-500">Select Dates</p>
              </div>
              <div className="bg-white p-3 shadow-sm text-center rounded">
                <MapPin className="w-5 h-5 mx-auto text-amber-700 mb-1" />
                <h3 className="text-[10px] font-bold">LOCATION</h3>
                <p className="text-[10px] text-gray-500">Lake Kariba</p>
              </div>
            </div>
            <div className="p-5 max-w-sm mx-auto text-center">
              <h3 className="text-lg mb-2 text-stone-800">The Experience</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nestled on the banks of Lake Kariba, we offer an escape into nature without compromising on luxury. Game
                drives, fishing, and sundowner cruises await.
              </p>
            </div>
            <div className="px-4 pb-6">
              <div className="bg-amber-700/10 border border-amber-700/20 rounded p-3 text-center">
                <p className="text-[10px] text-amber-800 font-medium">Pay with Ecocash • Paynow • USD Cash</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Rooms",
        content: (
          <div className="bg-stone-50 min-h-full p-4 font-serif">
            <h2 className="text-xl text-center text-stone-800 mb-4">Accommodations</h2>
            <div className="space-y-3">
              <div className="bg-white shadow-sm overflow-hidden rounded">
                <div className="h-24 bg-gradient-to-br from-stone-300 to-stone-400 w-full flex items-center justify-center text-stone-600 text-xs">
                  Lake View Suite
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-sm text-stone-800 font-semibold">Lake View Suite</h3>
                    <span className="text-amber-700 font-bold text-sm">
                      $180<span className="text-[10px] text-gray-400">/night</span>
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-500 mb-2">King bed, Balcony, WiFi, Breakfast included.</p>
                  <button className="w-full py-2 border border-amber-700 text-amber-700 text-xs uppercase hover:bg-amber-700 hover:text-white transition rounded">
                    Check Availability
                  </button>
                </div>
              </div>
              <div className="bg-white shadow-sm overflow-hidden rounded">
                <div className="h-24 bg-gradient-to-br from-stone-300 to-stone-400 w-full flex items-center justify-center text-stone-600 text-xs">
                  Bush Chalet
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-sm text-stone-800 font-semibold">Bush Chalet</h3>
                    <span className="text-amber-700 font-bold text-sm">
                      $120<span className="text-[10px] text-gray-400">/night</span>
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-500 mb-2">Twin beds, Outdoor shower, Game viewing.</p>
                  <button className="w-full py-2 border border-amber-700 text-amber-700 text-xs uppercase hover:bg-amber-700 hover:text-white transition rounded">
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Book",
        content: (
          <div className="bg-stone-50 min-h-full p-4 font-serif">
            <h2 className="text-xl text-center text-stone-800 mb-4">Book Your Stay</h2>
            <div className="bg-white p-4 rounded shadow-sm space-y-3">
              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase">Check-in Date</label>
                <input type="date" className="w-full p-2 border rounded text-sm mt-1" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase">Check-out Date</label>
                <input type="date" className="w-full p-2 border rounded text-sm mt-1" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase">Guests</label>
                <select className="w-full p-2 border rounded text-sm mt-1">
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-stone-500 uppercase">Room Type</label>
                <select className="w-full p-2 border rounded text-sm mt-1">
                  <option>Lake View Suite - $180/night</option>
                  <option>Bush Chalet - $120/night</option>
                </select>
              </div>
              <button className="w-full py-3 bg-amber-700 text-white text-xs uppercase tracking-wider hover:bg-amber-800 transition rounded">
                Check Availability
              </button>
              <p className="text-[10px] text-center text-stone-500">Pay via Ecocash, Paynow, or USD on arrival</p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "realestate",
    name: "Aurum Real Estate",
    category: "Real Estate",
    tagline: "Lead generation ↑ 200%",
    description: "Property listings with advanced filtering by province and city. Built for trust and clarity.",
    image: "/luxury-modern-house-borrowdale-harare-zimbabwe-rea.jpg",
    pages: [
      {
        title: "Home",
        content: (
          <div className="bg-slate-50 min-h-full font-sans text-slate-800">
            <div className="bg-slate-900 text-white p-4 pb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg tracking-tighter text-yellow-500">AURUM</span>
                <span className="text-[10px] uppercase opacity-70">Menu</span>
              </div>
              <h1 className="text-2xl font-light mb-3 leading-tight">
                Find your place in <span className="font-bold">Harare</span>.
              </h1>
              <div className="bg-white p-2 rounded flex shadow-lg transform translate-y-4">
                <input
                  placeholder="Search Borrowdale, Avondale..."
                  className="flex-1 p-2 text-slate-800 outline-none text-xs"
                />
                <button className="bg-yellow-500 p-2 rounded text-slate-900">
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
            <div className="mt-8 px-4 pb-6">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Featured Listings</h2>
              <div className="space-y-3">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-28 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400 text-xs">
                    Borrowdale Property
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-bold text-sm">Borrowdale Brooke</h3>
                        <p className="text-[10px] text-slate-500">4 Bed • 3 Bath • Pool</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded">
                        $350k
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-28 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400 text-xs">
                    Avondale Apartment
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-bold text-sm">Avondale Garden Flat</h3>
                        <p className="text-[10px] text-slate-500">2 Bed • 1 Bath • Secure</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded">
                        $120k
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Listings",
        content: (
          <div className="bg-slate-50 min-h-full font-sans p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-800">Properties</h2>
              <select className="text-xs border rounded p-1">
                <option>All Areas</option>
                <option>Borrowdale</option>
                <option>Avondale</option>
                <option>Mt Pleasant</option>
              </select>
            </div>
            <div className="space-y-3">
              {[
                { name: "Greystone Park Villa", beds: 5, price: "$420k", type: "For Sale" },
                { name: "Highlands Townhouse", beds: 3, price: "$1,200/mo", type: "For Rent" },
                { name: "Eastlea Commercial", beds: 0, price: "$280k", type: "Commercial" },
              ].map((prop, i) => (
                <div key={i} className="bg-white rounded shadow-sm p-3 flex items-center gap-3">
                  <div className="w-16 h-16 bg-slate-200 rounded flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{prop.name}</h3>
                    <p className="text-[10px] text-slate-500">
                      {prop.beds > 0 ? `${prop.beds} Bedrooms` : "Office Space"}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-yellow-600 font-bold text-xs">{prop.price}</span>
                      <span className="bg-slate-100 text-[8px] px-1 rounded">{prop.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "retail",
    name: "ZimFoods Retail",
    category: "Retail / E-com",
    tagline: "Local sales automated",
    description: "A fast, lightweight shop for up to 30 products with Ecocash payment instructions built-in.",
    image: "/zimbabwe-local-grocery-store-fresh-produce-vegetab.jpg",
    pages: [
      {
        title: "Shop",
        content: (
          <div className="bg-white min-h-full font-sans">
            <nav className="border-b p-3 flex justify-between items-center bg-green-700 text-white">
              <span className="font-black italic text-base">ZimFoods</span>
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-green-900 text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </div>
            </nav>
            <div className="p-2 bg-yellow-100 text-yellow-800 text-[10px] text-center font-medium">
              Free delivery in Harare CBD for orders over $50!
            </div>
            <div className="p-3 grid grid-cols-2 gap-3">
              {[
                { name: "Fresh Tomatoes", price: "$3.50", unit: "per kg" },
                { name: "Maize Meal 10kg", price: "$12.00", unit: "bag" },
                { name: "Cooking Oil 2L", price: "$8.00", unit: "bottle" },
                { name: "Sugar 2kg", price: "$5.50", unit: "pack" },
              ].map((product, i) => (
                <div key={i} className="border rounded-lg p-2 flex flex-col items-center text-center">
                  <div className="w-full h-20 bg-gray-100 mb-2 rounded flex items-center justify-center text-gray-400 text-[10px]">
                    {product.name}
                  </div>
                  <h4 className="font-medium text-xs text-gray-800">{product.name}</h4>
                  <p className="text-[10px] text-gray-500 mb-2">{product.unit}</p>
                  <div className="mt-auto w-full flex items-center justify-between">
                    <span className="font-bold text-green-700 text-sm">{product.price}</span>
                    <button className="bg-green-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 mt-2 bg-gray-50 border-t">
              <h4 className="font-bold text-gray-700 mb-2 text-xs">Payment Options</h4>
              <div className="flex gap-2 text-[10px]">
                <span className="bg-white border px-2 py-1 rounded text-blue-600 font-bold">Ecocash</span>
                <span className="bg-white border px-2 py-1 rounded text-orange-600 font-bold">Paynow</span>
                <span className="bg-white border px-2 py-1 rounded text-green-600 font-bold">Cash</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Cart",
        content: (
          <div className="bg-gray-50 min-h-full font-sans">
            <nav className="border-b p-3 flex justify-between items-center bg-green-700 text-white">
              <span className="font-black italic text-base">ZimFoods</span>
              <span className="text-xs">Your Cart (3)</span>
            </nav>
            <div className="p-3 space-y-2">
              {[
                { name: "Fresh Tomatoes", price: "$3.50", qty: 2 },
                { name: "Maize Meal 10kg", price: "$12.00", qty: 1 },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded p-3 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-[10px] text-gray-500">Qty: {item.qty}</p>
                  </div>
                  <span className="font-bold text-green-700">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="p-3 bg-white border-t mt-2">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="font-bold">$19.00</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="text-sm text-gray-600">Delivery</span>
                <span className="font-bold text-green-600">FREE</span>
              </div>
              <button className="w-full py-3 bg-green-700 text-white font-bold rounded text-sm">
                Checkout via WhatsApp
              </button>
              <p className="text-[10px] text-center text-gray-500 mt-2">Pay with Ecocash after confirming order</p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "restaurant",
    name: "Ndeipi Restaurant",
    category: "Restaurant",
    tagline: "Online orders + Reservations",
    description: "Simple, appetite-inducing layout with quick reservation form and menu preview.",
    image: "/zimbabwe-traditional-restaurant-sadza-african-food.jpg",
    pages: [
      {
        title: "Home",
        content: (
          <div className="bg-orange-50 min-h-full font-serif">
            <header className="bg-white p-3 flex justify-between items-center shadow-sm">
              <h1 className="text-lg font-bold text-orange-600">Ndeipi</h1>
              <button className="bg-orange-600 text-white text-[10px] px-3 py-1 rounded-full">Order Now</button>
            </header>
            <div className="h-36 bg-gradient-to-br from-orange-200 to-orange-300 relative flex items-center justify-center">
              <h2 className="text-2xl text-orange-900 font-black drop-shadow-sm rotate-[-3deg]">Taste Home</h2>
            </div>
            <div className="p-4 -mt-6 relative z-10">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <h3 className="text-center font-bold text-gray-800 mb-3 uppercase text-xs tracking-wide">
                  Book a Table
                </h3>
                <form className="space-y-2">
                  <input type="date" className="w-full bg-gray-50 border p-2 rounded text-xs" />
                  <input type="number" placeholder="Guests" className="w-full bg-gray-50 border p-2 rounded text-xs" />
                  <button className="w-full bg-gray-800 text-white py-2 rounded font-bold text-xs">Find Table</button>
                </form>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-3 text-sm">Popular Dishes</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 border-b pb-2 border-orange-200">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xs">Sadza & Beef Stew</h4>
                    <p className="text-[10px] text-gray-500">Traditional favorite with greens.</p>
                  </div>
                  <span className="font-bold text-orange-600 text-sm">$8</span>
                </div>
                <div className="flex items-center gap-3 border-b pb-2 border-orange-200">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xs">Quarter Chicken</h4>
                    <p className="text-[10px] text-gray-500">Flame grilled with peri-peri.</p>
                  </div>
                  <span className="font-bold text-orange-600 text-sm">$12</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xs">Matemba & Muriwo</h4>
                    <p className="text-[10px] text-gray-500">Dried fish with vegetables.</p>
                  </div>
                  <span className="font-bold text-orange-600 text-sm">$7</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Menu",
        content: (
          <div className="bg-orange-50 min-h-full font-serif p-4">
            <h2 className="text-xl font-bold text-center text-orange-800 mb-4">Our Menu</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2 border-b border-orange-200 pb-1">
                  Main Dishes
                </h3>
                <div className="space-y-2">
                  {[
                    { name: "Sadza & Beef Stew", price: "$8" },
                    { name: "Sadza & Chicken", price: "$10" },
                    { name: "Oxtail with Rice", price: "$15" },
                    { name: "T-Bone Steak", price: "$18" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span>{item.name}</span>
                      <span className="font-bold text-orange-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2 border-b border-orange-200 pb-1">
                  Drinks
                </h3>
                <div className="space-y-2">
                  {[
                    { name: "Mazoe Orange", price: "$2" },
                    { name: "Fanta / Coke", price: "$1.50" },
                    { name: "Castle Lager", price: "$3" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span>{item.name}</span>
                      <span className="font-bold text-orange-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="w-full mt-4 py-3 bg-orange-600 text-white font-bold rounded text-sm">
              Order via WhatsApp
            </button>
          </div>
        ),
      },
    ],
  },
]
