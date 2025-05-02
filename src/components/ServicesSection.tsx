
import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Фирменный стиль",
    description: "Разработка логотипов, цветовых палитр, типографики и фирменных элементов для создания узнаваемого бренда.",
    icon: "PenTool"
  },
  {
    id: 2,
    title: "Веб-дизайн",
    description: "Создание современных, адаптивных дизайнов веб-сайтов и лендингов, которые привлекают внимание и конвертируют посетителей.",
    icon: "Globe"
  },
  {
    id: 3,
    title: "UI/UX дизайн",
    description: "Разработка удобных и интуитивно понятных пользовательских интерфейсов для мобильных приложений и веб-сервисов.",
    icon: "Smartphone"
  },
  {
    id: 4,
    title: "Полиграфия",
    description: "Дизайн визиток, брошюр, каталогов, плакатов и другой печатной продукции с учетом требований печати.",
    icon: "FileText"
  },
  {
    id: 5,
    title: "Иллюстрации",
    description: "Создание уникальных иллюстраций для различных целей: от рекламы до оформления контента.",
    icon: "Palette"
  },
  {
    id: 6,
    title: "Упаковка",
    description: "Разработка креативного дизайна упаковки, который выделяет продукт на полке и подчеркивает его преимущества.",
    icon: "Package"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Мои <span className="text-primary">услуги</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Я предлагаю широкий спектр услуг в области графического дизайна, чтобы помочь 
            вашему бизнесу выделиться и достичь успеха.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 fade-in"
              style={{ animationDelay: `${0.1 * service.id}s` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <div className="text-5xl font-bold text-muted/10">0{service.id}</div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
