import { log } from "console";

export default function DashboardLayout({
    children,
    notification,
    content,
    revenue
}: {
    children: React.ReactNode;
    notification: React.ReactNode;
    content: React.ReactNode;
    revenue: React.ReactNode;
}) {
    return (
        <div>
            <h1>{children}</h1>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{content}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>{notification}</div>
            </div>
        </div>
    )
}