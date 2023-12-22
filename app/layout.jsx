
import Nav from "@components/Nav";
import "../styles/globals.css";


export const metadata = {
  title: "Prompts XYZ",
  description: "Share Your Promts",
};

const RootLayout = ({children}) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        
        <main className="app">
          <Nav />
            {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
