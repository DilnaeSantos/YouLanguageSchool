import { useState } from 'react';
import { Stylebody } from './styles';
import imgCaderno from '../../../assets/imgs/caderno.svg';
import AulaA1 from '../../aulas/A1';

const Call = () => {
    const [showContent, setShowContent] = useState(false);
    const [containerClass, setContainerClass] = useState('containerCall');
    const [showAulaA1, setShowAulaA1] = useState(false);
    const [projectUrl] = useState('https://0a501a78666cd0fb257d.vercel.app/create');

    const toggleContent = () => {
        setShowContent(!showContent);
        setContainerClass(showContent ? 'containerCall' : 'containerCallAlteredStyle');
    };

    const openAulaA1 = () => {
        setShowAulaA1(true);
        setShowContent(false);
    };

    const closeAulaA1 = () => {
        setShowAulaA1(false);
        setShowContent(true);
    };

    return (
        <Stylebody>
            <button className='btnCaderno' onClick={toggleContent}><img src={imgCaderno} alt="" /></button>
            <div className='containerPrincipal'>
                <div className='containerShow'>
                    {showContent && (
                        <div className='contentBtn'>
                            <div className='divBtnConteudos'>
                                <button className='btnConteudo' onClick={openAulaA1}>A1</button>
                                <button className='btnConteudo'>A2</button>
                                <button className='btnConteudo'>A3</button>
                            </div>
                            <div className='divBtnConteudos'>
                                <button className='btnConteudo'>B1</button>
                                <button className='btnConteudo'>B2</button>
                                <button className='btnConteudo'>B3</button>
                            </div>
                            <div className='divBtnConteudos'>
                                <button className='btnConteudo'>C1</button>
                                <button className='btnConteudo'>C2</button>
                                <button className='btnConteudo'>C3</button>
                            </div>
                            <div className='divBtnConteudos'>
                                <button className='btnConteudoConversation'>Conversation</button>
                            </div>
                        </div>
                    )}
                    {showAulaA1 ? (
                        <>
                            <button className='btnFecharModulos' onClick={closeAulaA1}>Sair Da Aula</button>
                            <AulaA1 />
                        </>
                    ) : (
                        <></>
                    )}
                </div>
                <div className={containerClass}>
                    <iframe 
                        src={projectUrl} 
                        width="100%" 
                        height="630vh" 
                        style={{ border: 'none' }} 
                        allow="camera; microphone" 
                        allowFullScreen 
                    />
                </div>
            </div>
        </Stylebody>
    );
};

export default Call;
