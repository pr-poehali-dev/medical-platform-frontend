import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Blog = () => {
  const articles = [
    {
      title: "5 признаков того, что вам нужна консультация кардиолога",
      excerpt:
        "Узнайте, когда стоит обратиться к специалисту и какие симптомы нельзя игнорировать",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=250&fit=crop",
      date: "15 ноября 2024",
      readTime: "5 мин",
      category: "Кардиология",
    },
    {
      title: "Как подготовиться к онлайн-консультации с врачом",
      excerpt:
        "Практические советы для максимально эффективной дистанционной консультации",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      date: "12 ноября 2024",
      readTime: "3 мин",
      category: "Телемедицина",
    },
    {
      title: "Детская аллергия: симптомы и методы лечения",
      excerpt:
        "Всё, что нужно знать родителям о детской аллергии и современных методах её лечения",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      date: "10 ноября 2024",
      readTime: "7 мин",
      category: "Педиатрия",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Полезные статьи о здоровье
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Экспертные материалы от наших врачей для поддержания вашего здоровья
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  <span className="mr-4">{article.date}</span>
                  <Icon name="Clock" size={16} className="mr-2" />
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 p-0 font-medium"
                >
                  Читать далее →
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Все статьи блога
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
