const TrustedBy = () => {
  const logos = ["Quantum Bank", "Apex Holdings", "Nova Capital", "Titan Finance", "Helix Markets"];
  return (
    <section className="py-12" aria-labelledby="trusted-by-heading">
      <div className="container mx-auto px-6">
        <h2 id="trusted-by-heading" className="text-center text-sm text-gray-600 mb-6">Trusted by forward-thinking financial institutions</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center list-none p-0 m-0">
          {logos.map((name) => (
            <li key={name} className="text-[#333333]/70 border border-[#EAEAEA] rounded-md px-4 py-3 w-full text-center">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustedBy;


