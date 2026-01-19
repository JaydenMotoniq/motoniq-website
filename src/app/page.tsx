import styles from "./page.module.scss";

import AboutSection from "@/components/AboutSection";
import IntroSection from "@/components/IntroSection";
import MarketSection from "@/components/MarketSection";
import UseCasesSection from "@/components/UseCasesSection";
import TechnologySection from "@/components/TechnologySection";

export default function Home() {
  return (
    <main className={styles.main}>
      <IntroSection />
      <AboutSection />
      <TechnologySection />
      <UseCasesSection />
      <MarketSection />
    </main>
  );
}
