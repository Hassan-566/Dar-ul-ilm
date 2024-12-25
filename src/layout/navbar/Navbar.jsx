// import { NavLink, useLocation } from "react-router-dom";
// import { RxDividerHorizontal } from "react-icons/rx";
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Icon from "../../assets/Quran-Pak-Teacher-icon.png";
// import Container from "../Container"; // Import the Container component

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Courses", href: "/courses" },
//   { name: "Monthly Fee", href: "/fee" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const Navbar = () => {
//   const location = useLocation(); // Get the current location

//   return (
//     <div>
//       <Disclosure as="nav" className="fixed top-0 w-full bg-b3843c z-50">
//         <div className="w-full">
//           {/* Use the Container to constrain content */}
//           <Container>
//             <div className="relative flex h-[6rem] items-center">
//               {/* Mobile Menu Button */}
//               <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
//                 <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <Bars3Icon
//                     aria-hidden="true"
//                     className="block h-6 w-6 group-data-[open]:hidden"
//                   />
//                   <XMarkIcon
//                     aria-hidden="true"
//                     className="hidden h-6 w-6 group-data-[open]:block"
//                   />
//                 </DisclosureButton>
//               </div>

//               {/* Logo */}
//               <div className="flex flex-1 items-center">
//                 <a
//                   href="https://quranpakteacher.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     alt="Your Company"
//                     src={Icon}
//                     className="h-14 sm:h-12 w-auto"
//                   />
//                 </a>
//               </div>

//               {/* Navigation Links */}
//               <div className="hidden md:flex sm:space-x-4 lg:ml-auto">
//                 {navigation.map((item) => (
//                   <NavLink
//                     key={item.name}
//                     to={item.href}
//                     aria-current={
//                       location.pathname === item.href ? "page" : undefined
//                     }
//                     className={classNames(
//                       location.pathname === item.href
//                         ? "bg-white text-black"
//                         : "text-white hover:text-black active:bg-white active:text-black",
//                       "rounded-md px-3 py-2 text-md font-medium text-[1.3rem] flex items-center flex-col"
//                     )}
//                   >
//                     {item.name}
//                   </NavLink>                                    
//                 ))}
//               </div>
//             </div>
//           </Container>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         <DisclosurePanel className="absolute top-full left-0 w-full bg-b3843c md:hidden">
//           <div className="space-y-1 px-2 pb-3 pt-2">
//             {navigation.map((item) => (
//               <DisclosureButton
//                 key={item.name}
//                 as="a"
//                 href={item.href}
//                 aria-current={item.current ? "page" : undefined}
//                 className={classNames(
//                   location.pathname === item.href
//                     ? "bg-white text-black"
//                     : "text-white hover:bg-white hover:text-black",
//                   "block rounded-md px-3 py-2 text-base font-medium"
//                 )}
//               >
//                 {item.name}
//               </DisclosureButton>
//             ))}
//           </div>
//         </DisclosurePanel>
//       </Disclosure>

//       {/* Add padding to content to prevent it from being hidden under the navbar */}
//       <div className="pt-[6rem]">{/* Main Content */}</div>
//     </div>
//   );
// };

// export default Navbar;




