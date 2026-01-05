import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-25 md:max-w-41.25"
        src="/lws_logo.png"
        alt="Lws"
        height={100}
        width={165}
      />
    </Link>
  )
}

export default Logo