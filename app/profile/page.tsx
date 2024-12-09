'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { RiTeamFill } from "react-icons/ri";
import { IoIosPerson } from "react-icons/io";
import { FaQrcode } from "react-icons/fa";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from '@nextui-org/react';
import { Navbar } from "@/components/navbar";

const Profile = () => {
    // State to manage which modal is open
    const [activeModal, setActiveModal] = useState<number | null>(null);

    const handleOpenModal = (modalIndex: number) => {
        setActiveModal(modalIndex);
    };

    const handleCloseModal = () => {
        setActiveModal(null);
    };

    const cards = [
        {
            title: 'Personal Details',
            icon: <IoIosPerson className='size-20' />,
            bg: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
            content: 'Details about My Slots.',
        },
        {
            title: 'Team Details',
            icon: <RiTeamFill   className='size-20'/>,
            bg: 'bg-gradient-to-r from-blue-400 to-blue-600',
            content: 'Details about My Meetings.',
        },
        {
            title: 'QR Code',
            icon: <FaQrcode  className='size-20'/>,
            bg: 'bg-gradient-to-r from-blue-400 to-blue-600',
            content: 'Details about My Meetings.',
        },
    ];

    return (
        <>  
        <Navbar/>
        <div className="container mx-auto p-6 font-sans min-h-screen flex flex-col">
            {/* Header Section */}
            <header className="flex items-center justify-between mb-10 border-b-2 pb-6 border-gray-300">
                <div className="flex items-center">
                    {/* Profile Image */}
                    <Image
                        src="https://envs.sh/1vp.jpg"
                        alt="Profile Image"
                        width={100}
                        height={100}
                        className="rounded-full mr-6 border-4 border-blue-500 p-1 shadow-lg hover:scale-110 transition-transform duration-300"
                    />
                    <div className="text-left">
                        <h1 className="text-3xl font-bold text-blue-800 hover:text-blue-600 transition-colors duration-300">
                            Name
                        </h1>
                        <p className="text-gray-700 text-lg">hi@gmail.com</p>
                        <p className="text-gray-700 text-lg">4567834343</p>
                    </div>
                </div>
            </header>

        
            <nav className="flex-grow flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleOpenModal(index)}
                            className={`${item.bg} group flex flex-col items-center justify-center w-64 h-64 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer`}
                        >
                            {/* Card Icon */}
                            {typeof item.icon === 'string' ? (
                                <Image
                                    src={item.icon}
                                    alt={`${item.title} Icon`}
                                    width={60}
                                    height={60}
                                    className="mb-4 group-hover:scale-110 transition-transform duration-300"
                                />
                            ) : (
                                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                            )}
                            {/* Card Title */}
                            <h2 className="text-xl font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
                                {item.title}
                            </h2>
                        </div>
                    ))}
                </div>
            </nav>



            {/* Modals */}
            {cards.map((item, index) => (
                <Modal
                    key={index}
                    isOpen={activeModal === index}
                    onOpenChange={handleCloseModal}
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    {item.title}
                                </ModalHeader>
                                <ModalBody>
                                    <p className="text-gray-700">{item.content}</p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            ))}

            {/* Footer Section */}
            <footer className="text-center mt-16 border-t-2 pt-6 border-gray-300">
                <p className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300">
                    Copyright © 2024 | Kerala Startup Mission
                </p>
                <p className="text-sm text-gray-600">
                    <a
                        href="/terms"
                        className="hover:text-blue-500 transition-colors duration-300"
                    >
                        Terms and Conditions
                    </a>{' '}
                    |{' '}
                    <a
                        href="/privacy"
                        className="hover:text-blue-500 transition-colors duration-300"
                    >
                        Privacy Policy
                    </a>
                </p>
            </footer>
        </div>
        </>
    );
};

export default Profile;
