//! Components
import FAQList from "@/components/FAQList";
import Header from "@/components/Header";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
      <Header />
      <FAQList />
    </div>
  );
}
