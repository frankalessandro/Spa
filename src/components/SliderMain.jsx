import React, { useEffect, useRef, useState } from 'react';
import { PersonIcon, TimerIcon, HobbyKnifeIcon, ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import '../css/SliderMain.css';

export const SliderMain = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const slides = [
        {
            imgClass: 'img1',
            ReqConsulta: 'Si',
            title: 'Masaje Relajante',
            description: 'Este tratamiento se enfoca en aliviar el estrés acumulado y mejorar la circulación sanguínea. A través de técnicas de masaje suaves y fluidas, lograrás una profunda relajación que te permitirá desconectar de la rutina diaria y revitalizar tu cuerpo y mente.',
            edadMinima: '18 años',
            invasion: 'Baja',
            duracion: '60 minutos'
        },
        {
            imgClass: 'img2',
            ReqConsulta: 'Si',
            title: 'Tratamiento Facial',
            description: 'Una limpieza profunda que elimina impurezas y células muertas, seguido de un rejuvenecimiento facial que hidrata y revitaliza tu piel. Este tratamiento incluye masajes que estimulan la circulación, dejando tu rostro fresco y radiante. Ideal para cualquier tipo de piel.',
            edadMinima: '15 años',
            invasion: 'Media',
            duracion: '15 minutos'
        },
        {
            imgClass: 'img3',
            ReqConsulta: 'Si',
            title: 'Terapia de Piedras Calientes',
            description: 'Combina el poder del calor y la terapia de masaje. Las piedras calientes se colocan en puntos estratégicos del cuerpo para relajar los músculos y equilibrar la energía. Este tratamiento no solo ayuda a aliviar tensiones musculares, sino que también proporciona una experiencia de tranquilidad y bienestar general.',
            edadMinima: '18 años',
            invasion: 'Baja',
            duracion: '15 minutos'
        },
        {
            imgClass: 'img4',
            ReqConsulta: 'Si',
            title: 'Exfoliación Corporal',
            description: 'Un tratamiento revitalizante que elimina las células muertas de la piel, dejándola suave y sedosa. Utilizando productos naturales, la exfoliación ayuda a mejorar la circulación y promueve el crecimiento de nuevas células. Es el complemento perfecto para preparar tu piel para la hidratación posterior.',
            edadMinima: '12 años',
            invasion: 'Baja',
            duracion: '10 minutos'
        },
        {
            imgClass: 'img5',
            ReqConsulta: 'No',
            title: 'Masaje Deportivo',
            description: 'Diseñado específicamente para atletas y personas activas, este masaje se centra en aliviar las tensiones musculares causadas por el ejercicio. Utiliza técnicas de presión y estiramiento para ayudar a prevenir lesiones y acelerar la recuperación, permitiéndote volver a tus actividades favoritas con mayor agilidad.',
            edadMinima: '16 años',
            invasion: 'Media',
            duracion: '25 minutos'
        },
        {
            imgClass: 'img6',
            ReqConsulta: 'Si',
            title: 'Hidratación Corporal',
            description: 'Este tratamiento se enfoca en nutrir e hidratar profundamente la piel, ideal para contrarrestar la sequedad. A través de la aplicación de productos ricos en nutrientes, tu piel recuperará su elasticidad y luminosidad. Es perfecto para todo tipo de piel y deja una sensación de frescura y suavidad duradera.',
            edadMinima: '10 años',
            invasion: 'Baja',
            duracion: '45 minutos'
        },
    ];

    useEffect(() => {
        const slider = sliderRef.current;
        const nextBtn = document.querySelector('.next');
        const prevBtn = document.querySelector('.prev');

        const moveNext = () => {
            if (slider && slider.children.length > 0 && !isSliding) {
                setIsSliding(true);
                slider.appendChild(slider.firstElementChild);
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setTimeout(() => setIsSliding(false), 500); // Tiempo de la transición
            }
        };

        const movePrev = () => {
            if (slider && slider.children.length > 0 && !isSliding) {
                setIsSliding(true);
                slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
                setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
                setTimeout(() => setIsSliding(false), 500);
            }
        };

        nextBtn.addEventListener('click', moveNext);
        prevBtn.addEventListener('click', movePrev);

        const interval = setInterval(() => {
            moveNext();
        }, 15000); // Cambia cada 5 segundos

        return () => {
            clearInterval(interval);
            nextBtn.removeEventListener('click', moveNext);
            prevBtn.removeEventListener('click', movePrev);
        };
    }, [isSliding, slides.length]);

    return (
        <div className="container">
            <section className='content-info'>
                <div className="container-title">
                    <span>Nuestros Tratamientos</span>
                    <div className="buttons">
                        <span className="prev">
                            <ChevronLeftIcon width={30} height={30} />
                        </span>
                        <span className="next">
                            <ChevronRightIcon width={30} height={30} />
                        </span>
                    </div>
                </div>
                <div className={`content ${isSliding ? '' : 'active'}`}>
                    <h2>{slides[currentSlide].title}</h2>
                    <h4>{slides[currentSlide].ReqConsulta === 'Si' ? 'Requiere consulta' : 'No requiere consulta'}</h4>
                    <div className="btn-info">
                        <div className="btn-info-child">
                            <TimerIcon width={30} height={30} />
                            <div className='child-info'>
                                <p>Tiempo:</p>
                                <p>{slides[currentSlide].duracion}</p>
                            </div>
                        </div>
                        <div className="btn-info-child">
                            <HobbyKnifeIcon width={30} height={30} />
                            <div className='child-info'>
                                <p>Invasión:</p>
                                <p>{slides[currentSlide].invasion}</p>
                            </div>
                        </div>
                        <div className="btn-info-child">
                            <PersonIcon width={30} height={30} />
                            <div className='child-info'>
                                <p>Edad Mínima:</p>
                                <p>{slides[currentSlide].edadMinima}</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-descr'>
                        <p>{slides[currentSlide].description}</p>
                    </div>
                    <div className='container-btn-showmore'>
                        <button className='content-btn'>Saber más</button>
                    </div>
                </div>
            </section>
            <div className="slider" ref={sliderRef}>
                {slides.map((slide, index) => (
                    <div key={index} className={`slides ${slide.imgClass}`}>
                        {/* Imagen o contenido visual del slider */}
                    </div>
                ))}
            </div>
        </div>
    );

};
