import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/orders.json";

const statusStyle = {
    "Completed": "bg-green-100 text-green-600",
    "Pending": "bg-yellow-100 text-yellow-600",
    "Cancelled": "bg-red-100 text-red-500",
};

export default function Order() {
    const [orders, setOrders] = useState(ordersData);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ customerName: "", status: "Pending", totalPrice: "", orderDate: "" });

    function handleSubmit(e) {
        e.preventDefault();
        const newOrder = { id: `ORD-${String(orders.length + 1).padStart(3, "0")}`, ...form, totalPrice: Number(form.totalPrice) };
        setOrders([newOrder, ...orders]);
        setShowForm(false);
        setForm({ customerName: "", status: "Pending", totalPrice: "", orderDate: "" });
    }

    return (
        <div>
            <PageHeader title="Order" breadcrumb={["Dashboard", "Order List"]}>
                <button onClick={() => setShowForm(p => !p)} className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                    {showForm ? "Tutup Form" : "Add New Order"}
                </button>
            </PageHeader>

            {showForm && (
                <form onSubmit={handleSubmit} className="mx-5 mb-4 bg-white rounded-xl shadow p-5 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-600">Customer Name</label>
                        <input required value={form.customerName} onChange={e => setForm({...form, customerName: e.target.value})}
                            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400" placeholder="Nama customer" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-600">Status</label>
                        <select value={form.status} onChange={e => setForm({...form, status: e.target.value})}
                            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400">
                            <option>Pending</option><option>Completed</option><option>Cancelled</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-600">Total Price (Rp)</label>
                        <input required type="number" value={form.totalPrice} onChange={e => setForm({...form, totalPrice: e.target.value})}
                            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400" placeholder="Contoh: 150000" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-600">Order Date</label>
                        <input required type="date" value={form.orderDate} onChange={e => setForm({...form, orderDate: e.target.value})}
                            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400" />
                    </div>
                    <div className="col-span-2">
                        <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-600">Simpan Order</button>
                    </div>
                </form>
            )}

            <div className="p-5">
                <div className="bg-white rounded-xl shadow-md p-5">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">📋 Order List ({orders.length} data)</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead>
                                <tr className="bg-green-50 text-green-600 text-left">
                                    <th className="px-4 py-2 rounded-l-lg">Order ID</th>
                                    <th className="px-4 py-2">Customer Name</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Total Price</th>
                                    <th className="px-4 py-2 rounded-r-lg">Order Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((o, i) => (
                                    <tr key={i} className="border-t border-gray-50 hover:bg-gray-50">
                                        <td className="px-4 py-3 text-gray-400 font-mono">{o.id}</td>
                                        <td className="px-4 py-3 font-medium text-gray-700">{o.customerName}</td>
                                        <td className="px-4 py-3">
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusStyle[o.status]}`}>{o.status}</span>
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">Rp {o.totalPrice.toLocaleString("id-ID")}</td>
                                        <td className="px-4 py-3 text-gray-500">{o.orderDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
