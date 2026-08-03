import { CSSProperties } from "react";
import Image from "next/image";

interface PropsType {
  src: string;
  altText?: string;
  size?: number;
  imgWrapperStyle?: CSSProperties;
}

const CirclePhotoCard = (props: PropsType) => {
  const { src, altText, size = 62, imgWrapperStyle } = props;

  return (
    <div style={imgWrapperStyle ? imgWrapperStyle : undefined}>
      <Image
        src={src}
        alt={altText ? altText : ""}
        width={size}
        height={size}
        unoptimized
        style={{ objectFit: "cover", borderRadius: "50%" }}
      />
    </div>
  );
};
export default CirclePhotoCard;
