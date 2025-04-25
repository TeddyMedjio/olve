import Link from "next/link";

export default function Button({ text }) {
  return (
    <Link
      href="/"
      className="py-2 px-6 hover:bg-darkBlue font-medium bg-blue text-[#ECF3FF] rounded-full transition duration-300"
    >
      {text}
    </Link>
  );
}
