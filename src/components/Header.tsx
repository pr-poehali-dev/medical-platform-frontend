import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "О нас",
    "Врачи",
    "Услуги",
    "Цены",
    "Блог",
    "Вопросы и ответы",
    "Контакты",
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Heart" size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">МедКонсульт</span>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Кнопки авторизации */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600"
            >
              Войти
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Зарегистрироваться
            </Button>
          </div>

          {/* Мобильное меню */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button variant="ghost" className="justify-start">
                  Войти
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Зарегистрироваться
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
