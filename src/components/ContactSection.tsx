
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ContactInfo {
  icon: string;
  title: string;
  details: string;
  link?: string;
  delay: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: "Mail",
    title: "Email",
    details: "mydesign@example.com",
    link: "mailto:mydesign@example.com",
    delay: "0.1s"
  },
  {
    icon: "Phone",
    title: "Телефон",
    details: "+7 (900) 123-45-67",
    link: "tel:+79001234567",
    delay: "0.2s"
  },
  {
    icon: "MessageCircle",
    title: "Telegram",
    details: "@mydesign",
    link: "https://t.me/mydesign",
    delay: "0.3s"
  }
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
    alert("Спасибо за сообщение! Я свяжусь с вами в ближайшее время.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Свяжитесь <span className="text-primary">со мной</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Я открыт для новых возможностей и сотрудничества.
            Напишите мне, и я отвечу в ближайшее время.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="border-none shadow-md hover-scale slide-up"
                  style={{ animationDelay: info.delay }}
                >
                  <CardContent className="p-6">
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
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-none shadow-md p-6 slide-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-lg font-medium mb-4">Найдите меня в соцсетях</h3>
              <div className="flex flex-wrap gap-3">
                {["Instagram", "Behance", "Dribbble", "Linkedin"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label={platform}
                  >
                    <Icon name={platform} size={18} />
                  </a>
                ))}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2 slide-up" style={{ animationDelay: "0.5s" }}>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Отправьте мне сообщение</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Ваше имя <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Введите ваш email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Тема сообщения
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Тема вашего сообщения"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Расскажите о вашем проекте или задайте вопрос..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить сообщение
                    <Icon name="Send" size={16} className="ml-2" />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Отправляя форму, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
