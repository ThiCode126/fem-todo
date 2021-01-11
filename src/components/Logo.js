import * as React from "react";

function SvgLogo(props) {
  return (
    <svg
      width={109}
      height={20}
      fill="none"
      className="logo-img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.027 10.027c0-1.773.447-3.431 1.343-4.974a10.15 10.15 0 013.643-3.683A9.575 9.575 0 0135 0c1.79 0 3.453.457 4.987 1.37a10.363 10.363 0 013.67 3.683 9.598 9.598 0 011.37 4.974 9.554 9.554 0 01-1.37 5 10.216 10.216 0 01-3.67 3.63A9.72 9.72 0 0135 20c-1.809 0-3.475-.448-5-1.343a10.038 10.038 0 01-3.63-3.63c-.896-1.525-1.343-3.192-1.343-5zM13.19.213v3.723h-4.76v15.851H4.574V3.937H0V.212h13.191zm16.636 12.952a6.272 6.272 0 01-.811-3.138c0-1.17.266-2.234.798-3.192a6.072 6.072 0 012.167-2.274c.913-.558 1.929-.838 3.046-.838 1.117 0 2.132.28 3.045.838a6.072 6.072 0 012.167 2.274c.532.958.798 2.021.798 3.192 0 1.152-.257 2.203-.771 3.151a5.929 5.929 0 01-2.128 2.26 5.606 5.606 0 01-3.005.839c-1.135 0-2.168-.28-3.098-.838a6.107 6.107 0 01-2.208-2.274zM58.857.213h5.85c2.5 0 4.557.483 6.17 1.45 1.614.966 2.789 2.216 3.525 3.75a11.258 11.258 0 011.103 4.933c0 1.88-.443 3.537-1.33 4.973a8.935 8.935 0 01-3.577 3.311c-1.498.772-3.142 1.157-4.933 1.157h-6.809V.213zM69.76 14.52c-1.17 1.029-2.757 1.543-4.761 1.543h-2.287V3.91h3.138c.763 0 1.574.177 2.434.531.86.355 1.613.993 2.26 1.915.647.922.971 2.164.971 3.724 0 1.932-.585 3.413-1.755 4.441zm18.377-4.494c0-1.773.448-3.431 1.343-4.974a10.15 10.15 0 013.644-3.683A9.575 9.575 0 0198.112 0c1.79 0 3.453.457 4.986 1.37a10.37 10.37 0 013.671 3.683 9.598 9.598 0 011.369 4.974c0 1.808-.456 3.475-1.369 5a10.223 10.223 0 01-3.671 3.63A9.716 9.716 0 0198.112 20c-1.809 0-3.475-.448-5-1.343a10.038 10.038 0 01-3.63-3.63c-.896-1.525-1.344-3.192-1.344-5zm4.787-3.192c-.531.958-.797 2.021-.797 3.192 0 1.134.27 2.18.81 3.138a6.107 6.107 0 002.208 2.274c.931.558 1.964.838 3.099.838 1.099 0 2.101-.28 3.005-.838a5.938 5.938 0 002.128-2.26c.514-.95.771-2 .771-3.152 0-1.17-.266-2.234-.798-3.192a6.072 6.072 0 00-2.167-2.274c-.914-.558-1.929-.838-3.046-.838-1.117 0-2.132.28-3.045.838a6.072 6.072 0 00-2.168 2.274z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgLogo;
