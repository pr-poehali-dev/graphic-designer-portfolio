
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5 fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <Avatar className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white shadow-lg mx-auto">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                  alt="Графический дизайнер" 
                />
                <AvatarFallback className="text-5xl">АД</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-6 -right-6 bg-primary/10 w-48 h-48 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 bg-primary/20 w-32 h-32 rounded-full -z-10" />
            </div>
          </div>
          
          <div className="md:w-3/5 fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Обо <span className="text-primary">мне</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Приветствую! Я профессиональный графический дизайнер с более чем 7-летним опытом работы. 
              Специализируюсь на создании уникальных брендов, иллюстраций и веб-дизайна, которые помогают 
              компаниям выделяться на фоне конкурентов.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Мой подход заключается в глубоком понимании целей клиента и создании дизайна, 
              который не только выглядит привлекательно, но и эффективно решает бизнес-задачи.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm">
                <Icon name="Palette" size={36} className="text-primary mb-3" />
                <h3 className="font-medium mb-1">Брендинг</h3>
                <p className="text-sm text-muted-foreground">Создание уникальной айдентики</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm">
                <Icon name="Layout" size={36} className="text-primary mb-3" />
                <h3 className="font-medium mb-1">UI/UX дизайн</h3>
                <p className="text-sm text-muted-foreground">Интерфейсы с заботой о пользователе</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm">
                <Icon name="Image" size={36} className="text-primary mb-3" />
                <h3 className="font-medium mb-1">Иллюстрации</h3>
                <p className="text-sm text-muted-foreground">Уникальные визуальные решения</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
