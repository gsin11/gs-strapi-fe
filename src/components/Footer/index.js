import Link from "next/link";

function Footer({ navLinks }) {
  return (
    <div className="text-black flex flex-col items-center f-f-l pt-3 border-t-2">
      <div className="my-6 text-base text-color f-f-l">
        <ul className="flex items-center">
          {navLinks.map((o) => (
            <li className="mr-6 cursor-pointer pt-4 lg:py-0">
              <Link href={o.link}>
                <a className="focus:outline-none focus:underline hover:text-yellow-500">
                  {o.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-sm text-color mb-10 f-f-l">
        <p tabIndex="0" className="focus:outline-none text-center">
          &copy; 2021 EGGCELLENT. Made with{" "}
          <span className="text-red-600 text-lg">♥️</span> by{" "}
          <a href="https://gsin.in" className="hover:text-yellow-500">
            Gurpreet Singh
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
