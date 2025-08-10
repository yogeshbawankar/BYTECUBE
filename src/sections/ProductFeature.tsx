import { Button } from "@/components/ui/button";

const ProductFeature = () => {
  return (
    <section className="py-20" aria-labelledby="product-feature-heading">
      <div className="container mx-auto px-6">
        <div className="rounded-[28px] md:rounded-[32px] p-6 md:p-10 bg-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h3 id="product-feature-heading" className="text-2xl md:text-3xl font-bold">ByteCube Opus 4.1</h3>
              <p className="text-muted-foreground">Advanced models designed for high-stakes financial reasoning and operational reliability.</p>
              <Button asChild variant="outline">
                <a href="/announcements/bytecube-opus-4-1">Read announcement →</a>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-background border border-black/10 p-4">
                <div className="text-sm text-muted-foreground">Model</div>
                <div className="text-lg font-semibold">Opus 4.1</div>
              </div>
              <div className="rounded-2xl bg-background border border-black/10 p-4">
                <div className="text-sm text-muted-foreground">Model</div>
                <div className="text-lg font-semibold">Sonnet 4.1</div>
              </div>
              <div className="rounded-2xl bg-background border border-black/10 p-4">
                <div className="text-sm text-muted-foreground">Model</div>
                <div className="text-lg font-semibold">Haiku 4.1</div>
              </div>
              <div className="rounded-2xl bg-background border border-black/10 p-4">
                <div className="text-sm text-muted-foreground">Model</div>
                <div className="text-lg font-semibold">Modal 1.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;


