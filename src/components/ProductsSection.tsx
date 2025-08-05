import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProductsSection = () => {
  const products = [
    {
      title: "ByteCube Insight™",
      description: "A comprehensive risk management platform for investment banks."
    },
    {
      title: "ByteCube Automate™",
      description: "An AI agent for automating compliance checks and generating reports."
    }
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Flagship Products
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-card-foreground">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-lg">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;