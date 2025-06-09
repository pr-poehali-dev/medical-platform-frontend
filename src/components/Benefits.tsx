import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "UserCheck",
      title: "Квалифицированные врачи",
      description:
        "Все наши специалисты имеют медицинское образование и многолетний опыт работы",
    },
    {
      icon: "Clock",
      title: "Удобство и доступность",
      description:
        "Получите консультацию в любое время и в любом месте через ваше устройство",
    },
    {
      icon: "Shield",
      title: "Безопасность данных",
      description:
        "Гарантируем полную конфиденциальность и защиту ваших личных данных",
    },
    {
      icon: "Wallet",
      title: "Экономия времени",
      description:
        "Никаких очередей и поездок в клинику — всё решается дистанционно",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Преимущества онлайн-консультаций с нашими квалифицированными врачами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Icon
                  name={benefit.icon as any}
                  size={32}
                  className="text-blue-600 group-hover:text-white transition-colors duration-300"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
