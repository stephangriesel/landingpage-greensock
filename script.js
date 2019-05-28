TweenMax.to(".title-product", 2, {
  x: 30,
  opacity: 1,
  ease: Expo.easeInOut
});

TweenMax.to(".title-main", 2, {
  delay: 0.2,
  x: -80,
  opacity: 1,
  ease: Expo.easeInOut
});

TweenMax.from(".guitar", 2, {
  delay: 1.8,
  y: -90,
  x: -40,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".box-1", 4, {
  delay: 1,
  y: -180,
  x: -240,
  rotation: 300,
  transformOrigin: "50% 50%",
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".box-2", 4, {
  delay: 1,
  y: -280,
  x: -240,
  rotation: 300,
  transformOrigin: "50% 50%",
  opacity: 0,
  ease: Expo.easeInOut
});
TweenMax.from(".box-3", 4, {
  delay: 1,
  y: 280,
  x: -140,
  rotation: 800,
  transformOrigin: "50% 50%",
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".pattern", 2, {
  delay: 0.6,
  width: 0,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".logo", 2, {
  delay: 0.6,
  y: 40,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(".menu ul li", 2, {
  delay: 0.6,
  y: 40,
  opacity: 0,
  ease: Expo.easeInOut
}, 0.1);

TweenMax.from(".cart", 2, {
  delay: 1,
  y: 40,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(".social ul li", 2, {
  delay: 2,
  y: 40,
  opacity: 0,
  ease: Expo.easeInOut
}, 0.1);

TweenMax.from(".content p", 2, {
  delay: 3,
  y: 40,
  opacity: 0,
  ease: Expo.easeInOut
});