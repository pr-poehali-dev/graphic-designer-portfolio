
import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Дизайн логотипов",
    description: "Разработка уникальных и запоминающихся логотипов, отражающих ценности и индивидуальность вашего бренда.",
    icon: "PenTool",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Дизайн для соцсетей",
    description: "Создание привлекательного визуального контента для ваших аккаунтов в социальных сетях и вовлечения аудитории.",
    icon: "Instagram",
    color: "bg-purple-500"
  },
  {
    id: 3,
    title: "Баннеры и рекламные материалы",
    description: "Разработка привлекательных баннеров, постеров и других рекламных материалов для вашего бизнеса.",
    icon: "Image",
    color: "bg-green-500"
  },
  {
    id: 4,
    title: "Дизайн визиток и полиграфии",
    description: "Создание стильных визиток, флаеров, брошюр и другой печатной продукции для эффективного продвижения.",
    icon: "FileText",
    color: "bg-orange-500"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Мои <span className="text-primary">услуги</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Я предлагаю различные услуги графического дизайна, фокусируясь на создании качественных 
            визуальных решений по доступным ценам для малого бизнеса и стартапов.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="border-none shadow-lg hover-scale slide-up"
              style={{ animationDelay: `${0.1 * service.id}s` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center text-white`}>
                    <Icon name={service.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>Срок: 3-5 дней</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-primary font-medium">
                      <span>от 2000 ₽</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg p-6 slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Нужен индивидуальный проект?</h3>
              <p className="text-muted-foreground mb-6">
                Если вы не нашли подходящую услугу или у вас есть специфические требования, 
                я готов обсудить индивидуальные решения для вашего бизнеса.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Бесплатная консультация</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Гибкие условия сотрудничества</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Возможность правок</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <a href="#contact">
                <button className="px-8 py-4 bg-primary text-white rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors">
                  Связаться со мной
                  <Icon name="ArrowRight" size={16} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