import { NavLink, useLocation } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Icon from "../../assets/Quran-Pak-Teacher-icon.png";
import Container from "../Container";  // Import the Container component

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Monthly Fee", href: "/fee" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const location = useLocation(); // Get the current location


  return (

    <div className="">
      {/* Full-width background (can be color or image) */}
      <Disclosure as="nav" className="nav-disclosure bg-b3843c md:h-auto">
        <div className="w-full bg-b3843c">
          {/* Use the Container to constrain content */}
          <Container>
            <div className="nav-InnerParent relative flex h-[6rem] md:mx-5">
              <div className="nav-MenuParent absolute inset-y-0 right-0 flex items-center sm:hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center lg:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>

              <div className="flex flex-1 inset-y-0 top-0 md:flex md:flex-1 md:inset-y-0 md:top-0 lg:flex lg:align-middle lg:items-center lg:justify-center">
                <div className="nav-logoContainer flex flex-shrink-0 inset-y-0 left-0 items-center md:flex md:flex-shrink-0 md:inset-y-0 md:left-0 md:items-center ">
                  <a
                    href="https://quranpakteacher.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Your Company"
                      src={Icon}
                      className="h-10 sm:h-12 w-auto lg:h-14"
                    />
                  </a>
                </div>

                {/* Navigation Links */}
                <div className="nav-linkContainer md:hidden hidden lg:flex lg:items-center lg:pl-44 xl:pl-96 sm:ml-6 sm:flex sm:items-center">
                  <div className="nav-linkDivider flex space-x-3 lg:space-x-5 ">
                    {navigation.map((item) => (
                      <NavLink
                      key={item.name}
                      to={item.href}
                      aria-current={
                        location.pathname === item.href ? "page" : undefined
                      }
                      className={classNames(
                        location.pathname === item.href
                          ? "bg-white text-black"
                          : "text-white hover:text-black active:bg-white active:text-black",
                        "rounded-md px-3 py-2 text-md font-medium text-[1.3rem] whitespace-nowrap md:inset-y-0 md:text-[19px] md:font-semibold"
                      )}
                    >
                      {item.name}
                    </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Mobile Dropdown Menu */}
        <DisclosurePanel className="sm:hidden absolute left-0 w-full bg-b3843c md:block lg:hidden">
          <div className="nav-hamMenu space-y-1 px-2 pb-11 flex flex-col items-left justify-center md:h-[300px] md:space-y-1 md:px-2 md:pb-3 md:pt-2 md:flex md:flex-col md:items-left md:justify-center">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-white text-black"
                    : "text-white hover:bg-white hover:text-black",
                  "block rounded-md px-3 py-2 text-base font-medium",
                  "md:block lg:hidden md:rounded-md md:px-3 md:py-2 md:text-base md:font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>


    // <div>
    //   <Disclosure as="nav" className="nav-disclosure bg-b3843c md:h-auto">
    //     <div className="nav-parentMain mx-auto max-w-7xl px-2 ">
    //       {/* md:h-auto md:p-3 lg:h-auto lg:p-3 items-center justify-between */}
    //       <div className="nav-InnerParent relative flex h-[6rem] md:mx-5">
    //         <div className="nav-MenuParent absolute inset-y-0 right-0 flex items-center sm:hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center lg:hidden">
    //           {/* Mobile menu button */}
    //           <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //             <Bars3Icon
    //               aria-hidden="true"
    //               className="block h-6 w-6 group-data-[open]:hidden"
    //             />
    //             <XMarkIcon
    //               aria-hidden="true"
    //               className="hidden h-6 w-6 group-data-[open]:block"
    //             />
    //           </DisclosureButton>
    //         </div>
    //         <div className="flex flex-1 inset-y-0 top-0  md:flex md:flex-1 md:inset-y-0 md:top-0 lg:flex lg:align-middle lg:items-center lg:justify-center">
    //           <div className="nav-logoContainer flex flex-shrink-0 inset-y-0 left-0 items-center md:flex md:flex-shrink-0 md:inset-y-0 md:left-0 md:items-center ">
    //             <a
    //               href="https://quranpakteacher.com/"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //             >
    //               <img
    //                 alt="Your Company"
    //                 src={Icon}
    //                 className="h-14 sm:h-12 w-auto lg:h-14"
    //               />
    //             </a>
    //           </div>
    //           {/* nav-linkContainer hidden lg:ml-40 sm:ml-6 sm:block */}
    //           <div className="nav-linkContainer md:hidden hidden lg:flex lg:items-center lg:pl-44 xl:pl-96 sm:ml-6 sm:flex sm:items-center">
    //             <div className="nav-linkDivider flex space-x-3 lg:space-x-5 ">
    //               {navigation.map((item) => (
    //                 <NavLink
    //                   key={item.name}
    //                   to={item.href}
    //                   aria-current={
    //                     location.pathname === item.href ? "page" : undefined
    //                   }
    //                   className={classNames(
    //                     location.pathname === item.href
    //                       ? "bg-white text-black"
    //                       : "text-white  hover:text-black active:bg-white active:text-black",
    //                     "rounded-md px-3 py-2 text-md font-medium text-[1.3rem] md:inset-y-0 md:text-[19px] md:font-semibold "
    //                   )}
    //                 >
    //                   {item.name}
    //                 </NavLink>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Dropdown below the navbar */}
    //     <DisclosurePanel className="sm:hidden absolute left-0 w-full bg-b3843c md:block lg:hidden  md:absolute md:left-0 md:w-full md:bg-b3843c">
    //       <div className="nav-hamMenu h-[300px] space-y-1 px-2 pb-3 pt-2 flex flex-col items-left justify-center md:h-[300px] md:space-y-1 md:px-2 md:pb-3 md:pt-2 md:flex md:flex-col md:items-left md:justify-center">
    //         {navigation.map((item) => (
    //           <DisclosureButton
    //             key={item.name}
    //             as="a"
    //             href={item.href}
    //             aria-current={item.current ? "page" : undefined}
    //             className={classNames(
    //               item.current
    //                 ? "bg-white text-black"
    //                 : "text-white hover:bg-white hover:text-black",
    //               "block rounded-md px-3 py-2 text-base font-medium",
    //               "md:block lg:hidden md:rounded-md md:px-3 md:py-2 md:text-base md:font-medium"
    //             )}
    //           >
    //             {item.name}
    //           </DisclosureButton>
    //         ))}
    //       </div>
    //     </DisclosurePanel>
    //   </Disclosure>
    // </div>
  );
};

export default Navbar;