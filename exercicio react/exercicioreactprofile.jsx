function Profile() {
      const nomeCompleto = 'Ruan Felipe';
      const profissao = 'Desenvolvedor Front-End';
      const cidade = 'Belo Horizonte';
      const fotoUrl = 'https://media.licdn.com/dms/image/v2/D4D35AQEqgvDJWPqfgA/profile-framedphoto-shrink_200_200/B4DZh6V4lBGgAY-/0/1754399214252?e=1763388000&v=beta&t=0LLDiI6TDnOtxnSY-S31KJ_Uh-lSh6zgKXAfAXCsans';

      const estiloPerfil = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #ccc',
        padding: '20px',
        borderRadius: '10px',
        width: '300px',
        margin: '50px auto',
        fontFamily: 'Arial, sans-serif'
      };

      const estiloImagem = {
        borderRadius: '50%',
        width: '120px',
        height: '120px',
        marginBottom: '15px'
      };

      return (
        <div style={estiloPerfil}>
          <img src={fotoUrl} alt="Foto de perfil" style={estiloImagem} />
          <h2>{nomeCompleto}</h2>
          <p>{profissao}</p>
          <p>{cidade}</p>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Profile />);