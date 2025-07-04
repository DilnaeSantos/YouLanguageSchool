<div className="container">
                <header className="header">
                    <img className="logo" src={logo} alt="logo" />
                    <div className="infoProf">
                        <div className="saldo">saldo R$ 0,00</div>
                        <img className="logo2" src={imgdoperfil} alt="perfil" />
                    </div>
                </header>
                <nav className="navegacao">
                    {["Agenda", "Minhas Aulas", "Mensagens", "Criar Sala De Aula", "Meus alunos", "Meu perfil", "Configurações"].map((btnText) => (
                        <button
                            key={btnText}
                            className={`btn1 ${activeButton === btnText ? "active" : ""}`}
                            onClick={() => handleClick(btnText)}
                        >
                            <span>{btnText}</span>
                        </button>
                    ))}
                </nav>
                <section className={`conteudo ${activeButton?.toLowerCase().replace(/\s+/g, '-')}-page`}>
                    {activeButton === "Agenda" && <Calendario />}
                    {activeButton === "Minhas Aulas" && <div>Minhas Aulas</div>}
                    {activeButton === "Mensagens" && <div>Mensagens</div>}
                    {activeButton === "Criar Sala De Aula" && <div>Criar Sala De Aula</div>}
                    {activeButton === "Meus alunos" && <div>Meus alunos</div>}
                    {activeButton === "Meu perfil" && <div>Meu perfil</div>}
                    {activeButton === "Configurações" && <div>Configurações</div>}
                </section>
            </div>