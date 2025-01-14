import HomeView from "@/views/home";
import PortfolioPage from "@/views/portfolio";
import PortfolioLayout from "@/layouts/PortfolioLayout";

export default function Home() {
  return (
    // <HomeView />
    <PortfolioLayout>
      <PortfolioPage />
    </PortfolioLayout>
  );
}
