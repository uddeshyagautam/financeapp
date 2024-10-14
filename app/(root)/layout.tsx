import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/ui/MobileNav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "Uddeshya",
    lastName: "JSM",
    // Replace with actual user data when implementing login/logout functionality
    // Example: const loggedIn = JSON.parse(localStorage.getItem('user')) || {};  // Assuming user data is stored in local storage.
    // Note: This is a simplified example, and you may need to adapt it to your specific use case.
  };

  return (
    <main className="flex h-screen  w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="icon" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
