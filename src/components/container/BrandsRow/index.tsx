const brands = [
  { src: './images/brands/p2_upwork.png', alt: 'Upwork' },
  { src: './images/brands/p2_zoom.png', alt: 'Zoom' },
  { src: './images/brands/p2_postman.png', alt: 'Postman' },
  { src: './images/brands/p2_databricks.png', alt: 'Databricks' },
  { src: './images/brands/p2_airbnb.png', alt: 'Airbnb' },
  { src: './images/brands/p2_dropbox.png', alt: 'Dropbox' },
  { src: './images/brands/p2_paypal.png', alt: 'PayPal' },
];

export default function BrandsRow() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <p className="text-center text-sm font-medium text-gray-700">
        Trusted by Global Innovators &amp; Leading Brands
      </p>
      <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center opacity-80">
        {brands.map((b) => (
          <img
            key={b.alt}
            src={b.src}
            alt={b.alt}
            className="h-7 w-auto mx-auto"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
