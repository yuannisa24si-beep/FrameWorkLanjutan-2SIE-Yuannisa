import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";

const loyaltyStyle = {
    "Gold": "bg-yellow-100 text-yellow-600",
    "Silver": "bg-gray-100 text-gray-600",
    "Bronze": "bg-orange-100 text-orange-600",
};

export default function Customer() {
    const [customers, setCustomers] = useState(customersData);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ customerName: "", email: "", phone: "", loyalty: "Bronze" });

    function handleSubmit(e) {
        e.preventDefault();
        const newCustomer = { id: `CST-${String(customers.length + 1).padStart(3, "0")}`, ...form };
        setCustomers([newCustomer, ...customers]);
        setShowForm(false);
        setForm({ customerName: "", email: "", phone: "", loyalty: "Bronze" });
    }

    return (
        <div>
            <PageHeader title="Customer" breadcrumb={["Dashboard", "Customer List"]}>
                <button onClick={() => setShowForm(p => !p)} className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                    {showForm ? "Tutup Form" : "Add New Customer"}
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
                        <label className="text-sm font-medium text-gray-600">Email</label>
                        <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400" placeholder="email@example.com" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-600">Phone</label>
                        <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400" placeholder="08xxxxxxxxxx" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-600">Loyalty</label>
                        <select value={form.loyalty} onChange={e => setForm({...form, loyalty: e.target.value})}
                            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-400">
                            <option>Bronze</option><option>Silver</option><option>Gold</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                        <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-600">Simpan Customer</button>
                    </div>
                </form>
            )}

            <div className="p-5">
                <div className="bg-white rounded-xl shadow-md p-5">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">👥 Customer List ({customers.length} data)</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead>
                                <tr className="bg-green-50 text-green-600 text-left">
                                    <th className="px-4 py-2 rounded-l-lg">Customer ID</th>
                                    <th className="px-4 py-2">Customer Name</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Phone</th>
                                    <th className="px-4 py-2 rounded-r-lg">Loyalty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((c, i) => (
                                    <tr key={i} className="border-t border-gray-50 hover:bg-gray-50">
                                        <td className="px-4 py-3 text-gray-400 font-mono">{c.id}</td>
                                        <td className="px-4 py-3 font-medium text-gray-700 flex items-center gap-2">
                                            <img src={`https://i.pravatar.cc/32?img=${i + 10}`} className="w-7 h-7 rounded-full" alt="" />
                                            {c.customerName}
                                        </td>
                                        <td className="px-4 py-3 text-gray-500">{c.email}</td>
                                        <td className="px-4 py-3 text-gray-500">{c.phone}</td>
                                        <td className="px-4 py-3">
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${loyaltyStyle[c.loyalty]}`}>{c.loyalty}</span>
                                        </td>
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
