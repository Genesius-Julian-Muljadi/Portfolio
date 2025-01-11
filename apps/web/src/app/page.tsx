import HomeView from "@/components/home";
import PortfolioPage from "@/components/portfolio";
import PortfolioLayout from "@/layouts/PortfolioLayout";

export default function Home() {
  return (
    // <HomeView />
    <PortfolioLayout>
      <PortfolioPage />
    </PortfolioLayout>
  );
}
