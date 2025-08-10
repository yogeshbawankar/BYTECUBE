import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, CheckSquare } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      title: "ByteCube Insight™",
      description: "A comprehensive risk management platform for investment banks.",
      icon: Search,
      to: "/product/insight",
    },
    {
      title: "ByteCube Automate™",
      description: "An AI agent for automating compliance checks and generating reports.",
      icon: CheckSquare,
      to: "/product/automate",
    },
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-serifhead">
            Our Flagship Products
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-card border-0 shadow-md hover:shadow-xl transition-all duration-200 p-6 flex flex-col justify-between"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <product.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <CardTitle className="text-2xl font-semibold text-card-foreground">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <CardDescription className="text-muted-foreground leading-relaxed text-lg">
                  {product.description}
                </CardDescription>
                <div>
                  <Button asChild size="lg" className="font-semibold">
                    <Link to={product.to}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;