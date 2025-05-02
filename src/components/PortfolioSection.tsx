
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    title: "Ребрендинг IT компании",
    category: "Брендинг",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Разработка обновленного визуального стиля для технологической компании"
  },
  {
    id: 2,
    title: "Мобильное приложение FitTrack",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    description: "Интерфейс для мобильного приложения по отслеживанию фитнес-активности"
  },
  {
    id: 3,
    title: "Иллюстрации для книги",
    category: "Иллюстрации",
    image: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Серия художественных иллюстраций для детской книги"
  },
  {
    id: 4,
    title: "Упаковка для кофейни",
    category: "Брендинг",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    description: "Дизайн упаковки для местной кофейни премиум-класса"
  },
  {
    id: 5,
    title: "Веб-сайт для фотографа",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    description: "Разработка современного портфолио-сайта для профессионального фотографа"
  },
  {
    id: 6,
    title: "Постеры для фестиваля",
    category: "Иллюстрации",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Серия плакатов для музыкального фестиваля"
  },
];

const categories = ["Все", "Брендинг", "UI/UX", "Иллюстрации"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "Все" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Мои <span className="text-primary">работы</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Портфолио избранных проектов, демонстрирующих мой опыт в различных 
            областях графического дизайна.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in" style={{ animationDelay: "0.2s" }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="project-card overflow-hidden cursor-pointer fade-in"
              style={{ animationDelay: `${0.1 * project.id}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm font-medium text-primary-foreground">{project.category}</p>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">
                    {project.category}
                  </span>
                  <Button variant="ghost" size="sm">
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Загрузить еще работы
              <Icon name="ChevronDown" className="ml-2" size={18} />
            </Button>
          </div>
        )}

        {/* Project Modal - для будущей реализации */}
      </div>
    </section>
  );
};

export default PortfolioSection;
