export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline text-primary">
              The Zero. Journey to One
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Created by Prafulla
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
