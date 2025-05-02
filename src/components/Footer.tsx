
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Design<span className="text-foreground">Studio</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Креативные решения для вашего бизнеса.
              Создаю уникальный дизайн, который помогает 
              брендам выделяться и достигать своих целей.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Behance", "Dribbble", "Linkedin"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label={platform}
                >
                  <Icon name={platform} size={16} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {["Главная", "Обо мне", "Портфолио", "Услуги", "Контакты"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item === "Главная" ? "hero" : item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Icon name="Mail" size={16} />
                <a href="mailto:design@example.com" className="hover:text-primary transition-colors">
                  design@example.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Icon name="Phone" size={16} />
                <a href="tel:+79991234567" className="hover:text-primary transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Дизайнеров, 42</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-muted-foreground/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} DesignStudio. Все права защищены.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
