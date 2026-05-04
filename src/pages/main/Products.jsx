import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

const products = [
  { id: 1, title: "Essence Mascara Lash Princess", code: "P001", category: "beauty", brand: "Essence", price: 9.99, stock: 5 },
  { id: 2, title: "Eyeshadow Palette with Mirror", code: "P002", category: "beauty", brand: "Glamour Beauty", price: 19.99, stock: 44 },
  { id: 3, title: "Powder Canister", code: "P003", category: "beauty", brand: "Velvet Touch", price: 14.99, stock: 18 },
  { id: 4, title: "Red Lipstick", code: "P004", category: "beauty", brand: "Chic Cosmetics", price: 12.99, stock: 68 },
  { id: 5, title: "Red Nail Polish", code: "P005", category: "beauty", brand: "Nail Couture", price: 8.99, stock: 71 },
  { id: 6, title: "Calvin Klein CK One", code: "P006", category: "fragrances", brand: "Calvin Klein", price: 49.99, stock: 17 },
  { id: 7, title: "Chanel Coco Noir Eau De", code: "P007", category: "fragrances", brand: "Chanel", price: 129.99, stock: 41 },
  { id: 8, title: "Dior J'adore", code: "P008", category: "fragrances", brand: "Dior", price: 89.99, stock: 91 },
  { id: 9, title: "Dolce Shine Eau de", code: "P009", category: "fragrances", brand: "Dolce & Gabbana", price: 69.99, stock: 3 },
  { id: 10, title: "Gucci Bloom Eau de", code: "P010", category: "fragrances", brand: "Gucci", price: 79.99, stock: 93 },
  { id: 11, title: "Annibale Colombo Bed", code: "P011", category: "furniture", brand: "Annibale Colombo", price: 1899.99, stock: 47 },
  { id: 12, title: "Annibale Colombo Sofa", code: "P012", category: "furniture", brand: "Annibale Colombo", price: 2499.99, stock: 16 },
  { id: 13, title: "Bedside Table African Cherry", code: "P013", category: "furniture", brand: "Furniture Co.", price: 299.99, stock: 16 },
  { id: 14, title: "Knoll Saarinen Executive", code: "P014", category: "furniture", brand: "Knoll", price: 499.99, stock: 47 },
  { id: 15, title: "Wooden Bathroom Sink With Mirror", code: "P015", category: "furniture", brand: "Bath Trends", price: 799.99, stock: 95 },
  { id: 16, title: "Apple", code: "P016", category: "groceries", brand: "Fresh Farms", price: 1.99, stock: 9 },
  { id: 17, title: "Beef Steak", code: "P017", category: "groceries", brand: "Meat Masters", price: 12.99, stock: 96 },
  { id: 18, title: "Cat Food - Dry", code: "P018", category: "groceries", brand: "Paws & Claws", price: 8.99, stock: 13 },
  { id: 19, title: "Chicken Meat", code: "P019", category: "groceries", brand: "Farm Fresh", price: 9.99, stock: 100 },
  { id: 20, title: "Cooking Oil", code: "P020", category: "groceries", brand: "Golden Chef", price: 4.99, stock: 22 },
  { id: 21, title: "Samsung Galaxy S23 Ultra", code: "P021", category: "smartphones", brand: "Samsung", price: 1199.99, stock: 34 },
  { id: 22, title: "iPhone 14 Pro", code: "P022", category: "smartphones", brand: "Apple", price: 999.99, stock: 58 },
  { id: 23, title: "Xiaomi Redmi Note 12", code: "P023", category: "smartphones", brand: "Xiaomi", price: 299.99, stock: 74 },
  { id: 24, title: "OPPO Reno 8", code: "P024", category: "smartphones", brand: "OPPO", price: 399.99, stock: 45 },
  { id: 25, title: "Vivo V25 Pro", code: "P025", category: "smartphones", brand: "Vivo", price: 349.99, stock: 30 },
  { id: 26, title: "HP Pavilion 15", code: "P026", category: "laptops", brand: "HP", price: 699.99, stock: 25 },
  { id: 27, title: "Dell XPS 13", code: "P027", category: "laptops", brand: "Dell", price: 1299.99, stock: 12 },
  { id: 28, title: "Lenovo ThinkPad X1", code: "P028", category: "laptops", brand: "Lenovo", price: 1499.99, stock: 8 },
  { id: 29, title: "ASUS ROG Zephyrus", code: "P029", category: "laptops", brand: "ASUS", price: 1799.99, stock: 19 },
  { id: 30, title: "MacBook Pro 14", code: "P030", category: "laptops", brand: "Apple", price: 1999.99, stock: 6 },
];

export { products };

export default function Products() {
  return (
    <div className="p-5">
      <PageHeader title="Products" breadcrumb={["Dashboard", "Product List"]} />

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <input
            className="border rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Cari produk..."
          />
        </div>

        <table className="w-full text-sm">
          <thead className="bg-hijau text-white">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/products/${item.id}`}
                    className="text-emerald-600 hover:underline"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="px-6 py-4">{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
