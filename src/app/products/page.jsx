import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { databaseConnect } from "@/lib/databaseConnect";
import { Star, Eye, Heart } from "lucide-react";
export async function getPencils() {
  const productCollection = await databaseConnect("pencils");
  const products = await productCollection.find({}).toArray();
  return products;
}

export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const Productpage = async () => {
  const users = await getData();
  const pencils = await getPencils();

  // Your MongoDB data - this would typically come from props or API
  const pencilData = {
    _id: {
      $oid: "68a7e7168523c0c5de7fc990",
    },
    name: "Faber-Castell 9000 HB Pencil",
    description: "Professional-grade graphite pencil for writing and drawing.",
    price: "$2.00",
    discount_price: "$1.50",
    grade: "HB",
    brand: "Faber-Castell",
    made_in: "Germany",
    rating: 4.8,
    reviews_count: 1234,
    stock_status: "In Stock",
    tags: ["graphite", "hb", "professional", "artists"],
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : i < rating
            ? "fill-yellow-200 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const handleViewMore = () => {
    // This would navigate to the full details page
    console.log(`Navigate to product details: ${pencilData._id.$oid}`);
    // Example: router.push(`/pencils/${pencilData._id.$oid}`)
  };

  const calculateDiscount = () => {
    const original = parseFloat(pencilData.price.replace("$", ""));
    const discounted = parseFloat(pencilData.discount_price.replace("$", ""));
    return Math.round(((original - discounted) / original) * 100);
  };

  return (
    <div className="w-11/12 mx-auto max-w-7xl my-5">
      <div className="grid grid-cols-4 gap-3">
        {pencils?.map((pencilData, index) => (
          <div
            key={index}
            className="max-w-xs bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden group cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative h-40 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
              {/* Pencil Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-4 bg-gradient-to-r from-green-700 to-green-600 rounded-full relative shadow-sm transform group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute right-0 w-6 h-4 bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-full"></div>
                  <div className="absolute right-1 w-1.5 h-1.5 bg-gray-800 rounded-full top-1.5"></div>
                  <div className="absolute left-1.5 top-0.5 text-[8px] text-yellow-200 font-bold">
                    FC
                  </div>
                </div>
              </div>

              {/* Discount Badge */}
              {pencilData.discount_price && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  {calculateDiscount()}% OFF
                </div>
              )}

              {/* Quick Actions */}
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                  <Heart className="w-3.5 h-3.5 text-gray-600" />
                </button>
              </div>

              {/* Stock Badge */}
              <div className="absolute bottom-2 left-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    pencilData.stock_status === "In Stock"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {pencilData.stock_status}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
              {/* Brand & Grade */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                  {pencilData.brand}
                </span>
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium">
                  {pencilData.grade}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                {pencilData.name}
              </h3>

              {/* Brief Description */}
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {pencilData.description}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-1 mb-3">
                <div className="flex">{renderStars(pencilData.rating)}</div>
                <span className="text-sm font-medium text-gray-800 ml-1">
                  {pencilData.rating}
                </span>
                <span className="text-xs text-gray-500">
                  ({pencilData.reviews_count})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    {pencilData.discount_price}
                  </span>
                  {pencilData.price !== pencilData.discount_price && (
                    <span className="text-sm text-gray-500 line-through">
                      {pencilData.price}
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  {pencilData.made_in}
                </span>
              </div>

              {/* Key Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {pencilData.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs capitalize font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {pencilData.tags.length > 2 && (
                  <span className="text-xs text-gray-500 px-2 py-1">
                    +{pencilData.tags.length - 2} more
                  </span>
                )}
              </div>

              {/* View More Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 group">
                <Eye className="w-4 h-4" />
                View More Details
                <span className="text-xs opacity-75 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productpage;
