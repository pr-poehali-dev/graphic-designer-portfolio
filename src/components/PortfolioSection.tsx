
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Дизайн логотипа для кофейни",
    category: "Логотип",
    image: "https://images.unsplash.com/photo-1599377514358-32ed301c475a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Концепт-дизайн для новой кофейни. Упор на минимализм и современный стиль."
  },
  {
    id: 2,
    title: "Дизайн социальных медиа",
    category: "Соцсети",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Серия постов для Instagram с единым визуальным стилем для бренда одежды."
  },
  {
    id: 3,
    title: "Иллюстрация для блога",
    category: "Иллюстрация",
    image: "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Веб-иллюстрация для статьи о творческом процессе и вдохновении."
  },
  {
    id: 4,
    title: "Макет лендинга",
    category: "Веб-дизайн",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Прототип лендинга для образовательного проекта. Акцент на удобство и ясность."
  },
  {
    id: 5,
    title: "Дизайн визитки",
    category: "Полиграфия",
    image: "https://images.unsplash.com/photo-1633290059869-285a99cfa6ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Минималистичный дизайн визитной карточки для фотографа."
  },
  {
    id: 6,
    title: "Баннер для мероприятия",
    category: "Баннеры",
    image: "https://images.unsplash.com/photo-1611464908623-07f19927264e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Рекламный баннер для местного музыкального фестиваля."
  },
];

const categories = ["Все", "Логотип", "Соцсети", "Веб-дизайн", "Иллюстрация", "Полиграфия", "Баннеры"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredProjects = activeCategory === "Все" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Мое <span className="text-primary">портфолио</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Работы из моего учебного и начального профессионального опыта. Каждый проект — шаг в моем развитии.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10 slide-up" style={{ animationDelay: "0.2s" }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="hover-scale overflow-hidden border-none shadow-md slide-up"
              style={{ animationDelay: `${0.1 * project.id}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary hover:bg-primary/90">{project.category}</Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="text-primary">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 slide-up" style={{ animationDelay: "0.5s" }}>
          <p className="text-muted-foreground mb-4">
            Это только начало моего творческого пути. Я постоянно работаю над новыми проектами!
          </p>
          <Button variant="outline" size="lg" className="bg-white">
            Все проекты
            <Icon name="ExternalLink" className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
