'use client'
import Title from '@/components/Title';
import React from 'react'
import Swal from 'sweetalert2';

const Contact = () => {
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "52b7ddf3-2fd4-47d9-933d-3218c6bad80b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Sucess!",
                text: "Your message was sent to me successfully!",
                icon: "success"
            });
        }
    };
    return (
        <section id='contact' className='flex justify-center items-center min-h-[100vh] py-20'>
            <div className='container max-w-7xl'>
                <Title title='Get In Touch' />
                <div className='flex justify-center'>
                    <form onSubmit={onSubmit} className='max-w-[600px] w-full bg-dark-grey p-10 rounded-xl text-white my-5 mx-10'>
                        <div className='flex justify-center'>
                            <h2 className='inline-block font-bold text-2xl mb-3
                            bg-gradient-to-r from-pink to-white text-transparent bg-clip-text'>
                                Contact me</h2>
                        </div>
                        <p className='font-thin text-center mb-4'>Have a question or project in mind? I&apos;d love to hear from you!</p>
                        <div className='mt-5 mb-5'>
                            <label className='inline-block mb-3'>Name</label>
                            <input type="text" name='name' className='w-full h-12 bg-transparent border rounded-lg p-3'
                                placeholder='John' required />
                        </div>
                        <div className='mb-5'>
                            <label className='inline-block mb-3'>E-mail</label>
                            <input type="text" name='email' className='w-full h-12 bg-transparent border rounded-lg p-3'
                                placeholder='john@gmail.com' required />
                        </div>
                        <div className='mb-5'>
                            <label className='inline-block mb-3'>Your message</label>
                            <textarea name='message' placeholder='Let me know what you think...' className='w-full h-[200px] resize-none bg-transparent border rounded-lg p-3' required></textarea>
                        </div>
                        <button className='w-full h-12 bg-gradient-to-r from-pink via-purple to-dark-blue
                        text-white rounded-lg font-semibold' type='submit'>
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact