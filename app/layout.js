import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Next Homework",
  description: "NextJS Homework 001 !!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
      {children}

        {/* <div className="grid grid-cols-7 bg-slate-500 min-h-screen "> */}
          {/* <aside className="col-span-2"> */}
            {/* <DashboardSidebar /> */}
          {/* </aside> */}

          {/* <section className="col-span-5 bg-gray-300 p-5 "> */}
            {/* Search Bar */}
            {/* <div className="mb-4">
              <SearchBar />
            </div> */}

            {/* <div className="bg-white p-10 rounded-xl overflow-hidden"> */}
              {/* Children Content */}
              {/* <div className="flex-1 ">{children}</div>
            </div> */}
          {/* </section> */}
        {/* </div> */}
      </body>
    </html>
  );
}
