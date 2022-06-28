const myLoader = ({ src, width, quality }) => {
  return `https://tdev-norebase-app.azurewebsites.net${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default myLoader;
