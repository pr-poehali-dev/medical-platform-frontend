import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Doctors = () => {
  const doctors = [
    {
      name: "Др. Анна Иванова",
      specialty: "Терапевт",
      experience: "15 лет опыта",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      rating: "4.9",
      reviews: "234",
    },
    {
      name: "Др. Михаил Петров",
      specialty: "Кардиолог",
      experience: "12 лет опыта",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      rating: "4.8",
      reviews: "187",
    },
    {
      name: "Др. Елена Сидорова",
      specialty: "Дерматолог",
      experience: "10 лет опыта",
      image:
        "https://images.unsplash.com/photo-1594824883736-76cbc899b0ed?w=300&h=300&fit=crop&crop=face",
      rating: "4.9",
      reviews: "156",
    },
    {
      name: "Др. Александр Козлов",
      specialty: "Невролог",
      experience: "18 лет опыта",
      image:
        "https://images.unsplash.com/photo-1612531386530-97d553376c9d?w=300&h=300&fit=crop&crop=face",
      rating: "4.7",
      reviews: "298",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Выберите своего врача
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Познакомьтесь с нашими опытными специалистами и выберите подходящего
            врача
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Icon
                    name="Star"
                    size={16}
                    className="text-yellow-500 fill-current"
                  />
                  <span className="text-sm font-semibold text-gray-700">
                    {doctor.rating}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {doctor.name}
                </h3>

                <p className="text-blue-600 font-medium mb-2">
                  {doctor.specialty}
                </p>

                <p className="text-gray-600 text-sm mb-3">
                  {doctor.experience}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Icon name="MessageCircle" size={14} />
                    <span>{doctor.reviews} отзывов</span>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Записаться
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Смотреть всех врачей
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
