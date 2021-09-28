const loadScript = (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const RazorPayCheckout = (totalAmount) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        resolve({
          status: false,
          message: "Razorpay SDK failed to load. Are you online?",
        });
      }
      resolve();
    } catch (error) {
      reject({ status: false, ...error });
    }
  });
};
