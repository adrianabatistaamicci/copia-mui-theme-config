import { SVGProps } from 'react';
import LogoDefault from '../../assets/img/Logo-Default.svg'; 
import LogoWhite from '../../assets/img/Logo-White.svg';
import MiniDefault from '../../assets/img/Logo-Mini-Default.svg';
import MiniWhite from '../../assets/img/Logo-Mini-White.svg';

interface AmicciBrandProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  color?: 'default' | 'white';
  variant?: 'full' | 'mini';
}

const AmicciBrand = ({
  color = 'default',
  variant = 'full',
  ...props
}: AmicciBrandProps) => {
  const logoMapping = {
    default: {
      full: LogoDefault,
      mini: MiniDefault,
    },
    white: {
      full: LogoWhite,
      mini: MiniWhite,
    },
  };


  const selectedLogo_src = logoMapping[color][variant];

  return <img src={selectedLogo_src} {...props} />;
};

export default AmicciBrand;
