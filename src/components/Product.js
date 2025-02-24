import Image from 'next/image';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useContext } from 'react';
import { CartContext } from '@/CartContext';
import { WishlistContext } from '@/WishlistContext';

const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const { wishlist, setWishlist } = useContext(WishlistContext);

  const fetchCart = async () => {
    try {
      const response = await axios.get("https://ecommerce.ahmedgamaldev.com/api/cart", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token_app")}`
        }
      });
      setCart(response.data.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const fetchWishlist = async () => {
    try {
      const response = await axios.get("https://ecommerce.ahmedgamaldev.com/api/wishlist", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token_app")}`
        }
      });
      setWishlist(response.data.data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  const handleaddtocart = async (product_id) => {
    await axios.post("https://ecommerce.ahmedgamaldev.com/api/cart/store", {
      "product_id": product_id,
      "quantity": 1
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token_app")}`
      },
    });

    fetchCart();
    Swal.fire({
      title: 'Success',
      text: 'تم اضافة المنتج بنجاح',
      icon: 'success',
      timer: 1500,
      confirmButtonText: 'إغلاق'
    });
  };

  const handleaddtowishlist = async (product_id) => {
    await axios.post("https://ecommerce.ahmedgamaldev.com/api/wishlist/store", {
      "product_id": product_id,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token_app")}`
      },
    });

    fetchWishlist();
    Swal.fire({
      title: 'Success',
      text: 'تم اضافة المنتج للمفضلة بنجاح',
      icon: 'success',
      timer: 1500,
      confirmButtonText: 'إغلاق'
    });
  };

  const { id, title, price, salePrice, gallery } = product;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image Swiper */}
      <div className="relative h-48">
        {gallery != null && gallery.length > 0 ? (
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="h-full"
          >
            {gallery.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={"https://ecommerce.ahmedgamaldev.com/public/app/"+image.image_url}
                  alt={`${title} - Image ${index + 1}`}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img src="./about.webp" className='img-product' alt="Placeholder" />
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        {/* Price and Sale Price */}
        <div className="flex items-center gap-2 mb-4">
          {salePrice ? (
            <>
              <span className="text-xl font-bold text-gray-800">${salePrice}</span>
              <span className="text-sm text-gray-500 line-through">${price}</span>
            </>
          ) : (
            <span className="text-xl font-bold text-gray-800">${price}</span>
          )}
        </div>

        {/* Add to Cart and Wishlist Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleaddtocart(id)}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex-1"
          >
            <FaShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
          <button onClick={() => handleaddtowishlist(id)} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300">
            <FaHeart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
