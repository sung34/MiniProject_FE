import { useState, MouseEventHandler } from 'react';
import * as S from './style';

function UserSelect() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string | null>('이름');

  const toggleHandle = () => setIsOpen(!isOpen);
  const optionHandle: MouseEventHandler<HTMLSpanElement> = (e) => {
    const value = (e.target as HTMLDivElement).textContent;

    setSelectedText(value);
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ height: 48 }}>
      <S.selectMenuBox>
        <div onClick={toggleHandle}>{selectedText}</div>
      </S.selectMenuBox>
      <S.SelectDropBoxWrap>
        {isOpen && (
          <S.DropBoxContainer>
            <div>
              <div onClick={optionHandle}>이름</div>
              <div onClick={optionHandle}>이메일</div>
            </div>
          </S.DropBoxContainer>
        )}
      </S.SelectDropBoxWrap>
    </div>
  );
}

export default UserSelect;
