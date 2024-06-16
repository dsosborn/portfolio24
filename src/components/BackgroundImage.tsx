import imageSrc from "/public/images/tealBack5.jpg";
import classes from "./BackgroundImage.module.scss";
import Image from "next/image";

export const BackgroundImage = () => {
  return (
    <div className={classes.backgroundContainer}>
      <Image
        src={imageSrc}
        alt=""
        placeholder="blur"
        priority
        className={classes.backgroundImage}
      />
    </div>
  );
};
