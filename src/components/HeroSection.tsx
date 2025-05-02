
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-20 flex items-center"
    >
      {/* Декоративный фоновый элемент */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-primary/5 -z-10"></div>
        <div className="absolute left-1/4 bottom-1/4 w-64 h-64 rounded-full bg-blue-100 -z-10"></div>
        <div className="absolute right-1/3 bottom-0 w-72 h-72 dot-pattern -z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-6 space-x-2">
              <div className="h-1 w-12 bg-primary"></div>
              <span className="text-muted-foreground font-medium">Начинающий дизайнер</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Привет, я<br />
              <span className="gradient-text">графический дизайнер</span><br />
              с творческим взглядом
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Я соединяю креативность и технические навыки для создания визуальных решений,
              которые помогут вашему бренду выделиться. Моя цель — расти вместе с клиентами и
              реализовывать интересные проекты.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Мои работы
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="relative slide-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Рабочее место дизайнера"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Статистика */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4 flex gap-6">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">1+</h4>
                <p className="text-xs text-muted-foreground">Года опыта</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">10+</h4>
                <p className="text-xs text-muted-foreground">Проектов</p>
              </div>
            </div>
            
            {/* Badges */}
            <div className="absolute -top-3 -right-3 bg-white rounded-lg shadow-lg p-3">
              <div className="flex items-center gap-2">
                <Icon name="Lightbulb" className="text-primary" size={20} />
                <span className="text-sm font-medium">Креативные идеи</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
