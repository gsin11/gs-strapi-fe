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
        <p tabindex="0" className="focus:outline-none text-center">
          &copy; 2021 EGGCELLENT. Made with{" "}
          <span className="text-red-600 text-lg">♥️</span> by{" "}
          <a href="https://gsin.in" className="hover:text-yellow-500">
            Gurpreet Singh
          </a>
        </p>
      </div>
    </div>
  );
  /* return (
    <div className="pt-12">
      <footer id="footer" className="relative z-50 dark:bg-gray-900">
        <div
          tabIndex="0"
          aria-label="footer"
          className="focus:outline-none border-t border-b border-gray-200 dark:border-gray-700 py-16"
        >
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 mb-2 lg:mb-0 flex">
                <p>2021 EGGCELLENT - All rights Reserved</p>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <ul className="flex items-center">
                  {navLinks.map((o) => (
                    <li className="mr-6 cursor-pointer pt-4 lg:py-0">
                      <Link href={o.link}>
                        <a className="focus:outline-none focus:underline hover:text-gray-500">
                          {o.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  ); */
}

export default Footer;
