import { FiStar } from 'react-icons/fi';

interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showEmpty?: boolean;
}

export default function StarRating({ 
  rating = 0, 
  maxRating = 5, 
  size = 'md',
  showEmpty = true
}: StarRatingProps) {
  const stars = [];
  
  // Size classes for the stars
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };
  
  // Container size classes
  const containerClasses = {
    sm: 'gap-1',
    md: 'gap-1.5',
    lg: 'gap-2'
  };
  
  // If there are no ratings and showEmpty is false, don't render anything
  if (rating === 0 && !showEmpty) {
    return null;
  }
  
  for (let i = 0; i < maxRating; i++) {
    const filled = i < rating;
    stars.push(
      <FiStar 
        key={i}
        className={`${filled ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'} ${sizeClasses[size]}`}
      />
    );
  }
  
  return (
    <div className={`flex items-center ${containerClasses[size]}`}>
      {stars}
      
      {/* Add "No Ratings Yet" text if rating is 0 */}
      {rating === 0 && (
        <span className="text-xs text-gray-400 ml-1">No Ratings Yet</span>
      )}
    </div>
  );
}