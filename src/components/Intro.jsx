import React from 'react';

function Intro() {
    return (
        <div className="flex pl-10
        flex-col text-left pt-10
        pb-6">
            <h1 className="text-4xl md:text-7xl 
            mb-1 md:mb-3 font-bold">Федор</h1>
            <p className="text-base md:text-xl mb-2
            font-medium">Intern Software Engineer & 
            Web Developer</p>
            <p className="text-sm max-w-xl mb-6
            font-bold">Я – 17-и летний студент колледжа Кибербезопасности
            и Программирования {' '}
            <a
                href="https://www.mirea.ru/education/college/about-college"
                target="_blank" 
                className='text-orange-600 hover:underline
                underline-offset-2 decoration-2
                decoration-orange-600'
                rel="noreferer noopener"
            >
                КПК МИРЭА
            </a>. Я учучь на 2-м курсе по специальности "Информационные системы
            и программирование".
            <br /> 
            <br />
            Все проекты, которые я сделал, строились с нуля: начиная с планирования
            и заканчивая реализацией.
            </p>
        </div>
    )
}

export default Intro;
