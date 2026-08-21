import { useState, useEffect } from "react";

export const useGetImages = (images: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (!images || images.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let mounted = true;
    let loadedCount = 0;

    const checkDone = () => {
      if (!mounted) return;
      loadedCount += 1;
      if (loadedCount >= images.length) setImagesLoaded(true);
    };

    const imgs: HTMLImageElement[] = images.map((src) => {
      const img = new Image();

      if (img.complete && img.naturalWidth !== 0) {
        checkDone();
      } else {
        img.onload = checkDone;
        img.onerror = checkDone;
        img.src = src;
      }

      return img;
    });

    return () => {
      mounted = false;
      imgs.forEach((i) => {
        i.onload = null;
        i.onerror = null;
      });
    };
  }, [images]);

  return !imagesLoaded;
};
