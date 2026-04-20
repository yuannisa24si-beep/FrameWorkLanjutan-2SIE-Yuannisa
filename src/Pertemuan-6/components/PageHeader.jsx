export default function PageHeader({ title, breadcrumb, children }) {
    const crumbs = Array.isArray(breadcrumb) ? breadcrumb : breadcrumb?.split(" / ") || [];

    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">{title}</span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    {crumbs.map((crumb, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span className="text-gray-500 text-sm">{crumb}</span>
                            {i < crumbs.length - 1 && <span className="text-gray-400">/</span>}
                        </span>
                    ))}
                </div>
            </div>
            {children && <div id="action-button">{children}</div>}
        </div>
    );
}
