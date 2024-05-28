import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="flex justify-between px-10 py-5 w-full shadow">
        <h1 className="text-3xl font-semibold text-red-600">
          <Link href="/">Serfect</Link>
        </h1>
        <div className="w-6/12 flex justify-end">
          <ul className="flex items-center justify-end gap-7 w-full">
            <li className="hover:underline hover:text-red-600">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline hover:text-red-600">
              <Link href="/team">Team</Link>
            </li>
            <li className="hover:underline hover:text-red-600">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
