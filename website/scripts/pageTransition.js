function delay(n) {
    n = n || 2000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, n);
    });
  }
    
  
    function pageTransition() {
    
      var pt = gsap.timeline();
    
      pt.to(".loading-screen", {
    
          duration: 0.5,
          width: "100%",
          left: "0%",
          ease: "Expo.easeInOut"
      });
    
      pt.to(".loading-screen", {
          duration: 1.2,
          width: "100%",
          left: "100%",
          ease: "Expo.easeInOut",
          delay: 0.3
      });
    
      pt.set(".loading-screen", { right: "-100%" });
    } 
  
    barba.init({
      // logLevel: 'error',
      sync: false,
    
      transitions: [{
    
    
        leave(data) {
    
          const done = this.async();
    
          pageTransition();
          delay(1000)
          done();
        },
  
        // async beforeEnter(data) {
  
        // }
        // async enter(data) {
        //   contentAnimation();
        // },
  
        // async once(data) {
        //   contentAnimation()
        // }
    
  
      }]
    })
  
  
  
    $(function() {
  
    });