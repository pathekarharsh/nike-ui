import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../constants'

const Services = () => {
  return (
    <section className="max-container max-sm:mt-10">
       <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Services</span>
        </h2>
      </div>

      <div className="mt-4 max-container flex justify-center flex-wrap gap-9">
        {services.map((product) => (
          <ServiceCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default Services