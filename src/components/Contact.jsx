import React from 'react';

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form
                    action="https://getform.io/f/e8515bde-f5f9-47a0-a792-3c5790c2da3f"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder='Имя'
                        className='p-2 bg-transparent border-2 rounded-lg focus:outline-none'
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder='Почта'
                        className='my-2 p-2 bg-transparent border-2 rounded-lg focus:outline-none'
                    />
                    <textarea
                        name="message"
                        placeholder="Сообщение"
                        rows='10'
                        className="my-2 p-2 bg-transparent border-2 rounded-lg focus:outline-none"
                    />
                    <button 
                        name="button"
                        className='text-center inline-block px-8 py-3 w-max text-base
                        font-medium rounded-md text-white bg-gradient-to-r
                        from-red-400 to-blue-500'
                    >
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
