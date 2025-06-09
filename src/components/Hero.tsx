import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Текстовая часть */}
          <div className="lg:pr-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Онлайн-консультации с врачами
              <span className="text-blue-600"> в удобное для вас время</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Получите квалифицированную медицинскую помощь, не выходя из дома.
              Наши врачи готовы проконсультировать вас в любое удобное время.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Icon name="Search" size={20} className="mr-2" />
                Найти врача
              </Button>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">
                  Квалифицированных врачей
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  50k+
                </div>
                <div className="text-sm text-gray-600">Довольных пациентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  24/7
                </div>
                <div className="text-sm text-gray-600">
                  Круглосуточная поддержка
                </div>
              </div>
            </div>
          </div>

          {/* Изображение */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=600&fit=crop"
                alt="Врач проводит онлайн консультацию"
                className="w-full h-96 lg:h-[500px] object-cover"
              />

              {/* Плавающие элементы */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Онлайн
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 min-w-[200px]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon
                      name="UserCheck"
                      size={20}
                      className="text-blue-600"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Др. Анна Иванова
                    </div>
                    <div className="text-sm text-gray-600">Терапевт</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
