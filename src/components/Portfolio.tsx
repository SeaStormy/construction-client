'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PortfolioItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/portfolio`
        );
        if (!response.ok) throw new Error('Failed to fetch portfolio');
        const data = await response.json();
        setPortfolioItems(data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-primary">Our Portfolio</h2>
          <p className="mt-4 text-lg text-gray-600">
            Take a look at some of our recent projects
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {portfolioItems.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-3 text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-sm text-gray-500 mt-2">{item.category}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
