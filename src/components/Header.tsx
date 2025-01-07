import Link from "next/link";
import { useRouter } from "next/router";
import { Link as LinkSpa } from "react-router-dom";

export function HeaderSpa() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <div className="text-gray-700">Next.js 靜態頁面路徑</div>
            <Link
              href={"/"}
              className="text-blue-700 hover:text-blue-900 underline"
            >
              回到 Next.js 首頁
            </Link>
            <Link
              href={"/product"}
              className="text-blue-700 hover:text-blue-900 underline"
            >
              商品
            </Link>
          </div>
          <div className="flex space-x-8 items-center">
            <div className="text-gray-700">SPA路徑</div>
            <LinkSpa
              to={pathname}
              className="text-blue-700 hover:text-blue-900 underline"
            >
              首頁
            </LinkSpa>
            <LinkSpa
              to={pathname + "/about"}
              className="text-blue-700 hover:text-blue-900 underline"
            >
              關於
            </LinkSpa>
            <LinkSpa
              to={pathname + "/contact"}
              className="text-blue-700 hover:text-blue-900 underline"
            >
              聯絡
            </LinkSpa>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function HeaderNext() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <div className="text-gray-700">Next.js 靜態頁面路徑</div>
            <Link
              href={"/"}
              className="text-blue-700 hover:text-blue-900 underline"
            >
              回到 Next.js 首頁
            </Link>
            <Link
              href={"/product"}
              className="text-blue-700 hover:text-blue-900 underline"
            >
              商品
            </Link>
          </div>
          <div className="flex space-x-8 items-center">
            <div className="text-gray-700">SPA路徑</div>
            <Link
              href={pathname}
              className="text-blue-700 hover:text-blue-900 underline"
            >
              首頁
            </Link>
            <Link
              href={pathname + "/about"}
              className="text-blue-700 hover:text-blue-900 underline"
            >
              關於
            </Link>
            <Link
              href={pathname + "/contact"}
              className="text-blue-700 hover:text-blue-900 underline"
            >
              聯絡
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
