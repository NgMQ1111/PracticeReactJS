import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Paragragh() {
    const context = useContext(ThemeContext)

  return (
    <p className={context.theme}>
      Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã bị chủ sở
      hữu cũ bán, nhóm không còn chất lượng vì có nhiều tin bán hàng, quảng cáo.
    </p>
  );
}

export default Paragragh;
