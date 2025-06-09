import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: "Heart",
      title: "Терапия",
      description:
        "Общие консультации, диагностика, лечение простудных заболеваний",
      price: "от 1500 ₽",
    },
    {
      icon: "Baby",
      title: "Педиатрия",
      description: "Консультации детского врача, вакцинация, развитие ребенка",
      price: "от 1800 ₽",
    },
    {
      icon: "Activity",
      title: "Кардиология",
      description:
        "Диагностика сердечно-сосудистых заболеваний, ЭКГ расшифровка",
      price: "от 2000 ₽",
    },
    {
      icon: "Eye",
      title: "Дерматология",
      description:
        "Консультации по проблемам кожи, диагностика новообразований",
      price: "от 1700 ₽",
    },
    {
      icon: "Brain",
      title: "Неврология",
      description:
        "Лечение головных болей, нарушений сна, неврологических расстройств",
      price: "от 2200 ₽",
    },
    {
      icon: "Smile",
      title: "Психология",
      description: "Психологическая поддержка, работа со стрессом и депрессией",
      price: "от 2500 ₽",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Какие консультации мы предлагаем
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Широкий спектр медицинских консультаций для всей семьи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-blue-100"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Icon
                  name={service.icon as any}
                  size={28}
                  className="text-blue-600 group-hover:text-white transition-colors duration-300"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-blue-600">
                  {service.price}
                </span>
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 p-0"
                >
                  Подробнее →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Записаться на консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
