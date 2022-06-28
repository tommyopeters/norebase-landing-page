import BrassLogo from "../../public/svgs/brass-black.svg";
import EdenLogo from "../../public/svgs/eden-green.svg";
import AltSchoolLogo from "../../public/svgs/alt-school-black.svg";
import NestcoinLogo from "../../public/svgs/nestcoin-black.svg";
import PatriciaLogo from "../../public/svgs/patricia-black.svg";

// const trustees = [
//   { name: "brass", logo: <brassLogo></brassLogo>o></brassLogo>o></brassLogo>o></brassLogo>o></brassLogo>, alt: "Brass Logo" },
//   { name: "eden", logo: edenLogo, alt: "Eden Logo" },
//   { name: "alt_school", logo: alt_schoolLogo, alt: "alt_school Logo" },
//   { name: "nestcoin", logo: nestcoinLogo, alt: "Nestcoin Logo" },
//   { name: "patricia", logo: patriciaLogo, alt: "Patricia Logo" },
// ];
// let trusteesElement = trustees.map((trustee, index) => {
//   return (
//     <div className={"image-control " + trustee.name} key={"trustee-" + index}>
//       {<img src={trustee.logo} alt={trustee.alt} />}
//     </div>
//   );
// });

export default (
  <div className="trustees">
    <BrassLogo className="brass" />
    <EdenLogo className="eden" />
    <AltSchoolLogo className="altschool" />
    <NestcoinLogo className="nestcoin" />
    <PatriciaLogo className="patricia" />
  </div>
);
