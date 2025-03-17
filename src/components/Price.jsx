import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MovingCard = ({ review, direction }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>&#9733;</span>
      );
    }
    return stars;
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between min-w-[300px] mx-4"
      initial={{ x: direction === 'left' ? -300 : 300 }}
      animate={{ x: direction === 'left' ? '100%' : '-100%' }}
      transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
    >
      <div>
        <div className="flex items-center mb-1">
          <span className="ml-2 text-gray-500">{review.timeAgo}</span>
        </div>
        <p className="text-gray-700 mb-4">{review.comment}</p>
        <div className="flex items-center mt-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-3" style={{ backgroundColor: review.avatarBg }}>
            <span>{review.initial}</span>
          </div>
          <span className="font-medium text-blue-600">{review.name}</span>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {renderStars(review.rating)}
      </div>
    </motion.div>
  );
};

const Price = () => {
  const topReviews = [
    { id: 1, name: "Joy Teboho", initial: "J", timeAgo: "5 months ago", comment: "The customer service was outstanding, and the product was exactly what I was looking for. I was so pleased with the service I received from this business. They went above and beyond to help me find...", avatarBg: "#00b0ff", rating: 5 },
    { id: 2, name: "Mollfi Ntje", initial: "M", timeAgo: "5 months ago", comment: "Outstanding service and turn around time for fixing my laptop was very quick.", avatarBg: "#5e72e4", rating: 5 },
    { id: 3, name: "Thabang Mabotja", initial: "T", timeAgo: "4 months ago", comment: "Efficient and punctual was happy with the service...", avatarBg: "#f5f5f5", rating: 4 },
  ];

  const bottomReviews = [
    { id: 4, name: "Korundum Lodge", initial: "K", timeAgo: "2 years ago", comment: "Looking forward to doing business with this young and fresh computer company, that is showing a keen interest in delivering I.T. Services to customers.", avatarBg: "#ff9800", rating: 4 },
    { id: 5, name: "John Doe", initial: "J", timeAgo: "1 year ago", comment: "Great experience with the team and the services provided.", avatarBg: "#4caf50", rating: 5 },
    { id: 6, name: "Jane Smith", initial: "J", timeAgo: "6 months ago", comment: "Very professional and timely service. Highly recommended!", avatarBg: "#9c27b0", rating: 5 },
  ];

  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 0 });
  const [allReviews, setAllReviews] = useState([...topReviews, ...bottomReviews]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: allReviews.length + 1,
      name: newReview.name,
      initial: newReview.name.charAt(0),
      timeAgo: "Just now",
      comment: newReview.comment,
      avatarBg: "#" + Math.floor(Math.random()*16777215).toString(16),
      rating: newReview.rating
    };
    setAllReviews([...allReviews, review]);
    setNewReview({ name: '', comment: '', rating: 0 });
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="text-center mb-8">
          <span className="text-4xl font-bold">4.8</span>
          <div className="flex justify-center mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-2xl text-yellow-400">&#9733;</span>
            ))}
          </div>
          <span className="text-gray-600">6 reviews</span>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex space-x-6">
            {topReviews.map(review => (
              <div key={review.id} className="min-w-[300px]">
                <MovingCard review={review} direction="left" />
              </div>
            ))}
            {topReviews.map(review => (
              <div key={`duplicate-${review.id}`} className="min-w-[300px]">
                <MovingCard review={review} direction="left" />
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden mt-8">
          <div className="flex space-x-6">
            {bottomReviews.map(review => (
              <div key={review.id} className="min-w-[300px]">
                <MovingCard review={review} direction="right" />
              </div>
            ))}
            {bottomReviews.map(review => (
              <div key={`duplicate-${review.id}`} className="min-w-[300px]">
                <MovingCard review={review} direction="right" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Write a Review</h3>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Comment</label>
              <textarea
                name="comment"
                value={newReview.comment}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Rating</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-2xl cursor-pointer ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    onClick={() => handleRatingChange(star)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Price;