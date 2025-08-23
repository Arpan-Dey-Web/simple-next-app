import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Zap,
  Award,
  ArrowRight,
  Star,
  Palette,
  Edit3,
} from "lucide-react";




const Hero = () => {
  const products = [
    {
      id: 1,
      title: "Premium Graphite Collection",
      description:
        "Professional-grade graphite pencils for artists and designers",
      image: "🎨",
      price: "$24.99",
      rating: 4.9,
      features: ["9H to 9B range", "Break-resistant lead", "Ergonomic grip"],
      category: "Professional",
    },
    {
      id: 2,
      title: "Colored Pencil Set",
      description: "Vibrant colors that blend seamlessly for stunning artwork",
      image: "🌈",
      price: "$39.99",
      rating: 4.8,
      features: [
        "120 unique colors",
        "Lightfast pigments",
        "Smooth application",
      ],
      category: "Artistic",
    },
    {
      id: 3,
      title: "Mechanical Precision",
      description: "Engineering-grade mechanical pencils for technical drawing",
      image: "⚙️",
      price: "$18.99",
      rating: 4.7,
      features: ["0.3mm to 0.9mm leads", "Metal construction", "Refillable"],
      category: "Technical",
    },
    {
      id: 4,
      title: "Eco-Friendly Series",
      description: "Sustainable pencils made from recycled materials",
      image: "🌿",
      price: "$16.99",
      rating: 4.6,
      features: ["100% recycled wood", "Non-toxic finish", "Biodegradable"],
      category: "Eco",
    },
    {
      id: 5,
      title: "Watercolor Pencils",
      description:
        "Transform your drawings into beautiful watercolor paintings",
      image: "💧",
      price: "$32.99",
      rating: 4.9,
      features: ["Water-soluble", "Intense pigmentation", "Blendable colors"],
      category: "Watercolor",
    },
    {
      id: 6,
      title: "Sketching Essentials",
      description: "Perfect starter set for budding artists and sketchers",
      image: "✏️",
      price: "$12.99",
      rating: 4.5,
      features: ["HB, 2B, 4B, 6B", "Smudge-resistant", "Comfortable grip"],
      category: "Beginner",
    },
  ];
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 min-h-[80vh] flex items-center">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute top-20 right-20 w-96 h-96 bg-yellow-300/20 rounded-full blur-2xl animate-bounce"
              style={{ animationDuration: "13s" }}
            ></div>
            <div
              className="absolute bottom-10 left-1/3 w-64 h-64 bg-pink-400/15 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Badge className="px-4 py-2 bg-white/20 text-white border-white/30 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Premium Quality Since 1995
                </Badge>
              </div>
              <div className="">
                <h1
                  className={`text-6xl md:text-8xl font-bold text-white mb-6 leading-tight typefont`}
                >
                  Write Your
                </h1>
                <div className=" block ">
                  <h1 className="text-6xl md:text-8xl bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent font-bold mb-6 typefont ">
                    Story
                  </h1>

                  <div className="absolute top-15 right-0">
                    <img
                      className=" h-96 w-96"
                      src="https://i.ibb.co.com/21D2mwBS/4231-removebg-preview.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Discover the perfect pencil for every creative moment. From
                professional artwork to everyday writing, we craft tools that
                bring your ideas to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white  hover:bg-white text-purple-700 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="flex justify-center gap-12 mt-16 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold">500K+</div>
                  <div className="text-white/80">Happy Artists</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-white/80">Premium Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-white/80">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Create
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {" "}
                Something Amazing?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join thousands of artists, designers, and creators who trust our
              pencils to bring their visions to life.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold px-12 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Start Your Journey
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </section> */}

        {/* Products Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200 mb-4">
                <Award className="w-4 h-4 mr-2" />
                Our Products
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Crafted for
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Excellence
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each pencil is meticulously designed and tested to deliver the
                perfect balance of performance, durability, and comfort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden `}
                >
                  <CardHeader className="relative pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {product.image}
                      </div>
                      <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
                        {product.category}
                      </Badge>
                    </div>

                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                      {product.title}
                    </CardTitle>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-current"
                                : ""
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({product.rating})
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <CardDescription className="text-gray-600 mb-6 text-base leading-relaxed">
                      {product.description}
                    </CardDescription>

                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900">
                        {product.price}
                      </span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-200 text-purple-700 hover:bg-purple-50"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-blue-200 text-blue-700 hover:bg-blue-50"
                        >
                          <Palette className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                      View More Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Create
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {" "}
                Something Amazing?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join thousands of artists, designers, and creators who trust our
              pencils to bring their visions to life.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold px-12 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Start Your Journey
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Hero;
