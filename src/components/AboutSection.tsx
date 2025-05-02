
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const skills = [
    { name: "Adobe Photoshop", level: 60 },
    { name: "Figma", level: 75 },
    { name: "Adobe Illustrator", level: 55 },
    { name: "Canva", level: 85 },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Обо <span className="text-primary">мне</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 slide-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-semibold mb-4">
              Начинающий дизайнер с <span className="text-primary">большими амбициями</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Меня всегда привлекало искусство и визуальная коммуникация. Начав свой путь в графическом 
              дизайне недавно, я активно развиваю навыки через обучение, практику и работу над реальными проектами.
            </p>
            <p className="text-muted-foreground mb-6">
              Мой подход к дизайну — это сочетание креативности, понимания потребностей клиента 
              и стремления к постоянному совершенствованию. Каждый проект для меня — это возможность 
              создать что-то особенное и получить новый опыт.
            </p>
            
            <div className="space-y-6 mt-8">
              <h4 className="font-semibold text-lg">Мои навыки</h4>
              
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 slide-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden border-8 border-white shadow-xl">
                <Avatar className="w-full h-auto aspect-square">
                  <AvatarImage 
                    src="https://images.unsplash.com/photo-1618152103536-d8a4aca1e011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                    alt="Начинающий дизайнер" 
                  />
                  <AvatarFallback className="text-5xl">ДЗ</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Education Card */}
              <Card className="absolute -bottom-10 -left-10 max-w-[250px] shadow-lg">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="GraduationCap" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Обучение</h4>
                      <p className="text-xs text-muted-foreground">Онлайн-курсы по графическому дизайну</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Experience Card */}
              <Card className="absolute -top-5 -right-5 max-w-[250px] shadow-lg">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Briefcase" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Опыт</h4>
                      <p className="text-xs text-muted-foreground">Фриланс-проекты и учебные работы</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
