const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2H5v2a2 2 0 002 2h10a2 2 0 002-2v-2h-4v2M3 13h18l-3-6H6l-3 6z" />
      </svg>
    ),
    title: "Envíos Gratis",
    description: "Envíos GRATIS a todo el país",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9" />
      </svg>
    ),
    title: "Soporte 24/7",
    description: "Atención las 24 horas, los 7 días de la semana",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4zm4 8h8m-8 4h8M8 8h8" />
      </svg>
    ),
    title: "Devolución en 30 días",
    description: "Devolvé tu compra dentro de los 30 días",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.104-.895 2-2 2s-2-.896-2-2 .895-2 2-2 2 .896 2 2zm0 0h8m-8 0V3m0 8v12" />
      </svg>
    ),
    title: "Pago 100% Seguro",
    description: "Protección en todas tus compras",
  },
];

const ShopFeatures = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="mb-4 text-[#D64541]">{feature.icon}</div>
          <h3 className="font-semibold text-lg">{feature.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ShopFeatures;
