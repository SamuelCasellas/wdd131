let currentNumReviews = JSON.parse(getStorage('review-count') || 0);
setStorage('review-count', JSON.stringify(currentNumReviews + 1));
