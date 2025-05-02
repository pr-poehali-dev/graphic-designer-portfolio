
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-50 z-0"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Креативный<br /><span className="text-primary">графический дизайн</span><br />
              в каждом пикселе
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Создаю уникальные визуальные решения, которые помогают брендам 
              выделяться и достигать своих целей.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Смотреть работы
              </Button>
              <Button size="lg" variant="outline">
                Связаться
              </Button>
            </div>
          </div>
          
          <div className="relative fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative rounded-lg overflow-hidden aspect-square shadow-2xl bg-gradient-to-br from-violet-400 to-violet-600">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Designer workspace"
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-indigo-600/30 mix-blend-multiply" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary rounded-full z-0" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
