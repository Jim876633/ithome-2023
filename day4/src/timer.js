
const timer = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('time out');
    }, 3000);
  });
};

export default timer;