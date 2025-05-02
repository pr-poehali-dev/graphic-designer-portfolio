
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ContactInfo {
  icon: string;
  title: string;
  details: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: "Mail",
    title: "Email",
    details: "design@example.com",
    link: "mailto:design@example.com"
  },
  {
    icon: "Phone",
    title: "Телефон",
    details: "+7 (999) 123-45-67",
    link: "tel:+79991234567"
  },
  {
    icon: "MapPin",
    title: "Адрес",
    details: "Москва, ул. Дизайнеров, 42"
  }
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь будет логика отправки формы
    console.log(formData);
    alert("Сообщение отправлено! В реальном проекте здесь будет настоящая отправка формы.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Давайте <span className="text-primary">сотрудничать</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Свяжитесь со мной любым удобным способом 
            или заполните форму ниже.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6 fade-in" style={{ animationDelay: "0.2s" }}>
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 border-none shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={info.icon} className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.details}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Найдите меня в соцсетях</h3>
              <div className="flex gap-4">
                {["Instagram", "Behance", "Dribbble", "Linkedin"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label={platform}
                  >
                    <Icon name={platform} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="p-8 border-none shadow-lg">
              <h3 className="text-xl font-bold mb-6">Отправьте мне сообщение</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@mail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Расскажите о вашем проекте..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Отправить сообщение
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
