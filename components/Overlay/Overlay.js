import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logoOverlay from '../../public/img/logoOverlay.png'
import logoMark from '../../public/img/logoMark.png'

function Overlay({ overlay, setOverlay }) {
	const { locale, pathname } = useRouter();

	const toggleOverlay = () => {
		setOverlay(!overlay);
	};


	return (
		<div className='h-screen w-screen bg-belorange relative p-1 overflow-hidden'>
			<img src={'/img/logoMark.png'} alt="belong paris" className='h-screen mx-auto lg:hidden' />
			<img src={'/img/logoOverlay.png'} alt="belong paris" className='h-screen p-3 mx-auto top-[50%] hidden lg:block' />
			<div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
				<div className='flex flex-cols lg:flez-row justify-between items-center'>
					<Link href={`${pathname}`} locale={'fr'}>
						<a
							onClick={toggleOverlay}
							className='overlayButton lg:inline lg:m-10 font-messapia text-sm uppercase lg:scale-150 hover:text-belvert hover:bg-belviolet hover:border-transparent'
						>
							Français
						</a>
					</Link>
					<Link href={`${pathname}`} locale={'en'} onClick={toggleOverlay}>
						<a
							onClick={toggleOverlay}
							className='overlayButton lg:inline lg:m-10 font-messapia text-sm uppercase lg:scale-150 hover:text-belvert hover:bg-belviolet hover:border-transparent'
						>
							English
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Overlay;
