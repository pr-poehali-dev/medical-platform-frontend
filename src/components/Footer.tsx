import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigationLinks = [
    { title: "О платформе", links: ["О нас", "Команда", "Миссия", "Карьера"] },
    {
      title: "Услуги",
      links: ["Терапия", "Кардиология", "Педиатрия", "Дерматология"],
    },
    {
      title: "Поддержка",
      links: ["Вопросы и ответы", "Контакты", "Техподдержка", "Отзывы"],
    },
    {
      title: "Документы",
      links: [
        "Политика конфиденциальности",
        "Условия использования",
        "Лицензии",
        "Оферта",
      ],
    },
  ];

  const socialLinks = [
    { name: "Telegram", icon: "MessageCircle" },
    { name: "WhatsApp", icon: "Phone" },
    { name: "VK", icon: "Share" },
    { name: "YouTube", icon: "Play" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Основной контент футера */}
        <div className="py-16 grid lg:grid-cols-6 gap-8">
          {/* Логотип и описание */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <span className="font-bold text-xl">МедКонсульт</span>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Современная платформа телемедицины, объединяющая квалифицированных
              врачей и пациентов для качественной медицинской помощи онлайн.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Навигационные ссылки */}
          {navigationLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Контактная информация */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Icon name="Phone" size={20} className="text-blue-400" />
              <div>
                <div className="font-medium">Горячая линия</div>
                <div className="text-gray-400">8 (800) 123-45-67</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Icon name="Mail" size={20} className="text-blue-400" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-gray-400">info@medconsult.ru</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Icon name="MapPin" size={20} className="text-blue-400" />
              <div>
                <div className="font-medium">Адрес</div>
                <div className="text-gray-400">Москва, ул. Примерная, 123</div>
              </div>
            </div>
          </div>
        </div>

        {/* Подписка на новости */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Подпишитесь на новости
              </h3>
              <p className="text-gray-400">
                Получайте актуальную информацию о здоровье и новостях платформы
              </p>
            </div>

            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-600"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 МедКонсульт. Все права защищены.
          </p>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Лицензия ЛО-77-01-123456</span>
            <span>•</span>
            <span>Работаем круглосуточно</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
