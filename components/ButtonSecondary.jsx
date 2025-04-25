import Link from "next/link";

export default function ButtonSecondary({ text }) {
  return (
    <Link
      href="/"
      className="py-2 px-6 hover:bg-blue font-medium bg-darkBlue text-[#ECF3FF] rounded-full transition duration-300"
    >
      {text}
    </Link>
  );
}
