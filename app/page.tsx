import { Navbar } from "@/components/Navbar";
import { ScrollCurrent } from "@/components/ScrollCurrent";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { BillCalculator } from "@/components/BillCalculator";
import { HolderBenefits } from "@/components/HolderBenefits";
import { ElectricityLifestyle } from "@/components/ElectricityLifestyle";
import { BillUploader } from "@/components/BillUploader";
import { WattEconomy } from "@/components/WattEconomy";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollCurrent />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <BillCalculator />
        <HolderBenefits />
        <ElectricityLifestyle />
        <BillUploader />
        <WattEconomy />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
