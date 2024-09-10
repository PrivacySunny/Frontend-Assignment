import "./globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-backColor text-white">{children}</body>
    </html>
  );
};

export default Layout;
