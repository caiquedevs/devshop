import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh);
  margin-top: 15px;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 675px) {
    margin-top: 42px;
  }

  > small {
    font-weight: 600;
    font-size: 18px;
    line-height: 16px;
    color: ${colors.silverDark};

    @media screen and (min-width: 675px) {
      font-size: 15px;
    }
  }

  h1 {
    margin-top: 10px;
    margin-bottom: 30px;

    font-weight: bold;
    font-size: 22px;
    line-height: 44px;
    color: ${colors.blueDark};

    @media screen and (min-width: 675px) {
      font-size: 40px;
      margin-bottom: 50px;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  max-width: 980px;
  list-style: none;

  display: flex;
  flex-direction: column;
`;

export const ItemList = styled.li`
  width: 100%;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #e9e9e9;
  border-radius: 5px;
  background: ${colors.ligth};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);

  animation: topAnimate 0.5s;
  transition: 0.5s all;

  @media screen and (min-width: 675px) {
    flex-direction: row;
    padding: 20px 40px;
  }

  + li {
    margin-top: 30px;
  }

  figure {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 675px) {
      height: 100px;
      flex-direction: row;
    }

    a:hover {
      filter: none;
    }

    img {
      max-width: 100px;
      max-height: 100%;
    }

    figcaption {
      padding: 0 15px;
      margin-top: 15px;

      display: flex;
      flex-direction: column;

      @media screen and (min-width: 675px) {
        padding: 0 40px;
        margin-top: 0px;
      }

      span {
        margin-bottom: 11px;
        font-weight: 500;
        font-size: 20px;
        line-height: 22px;
        color: ${colors.dark};

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      small {
        font-weight: 600;
        font-size: 15px;
        line-height: 16px;
        color: ${colors.silverDark};
      }
    }
  }

  div.btnGroup {
    width: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 675px) {
      width: auto;
      margin-top: 0px;
      flex-direction: column;
      justify-content: center;
    }

    button:nth-child(1) {
      width: 108px;
      height: 40px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${colors.silverDark};
      border-radius: 10px;

      font-weight: 600;
      font-size: 15px;
      line-height: 16px;

      color: ${colors.ligth};

      @media screen and (min-width: 675px) {
        margin-bottom: 13px;
      }
    }

    button:nth-child(2) {
      margin-left: 15px;
      font-weight: 600;
      font-size: 15px;
      line-height: 16px;

      color: ${colors.silverDark};

      @media screen and (min-width: 675px) {
        margin-left: 0px;
      }
    }
  }
`;

export const EmptyFavorites = styled.section`
  width: 100%;
  min-height: calc(100vh - 200px);
  padding-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: poppins, sans-serif;
    font-size: 20px;
    color: ${colors.blueDark};
  }

  p {
    margin-bottom: 30px;
    font-family: poppins, sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #667;
  }

  a {
    width: 280px;
    padding: 13px 6px;

    color: #39acdf;
    font-family: poppins, sans-serif;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: -0.4px;
    line-height: 20px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;

    border: solid 1px #39acdf;
    border-radius: 5px;
    background-color: transparent;
  }
`;
