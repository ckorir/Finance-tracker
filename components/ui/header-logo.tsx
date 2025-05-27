import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image
          src="/logo.svg"
          width={28}
          height={28}
          alt="Finance Tracker Logo"
          priority={true}
          quality={85}
          loading="eager"
        />
        <p className="font-semibold text-white text-2xl ml-2.5">
          Finance
        </p>
      </div>
    </Link>
  );
}

