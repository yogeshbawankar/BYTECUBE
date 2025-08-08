const TrustedBy = () => {
  const logos = ["Quantum Bank", "Apex Holdings", "Nova Capital", "Titan Finance", "Helix Markets"];
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center text-sm text-[#555555] mb-6">Trusted by forward-thinking financial institutions</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
          {logos.map((name) => (
            <div key={name} className="text-[#333333]/70 border border-[#EAEAEA] rounded-md px-4 py-3 w-full text-center">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;


