import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex; // Organiza na horizontal.
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: 3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block; // Organiza na vertical, default inline.
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block; // Para conseguir aplicar margin-top, pois não funciona no inline.
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    //display: block; // Na ancora o default é inline, com block o background fica em tudo.
    text-decoration: none; // tirar underline dos textos.
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(
        10px
      ); //quando o mouse estiver em cima mover no eixo x 10px.
    }

    & + a {
      // & representa o próprio elemento; & + a: aplica o estilo somente quanto for precedido por uma ancora.
      // Também pode ser usado "a + a" dentro do elemento pai.
      // Isso será muito útil para diversas aplicações.
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1; // Ajustar a div ao restante do espaço.

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
