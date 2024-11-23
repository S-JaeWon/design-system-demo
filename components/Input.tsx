import React from "react";
import styled, { css } from "styled-components";

// ! 디자인 시스템 또는 UI 컴포넌트는 "서비스/비즈니스" 로직을 담아서는 안됩니다. => 어디서든 [재사용] 가능해야 하기 때문! => 가능성을 열어둬라!!!
type StyledProps = {
  type:
    | "Default"
    | "Leading-dropdown"
    | "Trailing-dropDown"
    | "Leading-text"
    | "Input-field"
    | "Payment-input";
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  // ? label이 피그마에서는 True/False이긴 한데, True면 그래서 뭔 내용인데? 가 필요해요 => string Optional
  // (디자인과 개발의 차이)
  label?: string;
  disabled?: boolean;
};

type Props = StyledProps & JSX.IntrinsicElements["input"]; // ? 우리가 정의한 props와 input 기본 props를 함께 받음.

export const Input = (props: Props) => {
  return (
    <Wrapper {...props}>
      {props?.label && <span className="label">{props.label}</span>}
      <div className="input-container">
        {props?.leadingIcon && (
          <div className="leading-icon">{props.leadingIcon}</div>
        )}
        <input
          disabled={props?.disabled}
          placeholder={props?.placeholder ?? ""}
        />
        {/* // * Conditional Rendering (조건부 렌더링) */}
        {/* // * Slot : props 등 데이터가 주입될 자리를 만들어 놓는 것. */}
        {props?.trailingIcon && (
          <div className="trailing-icon">{props.trailingIcon}</div>
        )}
      </div>
      {/* // TODO : Help Text Prop 설계 및 렌더링.
       <span>Help Text</span> */}
    </Wrapper>
  );
};

// * styled-components 활용법 2가지
/**
 *
 * 1) 각각의 분기가 너무 많아져서 분리를 더 하고 싶으면.
 * const Parent = styled.div``;
 * const Child = styled.div``;
 *
 *
 *      <Parent><Child /></Parent>
 *
 * 2) 꼭 그게 아니라면.
 *  const Parent = styled.div`
 *    .child1 {
 *        color: #111;  
 *    }
 * 
 *    input {
 *      color: q'1231'
 *    }
 * `;
 * 
 *      <Parent>
 *          <div className='child1' />
 *          <input />
 *      </Parent>

 */

// ? 크게 머리/가슴/배를 한번에 아우를 수 있는 큰 컨테이너.
const Wrapper = styled.div<StyledProps>(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    .label {
      font-size: ${theme.fontSize["ds-Text-sm-Medium"][0]};
      ${theme.fontSize["ds-Text-sm-Medium"][1]};
      color: ${theme.colors.comp.input.labelTextColor};
      margin-bottom: 6px;
    }

    .input-container {
      display: flex;
      align-items: center;
      border: 1px solid;
      border-radius: 8px;
      padding: 10px 14px;

      .leading-icon {
        margin-right: 8px;
      }

      input {
        /* // ? input 기본 스타일 제거 */
        /* reset.css, normalize.css, global.css */
        all: unset;
        width: 100%;
        color: ${theme.colors.comp.input.textColor.default};

        &::placeholder {
          color: ${theme.colors.comp.input.textColor.placeholder};
        }

        &:not(:placeholder-shown) {
          color: ${theme.colors.comp.input.textColor.filled};
        }
      }

      .trailing-icon {
        margin-left: 0px;
      }

      /* 값이 없으면 */
      &:has(input:placeholder-shown) {
        border-color: ${theme.colors.comp.input.borderColor.placeholder};
      }

      /* 값이 있으면 */
      &:has(input:not(:placeholder-shown)) {
        /* this.borderColor = ''; */
        border-color: ${theme.colors.comp.input.borderColor.focus};
      }

      &:has(input:disabled) {
        cursor: not-allowed;
        border-color: ${theme.colors.comp.input.borderColor.disabled};
        background-color: ${theme.colors.comp.input.backgroundColor.disabled};

        & input:disabled {
          color: ${theme.colors.comp.input.textColor.disabled};
        }
      }

      background-color: ${theme.colors.comp.input.backgroundColor.default};
    }
  `
);
/* export const Input2 = () => {
  return (
    <div>
      <svg />
      <input />
      <svg />
      <span />
    </div>
  );
};
 */
