import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Мария Петрова",
      location: "Москва",
      review:
        "Отличная платформа! Получила консультацию терапевта не выходя из дома. Врач был очень внимательным и профессиональным.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Александр Смирнов",
      location: "Санкт-Петербург",
      review:
        "Сэкономил кучу времени! Быстро получил консультацию кардиолога и расшифровку ЭКГ. Рекомендую всем!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Елена Иванова",
      location: "Екатеринбург",
      review:
        "Очень удобно для консультаций с детским врачом. Малыш не нервничает дома, а доктор дал подробные рекомендации.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Что говорят наши пациенты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Читайте отзывы тех, кто уже воспользовался нашими услугами
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={20}
                    className="text-yellow-500 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.review}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Поделитесь своим опытом
            </h3>
            <p className="text-gray-600 mb-4">
              Ваше мнение поможет другим пациентам сделать правильный выбор
            </p>
            <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Оставить отзыв →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
