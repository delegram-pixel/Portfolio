import Image from 'next/image'
import Link from 'next/link'

interface PortfolioCardProps {
  title: string
  description: string
  image: string
  link: string
}

export function PortfolioCard({ title, description, image, link }: PortfolioCardProps) {
  return (
    <Link href={link} className="block">
      <div className="bg-zinc-800 p-4 rounded-lg transition-transform hover:scale-105 hover:shadow-lg">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold text-amber-500 mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </Link>
  )
}

