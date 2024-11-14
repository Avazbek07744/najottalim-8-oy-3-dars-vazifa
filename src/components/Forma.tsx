import { FC, useRef, useState, useEffect } from 'react';

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

    useEffect(() => {
        const savedUsers = localStorage.getItem('users');
        if (savedUsers) {
            setUsers(JSON.parse(savedUsers));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

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

        setUsers((prevUsers) => [...prevUsers, newUser]);
    }

    return (
        <div>
            {/* Your form and rendering logic */}
        </div>
    );
};

export default Forma;
