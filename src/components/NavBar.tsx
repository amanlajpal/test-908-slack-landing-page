import Image from "next/image";
import slackLogo from "../../public/slack-logo.png";
import { CiSearch } from "react-icons/ci";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center py-2">
        <ul className="flex gap-10 items-center font-medium">
          <Image src={slackLogo} width={100} height={100} alt="Slack Logo" />
          <li>
            <select name="products">
              <option value="">Product</option>
              <option value="Channels">Channels</option>
              <option value="Clips">Clips</option>
              <option value="Huddles">Huddles</option>
            </select>
          </li>
          <li>Enterprise</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
        <div className="flex gap-10 items-center font-medium">
          <CiSearch size={25} />
          <button>Sign in</button>
          <div className="flex gap-6">
            <button className="text-[#4d154a] border-2 border-[#4d154a] px-2.5 py-2 rounded-md">
                TALK TO SALES
            </button>
            <button
                className="bg-[#4d154a] text-white px-3 py-2.5 rounded-md"
            >
                TRY FOR FREE
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
