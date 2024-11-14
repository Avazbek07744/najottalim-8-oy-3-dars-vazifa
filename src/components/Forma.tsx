import { FC, useRef, useState } from 'react';

interface User {
    id: number;
    name: string;
    kompName: string;
    position: string;
    isNew: boolean;
    isFeatured: boolean;
    skills: {
        fullstack: boolean;
        midweight: boolean;
        python: boolean;
        react: boolean;
    };
}

const Forma: FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const usenameRef = useRef<HTMLInputElement | null>(null);
    const kompaniyaRef = useRef<HTMLInputElement | null>(null);
    const lavozimRef = useRef<HTMLInputElement | null>(null);
    const yangiRef = useRef<HTMLInputElement | null>(null);
    const featuredRef = useRef<HTMLInputElement | null>(null);
    const fullstackRef = useRef<HTMLInputElement | null>(null);
    const midweightRef = useRef<HTMLInputElement | null>(null);
    const pythonRef = useRef<HTMLInputElement | null>(null);
    const reactRef = useRef<HTMLInputElement | null>(null);

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const newUser: User = {
            id: Date.now(),
            name: usenameRef.current?.value || '',
            kompName: kompaniyaRef.current?.value || '',
            position: lavozimRef.current?.value || '',
            isNew: yangiRef.current?.checked || false,
            isFeatured: featuredRef.current?.checked || false,
            skills: {
                fullstack: fullstackRef.current?.checked || false,
                midweight: midweightRef.current?.checked || false,
                python: pythonRef.current?.checked || false,
                react: reactRef.current?.checked || false,
            },
        };

        setUsers((prevUsers) => {
            const updatedUsers = [...prevUsers, newUser];
            return updatedUsers;
        });
        localStorage.setItem('users', JSON.stringify(users));
    }

    return (
        <div>
            <form className='border w-[450px] mx-auto my-20 mb-20 p-5 rounded-md'>
                <h1 className='text-2xl font-bold mb-7'>Vakansiya ma'lumotlarini kiriting</h1>

                <div className='flex flex-col w-max gap-3 text-xl font-semibold mb-5'>
                    <label htmlFor="url">Logotip URL</label>
                    <input ref={usenameRef} defaultValue={'https://picsum.photos/seed/picsum/200/300'} className='border border-black px-4 py-2 rounded-md outline-none' type="text" id='url' placeholder='Logotip URL mazilini kiriting' />
                </div>

                <div className='flex flex-col w-max gap-3 text-xl font-semibold mb-5'>
                    <label htmlFor="message">Kompaniya nomi</label>
                    <input ref={kompaniyaRef} defaultValue={'realsoft'} className='border border-black px-4 py-2 rounded-md outline-none' type="text" id='message' placeholder='Kompaniya nomi' />
                </div>

                <div className='flex gap-6 mb-5'>
                    <div className='flex gap-2 font-semibold text-xl'>
                        <input ref={yangiRef} className='w-4' type="checkbox" id="new" />
                        <label htmlFor="new">Yangi</label>
                    </div>
                    <div className='flex gap-2 font-semibold text-xl'>
                        <input ref={featuredRef} className='w-4' type="checkbox" id='fea' />
                        <label htmlFor="fea">Featured</label>
                    </div>
                </div>

                <div className='flex flex-col w-max gap-3 text-xl font-semibold mb-5'>
                    <label htmlFor="full">Lavozim</label>
                    <input ref={lavozimRef} defaultValue={'forntend midlle developer'} className='border border-black px-4 py-2 rounded-md outline-none' type="text" id='full' placeholder='Fullstack Developer' />
                </div>

                <div>
                    <h2 className='font-semibold text-xl mb-5'>Ko'nikmalar</h2>
                    <div className='flex gap-14'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-3 text-xl'>
                                <input ref={fullstackRef} className='w-4' type="checkbox" id="stack" />
                                <label htmlFor="stack">Fullstack</label>
                            </div>
                            <div className='flex gap-3 text-xl'>
                                <input ref={midweightRef} className='w-4' type="checkbox" id='mid' />
                                <label htmlFor="mid">Midweight</label>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-3 text-xl'>
                                <input ref={pythonRef} className='w-4' type="checkbox" id="pay" />
                                <label htmlFor="pay">Python</label>
                            </div>
                            <div className='flex gap-3 text-xl'>
                                <input ref={reactRef} className='w-4' type="checkbox" id='reac' />
                                <label htmlFor="reac">React</label>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick} className='font-semibold text-xl bg-black text-white py-3 w-full rounded-md my-5'>Saqlash</button>
                </div>
            </form>


            <div className="cart mb-56 ml-64">
                {
                    users.length && users.map((user, index) => {
                        console.log(user);

                        return (
                            <div key={index} className='w-[900px] flex items-center p-5 rounded-md shadow-md shadow-blue-700 justify-between mb-10'>
                                <div className='flex items-start gap-6'>
                                    <img className='rounded-full w-16 h-16' src={user.name} width={88} height={88} alt="logotip" />
                                    <div className='flex flex-col'>
                                        <span className='flex items-center gap-5'>
                                            <h3 className='text-[#5CA5A5]'>Photosnap</h3>
                                            {
                                                user.isNew && <button className='py-1 px-5 bg-[#5CA5A5] text-white hover:border-bl hover:bg-white hover:text-[#5CA5A5] border border-[#5CA5A5] rounded-full uppercase'>New</button>
                                            }
                                            {
                                                user.isFeatured && <button className='py-1 px-5 bg-black text-white hover:border-bl hover:bg-white hover:text-black border border-black rounded-full uppercase'>Featured</button>
                                            }
                                        </span>
                                        <h2 className='text-[#2B3939] text-xl capitalize font-semibold'>{user.position}</h2>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {
                                        user.skills.fullstack ? <button className='py-1 px-5 hover:bg-white border border-[#5ca5a5] bg-[#57b3b378] text-[#5CA5A5] rounded-full uppercase'>Fullstack</button> : <p></p>
                                    }
                                    {
                                        user.skills.midweight ? <button className='py-1 px-5 hover:bg-white border border-[#5ca5a5] bg-[#57b3b378] text-[#5CA5A5] rounded-full uppercase'>midweight</button> : <p></p>
                                    }
                                    {
                                        user.skills.python ? <button className='py-1 px-5 hover:bg-white border border-[#5ca5a5] bg-[#57b3b378] text-[#5CA5A5] rounded-full uppercase'>python</button> : <p></p>
                                    }
                                    {
                                        user.skills.react ? <button className='py-1 px-5 hover:bg-white border border-[#5ca5a5] bg-[#57b3b378] text-[#5CA5A5] rounded-full uppercase'>react</button> : <p></p>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Forma;
