//! Components
import FAQList from "@/Components/FAQList";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <div className="max-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <Header />
      <FAQList />
    </div>
  );
}
