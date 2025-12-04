import Header from "@/components/layout/header";
import Accueil from "@/components/layout/accueil";
import Introduction from "@/components/layout/introduction";
import Objectifs from "@/components/layout/objectifs";
import AutoEvaluation from "@/components/layout/auto-evaluation";
import Programme from "@/components/layout/programme";
import Sessions from "@/components/layout/sessions";
import Bilan from "@/components/layout/bilan";
import Feedback from "@/components/layout/feedback";
import Footer from "@/components/layout/footer";


export default function Home() {
  return (
    <div className="body-container flex flex-col min-h-screen bg-foreground font-sans dark:bg-background">
      <Header />
      <main className="prose">
        <Accueil/>
        <Introduction />
        <AutoEvaluation />
        <Objectifs />
        <Programme />
        <Sessions />
        <Bilan />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}
