import { AiImagery, AnimeStore, ChatAi, FinanceDashboard, Portfolio, SignUp, SocialMedia, mernDashboard, threeDShirt } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div>
    <p className="text-red-950 text-3xl mb-16 font-extrabold">Dashboard</p>

    <div className="grid lg:grid-cols-3 gap-5 mb-16">
      <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://jay-lee-portfolio.netlify.app" target="_blank" >
        <Image src={Portfolio} alt="portfolio" className="h-60" />
        </Link>
        <p>My Portfolio</p>
      </div>
      <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://github.com/7Jay-Lee7/Jays-3D-Ai-Shirt-Designer" target="_blank" >
        <Image src={threeDShirt} alt="3d shirt" className="h-60" />
        </Link>
        <p>My 3D AI Shirt Designer</p>
      </div>
      <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://github.com/7Jay-Lee7/MERN-Dashboard" target="_blank" >
        <Image src={mernDashboard} alt="Mern Dashboard" className="h-60" />
        </Link>
        <p>My MERN Dashboard</p>
      </div>
    </div>
    <div className="grid lg:grid-cols-3 gap-5 mb-16">
    <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://github.com/7Jay-Lee7/MERN-Social-Media" target="_blank" >
        <Image src={SocialMedia} alt="Social Media" className="h-60" />
        </Link>
        <p>My CodeConnect Social Media App</p>
      </div>
    <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://github.com/7Jay-Lee7/AI-Imagery" target="_blank" >
        <Image src={AiImagery} alt="AI Imagery" className="h-60" />
        </Link>
        <p>My AI Image Generator</p>
      </div>
      <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://github.com/7Jay-Lee7/Anime-Store" target="_blank" >
        <Image src={AnimeStore} alt="Anime Store" className="h-60" />
        </Link>
        <p>My Anime themed store</p>
      </div>
      </div>
    <div className="grid lg:grid-cols-3 gap-5 mb-16">
    <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://github.com/7Jay-Lee7/Financial-Dashboard" target="_blank" >
        <Image src={FinanceDashboard} alt="Financial Dashboard" className="h-60" />
        </Link>
        <p>My Financial Dashboard</p>
      </div>
      <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://github.com/7Jay-Lee7/Chat-Ai" target="_blank" >
        <Image src={ChatAi} alt="Chat AI" className="h-60" />
        </Link>
        <p>My Chat AI App</p>
      </div>
      <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://7jay-lee7.github.io/Sign-Up-Form/" target="_blank" >
        <Image src={SignUp} alt="Sign Up Form" className="h-60" />
        </Link>
        <p>My Odin Sign-Up Form</p>
      </div>
    </div>
  </div>
  )
}