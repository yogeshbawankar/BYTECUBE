const TrustedBy = () => {
  const logos = [
    { name: "Quantum Bank", src: "/placeholder.svg" },
    { name: "Apex Holdings", src: "/placeholder.svg" },
    { name: "Nova Capital", src: "/placeholder.svg" },
    { name: "Titan Finance", src: "/placeholder.svg" },
    { name: "Helix Markets", src: "/placeholder.svg" },
  ];
  return (
    <section className="py-12" aria-labelledby="trusted-by-heading">
      <div className="container mx-auto px-6">
        <h2 id="trusted-by-heading" className="text-center text-sm text-[#666666] mb-6">Trusted by forward-thinking financial institutions</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center list-none p-0 m-0">
          {logos.map((logo) => (
            <li key={logo.name} className="opacity-70 hover:opacity-100 transition-opacity">
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustedBy;


