
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-300">Design</span>Journey
            </h3>
            <p className="text-blue-100 mb-6 max-w-md">
              Начинающий графический дизайнер, стремящийся создавать уникальные 
              визуальные решения. Готов воплотить ваши идеи в жизнь!
            </p>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-transparent border-blue-400 text-blue-200 hover:bg-blue-800"
              >
                <Icon name="Download" size={14} className="mr-1" />
                Скачать резюме
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Навигация</h4>
            <ul className="space-y-2">
              {[
                { name: "Главная", href: "#hero" },
                { name: "Обо мне", href: "#about" },
                { name: "Портфолио", href: "#portfolio" },
                { name: "Услуги", href: "#services" },
                { name: "Контакты", href: "#contact" }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-blue-200 hover:text-white transition-colors flex items-center"
                  >
                    <Icon name="ChevronRight" size={14} className="mr-1" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Связаться со мной</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-blue-200">
                <Icon name="Mail" size={16} />
                <a href="mailto:mydesign@example.com" className="hover:text-white transition-colors">
                  mydesign@example.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Icon name="Phone" size={16} />
                <a href="tel:+79001234567" className="hover:text-white transition-colors">
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="mt-6">
                <h5 className="font-medium mb-2">Мои соцсети</h5>
                <div className="flex gap-3">
                  {["Instagram", "Behance", "Dribbble", "Linkedin"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
                      aria-label={platform}
                    >
                      <Icon name={platform} size={14} />
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm">
            © {currentYear} Начинающий дизайнер. Все права защищены.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-blue-300 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-blue-300 hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
