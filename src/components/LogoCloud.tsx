import Image from 'next/image'

interface Logo {
    id: string;
    href: string;
    name?: string;
}

interface LogoCloudData {
    logos: Logo[];
}

const logoCloud: LogoCloudData = {
    logos: [
        {
            id: '1',
            href: '/images/logo1.gif',
        },
        {
            id: '4',
            href: '/images/logo2.png',
        },
        {
            id: '6',
            href: '/images/logo3.png',

        },
        {
            id: '8',
            href: '/images/logo5.png',

        },
        {
            id: '9',
            href: '/images/logo6.png',

        },
        {
            id: '10',
            href: '/images/logo8.jpg',

        },
    ]
}

export default function LogoCloud(): JSX.Element {




    return (
        <div className="bg-white py-24 ">
            <div className="container mx-auto px-4  my-12  lg:px-8">
                <p className="text-2xl font-extrabold text-center text-blue-700 mb-8 sm:tracking-tight lg:text-4xl">
                    Trusted by over six institutions
                </p>
                <div className="mt-12 grid grid-cols-3 gap-8 lg:gap-12 md:grid-cols-6 lg:mt-20">
                    {logoCloud.logos.map((logo) => (
                        <div key={logo.id} className="shadow-lg rounded-lg p-2 bg-gray-50">
                            <Image
                                className="h-full w-full object-contain "
                                src={logo.href}
                                alt={logo.name || 'Partner logo'}
                                width={400} height={400}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
