import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import "./tailwind.css";
import Typography from "./Typography";
import FlexboxGrid from "./Flexbox";
import UserForm from "./UserFrom";
import HitungGajiForm from "./HitungGajiFrom";

createRoot(document.getElementById("root"))
    .render(
        <div>
    {/* <TailwindCSS />
    <Typography />
    <FlexboxGrid />
    <UserForm /> */}
    <HitungGajiForm />
    </div>
)