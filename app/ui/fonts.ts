import { Inter, Lusitana } from 'next/font/google';

// 객체를 반환 여러 속성이 포함되어 있으며, 그 중 하나가 className
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({ weight: '400', subsets: ['latin'] });
